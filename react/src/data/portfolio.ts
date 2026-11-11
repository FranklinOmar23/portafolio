/**
 * Contenido del portafolio. Edita aquí textos, proyectos y enlaces:
 * las secciones solo leen de este archivo.
 */

export const links = {
  email: "fdisla@arcodedominicana.com",
  phone: "+1 (809) 973-5660",
  phoneHref: "tel:+18099735660",
  whatsapp: "https://wa.me/18099735660?text=Hola!%20Me%20gustar%C3%ADa%20contactarte.",
  github: "https://github.com/franklinomar23",
  linkedin: "", // TODO: tu URL de LinkedIn (vacío = no se muestra el botón)
  instagram: "", // TODO: tu URL de Instagram (vacío = no se muestra el botón)
  arcode: "https://arcodedominicana.com",
  location: "Santo Domingo Norte, RD",
  maps: "https://www.google.com/maps/search/Santo+Domingo+Norte,+Rep%C3%BAblica+Dominicana",
}

export const skills = [
  { name: "Node.js", mono: "Nd", color: "#6CC24A" },
  { name: "React", mono: "Re", color: "#61DAFB" },
  { name: "TypeScript", mono: "Ts", color: "#5B9BE6" },
  { name: "Next.js", mono: "Nx", color: "#FFFFFF" },
  { name: "C#", mono: "C#", color: "#C77DC4" },
  { name: "SQL Server", mono: "Sq", color: "#F05A5A" },
  { name: "PostgreSQL", mono: "Pg", color: "#7FA9DB" },
  { name: "Supabase", mono: "Sb", color: "#3ECF8E" },
  { name: "WordPress", mono: "Wp", color: "#4AA3D8" },
  { name: "Proxmox", mono: "Px", color: "#FF8A2B" },
  { name: "PowerShell", mono: "Ps", color: "#6FA4FF" },
  { name: "Active Directory", mono: "Ad", color: "#3EA0F0" },
]

export const experience = [
  { years: "2025 – Presente", role: "Cofundador & Full Stack", company: "Arcode Dominicana" },
  { years: "2023 – Presente", role: "Encargado de Soporte Técnico", company: "TSI Dominicana" },
  { years: "2021 – Presente", role: "Scrum Master & Developer", company: "Freelance" },
]

export const certifications = [
  "Certified Scrum Master (CSM)",
  "Administración de Windows Server",
  "Especialista en Active Directory",
  "Desarrollo de Plugins WordPress",
]

export type Project = {
  title: string
  /** Frase corta para la tarjeta polaroid. */
  description: string
  /** Texto completo que aparece en el modal de detalle. */
  details: string
  /** Puntos clave / funcionalidades (modal). */
  highlights: string[]
  tech: string[]
  image: string
  rotate: string
  /** Enlaces opcionales: vacío = no se muestra el botón. */
  demo?: string
  repo?: string
}

/** Se muestran los 4 primeros; si hay más, aparece el botón "Ver más". */
export const projects: Project[] = [
  {
    title: "Sistema de Gestión Hospitalaria",
    description: "Pacientes, médicos, citas, inventario y roles.",
    details:
      "Aplicación completa desarrollada en Node.js y React para la administración de pacientes, médicos y citas médicas. Incluye control de inventario, reportes y gestión de usuarios con diferentes roles.",
    highlights: ["Gestión de pacientes y médicos", "Agenda de citas médicas", "Control de inventario", "Reportes", "Usuarios con distintos roles"],
    tech: ["Node.js", "React", "SQL Server", "Express"],
    image: "/hospital-system.png",
    rotate: "-2.5deg",
    demo: "", // TODO
    repo: "", // TODO
  },
  {
    title: "Generador de Volantes de Pago",
    description: "PDFs automáticos desde datos de nómina.",
    details:
      "Herramienta desarrollada en Python para automatizar la creación de volantes de pago en PDF a partir de datos de nómina. Reduce tiempos de generación y mejora la precisión en los cálculos.",
    highlights: ["Lee los datos de nómina desde Excel", "Genera un PDF por empleado", "Cálculos automáticos y precisos", "Menos tiempo de generación"],
    tech: ["Python", "Pandas", "ReportLab", "Excel"],
    image: "/payroll-generator.png",
    rotate: "1.8deg",
    demo: "",
    repo: "",
  },
  {
    title: "Sistema de Organización de Viajes",
    description: "Reservas, clientes, pagos y cupos para agencias.",
    details:
      "Plataforma web que permite gestionar reservas, clientes y pagos para agencias de viajes. Incluye panel administrativo, historial de excursiones y control de cupos disponibles.",
    highlights: ["Reservas y clientes", "Registro de pagos", "Panel administrativo", "Historial de excursiones", "Control de cupos disponibles"],
    tech: ["React", "Vite", "Supabase", "Node.js"],
    image: "/travel-system.png",
    rotate: "-1.2deg",
    demo: "",
    repo: "",
  },
  {
    title: "Generador y Gestor de PDF",
    description: "Convertir imágenes a PDF, separar y unir documentos.",
    details:
      "Aplicación web desarrollada en React que permite convertir imágenes en archivos PDF, separar documentos por páginas y unir varios PDF en uno solo. Una herramienta práctica y rápida para la gestión de documentos digitales.",
    highlights: ["Convierte imágenes a PDF", "Separa documentos por páginas", "Une varios PDF en uno", "Todo desde el navegador"],
    tech: ["React", "JavaScript", "PDF.js", "FileSaver.js"],
    image: "/pdf-generator.png",
    rotate: "2.6deg",
    demo: "",
    repo: "",
  },
]

/** Proyecto destacado ("Gran Proyecto"). Textos tomados de vortex-pos.com */
export const featured = {
  name: "Vortex",
  logo: "/vortex/logo.png",
  tagline: "Control de ventas y facturación automática",
  description:
    "Software de punto de venta para negocios de mostrador: cobras, facturas, descuentas inventario y cierras caja desde la misma pantalla, y administras todas tus sucursales desde un solo lugar.",
  highlights: [
    "Cobro en efectivo, tarjeta o transferencia",
    "Inventario sincronizado en tiempo real",
    "Comprobantes fiscales electrónicos",
    "Varias sucursales en un mismo sistema",
  ],
  tags: ["Punto de venta", "Inventario", "Facturación", "Multi-sucursal"],
  url: "https://vortex-pos.com",
  image: "/vortex/pos.webp",
  gallery: [
    { src: "/vortex/inventario.webp", caption: "Inventario" },
    { src: "/vortex/factura.webp", caption: "Cobro y factura" },
    { src: "/vortex/sucursales.webp", caption: "Sucursales" },
  ],
}
