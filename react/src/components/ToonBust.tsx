import { useEffect, useRef, useState } from "react"

/**
 * Busto 3D estilizado (toon shading + contorno negro) dibujado con WebGL puro:
 * un fragment shader hace raymarching de formas SDF (cabeza, pelo corto,
 * cuello, saco, camisa y corbata). Sin dependencias ni modelos .glb.
 *
 * - Gira en loop continuo sobre su eje vertical.
 * - Con el puntero encima, se voltea a mirar hacia el cursor.
 */

const VS = "attribute vec2 a;void main(){gl_Position=vec4(a,0.0,1.0);}"

const FS = `
precision highp float;
uniform vec2 uRes; uniform float uYaw; uniform float uPitch;
float sdE(vec3 p, vec3 r){ float k0=length(p/r); float k1=length(p/(r*r)); return k0*(k0-1.0)/k1; }
float smin(float a,float b,float k){ float h=clamp(0.5+0.5*(b-a)/k,0.0,1.0); return mix(b,a,h)-k*h*(1.0-h); }
float sdCap(vec3 p, vec3 a, vec3 b, float r){ vec3 pa=p-a, ba=b-a; float h=clamp(dot(pa,ba)/dot(ba,ba),0.0,1.0); return length(pa-ba*h)-r; }
float seg(vec2 p, vec2 a, vec2 b){ vec2 pa=p-a, ba=b-a; float h=clamp(dot(pa,ba)/dot(ba,ba),0.0,1.0); return length(pa-ba*h); }
vec3 toObj(vec3 p){
  float c=cos(uYaw), s=sin(uYaw);
  p=vec3(c*p.x+s*p.z, p.y, -s*p.x+c*p.z);
  float cp=cos(uPitch), sp=sin(uPitch);
  return vec3(p.x, cp*p.y-sp*p.z, sp*p.y+cp*p.z);
}
float grain(vec3 p){ return sin(p.x*70.0)*sin(p.y*70.0+1.3)*sin(p.z*70.0+0.7); }
vec2 map(vec3 w){
  vec3 p=toObj(w); vec3 q=vec3(abs(p.x),p.y,p.z);
  // cabeza + mandíbula + nariz + orejas + cuello
  float d=sdE(p-vec3(0.0,0.15,0.0),vec3(0.38,0.50,0.43));
  d=smin(d,sdE(p-vec3(0.0,-0.10,0.07),vec3(0.29,0.30,0.32)),0.12);
  d=smin(d,sdE(p-vec3(0.0,0.03,0.42),vec3(0.06,0.12,0.09)),0.05);
  d=smin(d,sdE(q-vec3(0.39,0.06,-0.02),vec3(0.05,0.11,0.08)),0.03);
  d=smin(d,sdCap(p,vec3(0.0,-0.25,-0.03),vec3(0.0,-0.75,-0.03),0.15),0.06);
  float m=0.0;
  // pelo corto: casquete pegado a la cabeza, más alto arriba
  float hd=sdE(p-vec3(0.0,0.19,-0.02),vec3(0.40,0.53,0.45))+0.004*grain(p);
  float th=0.36+0.10*max(p.z,0.0)-0.40*max(-p.z,0.0);
  hd=max(hd,th-p.y);
  if(hd<d){ d=hd; m=1.0; }
  // saco
  float tor=sdE(p-vec3(0.0,-1.08,-0.03),vec3(0.92,0.44,0.44));
  if(tor<d) m=2.0;
  return vec2(smin(d,tor,0.10),m);
}
void main(){
  vec2 uv=(gl_FragCoord.xy*2.0-uRes)/uRes.y;
  vec3 ro=vec3(0.0,-0.18,3.2);
  vec3 rd=normalize(vec3(uv,-2.7));
  float t=1.8; float minD=1e9; vec2 h=vec2(1.0,0.0); bool hit=false;
  for(int i=0;i<110;i++){
    h=map(ro+rd*t);
    minD=min(minD,h.x);
    if(h.x<0.0012){ hit=true; break; }
    t+=h.x*0.72;
    if(t>5.0) break;
  }
  vec3 ink=vec3(0.067);
  if(!hit){ gl_FragColor = minD<7.0/uRes.y ? vec4(ink,1.0) : vec4(0.0); return; }
  vec3 pw=ro+rd*t; vec2 e=vec2(0.0015,0.0);
  vec3 n=normalize(vec3(map(pw+e.xyy).x-map(pw-e.xyy).x, map(pw+e.yxy).x-map(pw-e.yxy).x, map(pw+e.yyx).x-map(pw-e.yyx).x));
  if(dot(n,-rd)<0.24){ gl_FragColor=vec4(ink,1.0); return; }
  vec3 L=normalize(vec3(0.55,0.65,0.75));
  float lam=dot(n,L);
  vec3 p=toObj(pw); vec3 q=vec3(abs(p.x),p.y,p.z);
  vec3 col;
  if(h.y<0.5){
    col = lam>0.55 ? vec3(0.97) : (lam>0.12 ? vec3(0.80) : vec3(0.58));
    if(lam<0.12 && fract((pw.x+pw.y)*55.0)<0.35) col=vec3(0.35);
    if(p.z>0.18){
      vec2 f=vec2(q.x,p.y);
      float ee=length((f-vec2(0.14,0.12))/vec2(0.07,0.032));
      if(ee<1.0){ col=vec3(1.0); if(ee>0.74 || length(f-vec2(0.14,0.12))<0.022) col=ink; }
      if(seg(f,vec2(0.05,0.20),vec2(0.24,0.225))<0.018) col=ink;          // cejas
      if(seg(f,vec2(0.0,-0.085),vec2(0.11,-0.105))<0.012) col=ink;        // bigote fino
      if(seg(f,vec2(0.0,-0.15),vec2(0.075,-0.145))<0.008) col=ink;        // boca
      if(length(f-vec2(0.033,-0.035))<0.013) col=ink;                      // fosas nasales
      if(length((f-vec2(0.0,-0.30))/vec2(0.075,0.065))<1.0) col=ink;       // perilla
    }
  } else if(h.y<1.5){
    col = lam>0.6 ? vec3(0.28) : vec3(0.09);                                // pelo corto
  } else {
    col = lam>0.62 ? vec3(0.34) : vec3(0.07);                               // saco oscuro
    float vw=(p.y+1.30)*0.34;                                               // abertura en V
    if(p.z>0.0 && p.y>-1.30 && q.x<vw){
      col = lam>0.2 ? vec3(0.97) : vec3(0.78);                              // camisa blanca
      float tw=0.035+(-0.66-p.y)*0.03;
      if(q.x<tw && p.y<-0.70) col=lam>0.6 ? vec3(0.30) : vec3(0.10);        // corbata
      if(abs(q.x-tw)<0.008 && p.y<-0.70) col=ink;
    }
    if(p.z>0.0 && p.y>-1.30 && abs(q.x-vw)<0.012) col=ink;                  // solapa
  }
  gl_FragColor=vec4(col,1.0);
}`

type Props = { spinSpeed?: number; label?: string }

export function ToonBust({ spinSpeed = 1, label = "Busto 3D estilizado de Franklin, girando" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointer = useRef({ hover: false, yaw: 0, pitch: 0 })
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const gl = c.getContext("webgl", { premultipliedAlpha: false, alpha: true, antialias: true })
    if (!gl) { setFailed(true); return }

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!
      gl.shaderSource(s, src); gl.compileShader(s)
      return s
    }
    const prog = gl.createProgram()!
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VS))
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FS))
    gl.linkProgram(prog)
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { setFailed(true); return }
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(prog, "a")
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)
    const uRes = gl.getUniformLocation(prog, "uRes")
    const uYaw = gl.getUniformLocation(prog, "uYaw")
    const uPitch = gl.getUniformLocation(prog, "uPitch")

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let yaw = 0.6, pitch = 0, raf = 0, visible = true
    const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting })
    io.observe(c)

    const tick = () => {
      raf = requestAnimationFrame(tick)
      if (!visible) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = Math.max(1, Math.round(c.clientWidth * dpr))
      const h = Math.max(1, Math.round(c.clientHeight * dpr))
      if (c.width !== w || c.height !== h) { c.width = w; c.height = h }

      const ptr = pointer.current
      if (ptr.hover) {
        const d = Math.atan2(Math.sin(ptr.yaw - yaw), Math.cos(ptr.yaw - yaw))
        yaw += d * 0.08
        pitch += (ptr.pitch - pitch) * 0.08
      } else {
        yaw += 0.012 * spinSpeed * (reduced ? 0.25 : 1)
        pitch *= 0.95
      }
      gl.viewport(0, 0, w, h)
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.uniform2f(uRes, w, h)
      gl.uniform1f(uYaw, yaw)
      gl.uniform1f(uPitch, pitch)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }
    raf = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(raf); io.disconnect() }
  }, [spinSpeed])

  const onMove = (e: React.PointerEvent<HTMLSpanElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    const nx = ((e.clientX - r.left) / r.width) * 2 - 1
    const ny = ((e.clientY - r.top) / r.height) * 2 - 1
    pointer.current = { hover: true, yaw: -nx * 0.9, pitch: -ny * 0.3 }
  }
  const onLeave = () => { pointer.current.hover = false }

  return (
    <span className="hero__bust" onPointerMove={onMove} onPointerLeave={onLeave}>
      <canvas ref={canvasRef} role="img" aria-label={label} />
      {failed && <span className="hero__fallback">O</span>}
    </span>
  )
}
