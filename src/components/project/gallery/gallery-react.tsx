import { useContext } from "react";
import { GalleryContext } from "./contextItem.js";
import MasonryItem from "./masonry-item.tsx";
import { motion, AnimatePresence } from "framer-motion";
import type { ProjectType } from "@/util/interface.tsx";
import uuid from "react-uuid";

type GalleryType = {
  ProjectGallery: Array<ProjectType>;
};

const Gallery = (props: GalleryType) => {
  const { ProjectGallery, SelectedCategory } = useContext(GalleryContext);
  var filteredProjects: Array<ProjectType> = [];
  if (ProjectGallery && ProjectGallery && ProjectGallery.length > 0) {
    if (SelectedCategory.toLowerCase() === "all") {
      filteredProjects = [...ProjectGallery];
    } else {
      filteredProjects = ProjectGallery.filter(
        (project: ProjectType) => project.category === SelectedCategory,
      );
    }
  }
  return (
    <AnimatePresence>
      {filteredProjects.map((project: ProjectType) => (
        <MasonryItem
          image={project.image}
          thumbnail={project.thumbnail}
          images={project.images}
          altText={project.altText}
          name={project.name}
          category={project.category}
          key={uuid()}
        />
      ))}
    </AnimatePresence>
  );
};
export default Gallery;
