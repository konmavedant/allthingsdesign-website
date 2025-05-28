import type React from "react"

interface Project {
  name: string
  image: string
  size: string
}

interface GalleryProps {
  projects: Project[]
}

const getSizeClasses = (size: string) => {
  switch (size) {
    case "large":
      return "md:col-span-2 md:row-span-2 h-96 md:h-[500px]"
    case "medium":
      return "md:col-span-2 h-64 md:h-80"
    case "small":
      return "h-64"
    default:
      return "h-64"
  }
}

const Gallery: React.FC<GalleryProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`group cursor-pointer overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-700 rounded-lg ${getSizeClasses(
            project.size,
          )}`}
        >
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.name}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          />
        </div>
      ))}
    </div>
  )
}

export default Gallery
