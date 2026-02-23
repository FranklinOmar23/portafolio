interface ImageDisplayProps {
  imageUrl: string
  altText?: string
}

export function ImageDisplay({ imageUrl, altText = "Franklin Disla - Full Stack Developer" }: ImageDisplayProps) {
  return (
    <div className="relative">
      <img
        src={imageUrl}
        alt={altText}
        width={400}
        height={500}
        className="rounded-2xl shadow-2xl"
      />
    </div>
  )
}