import { useContext } from "react";
import { GalleryContext } from "./contextItem.js";
import "./gallery.css";
import { motion, AnimatePresence } from "framer-motion";
import type { ProjectType } from "@/util/interface";
import LightBulbIcon from "@/assets/icons/lightbulb.webp";

const MasonaryItem = (props: ProjectType) => {
  const { image, thumbnail, altText = "", name = "", category = "" } = props;
  const { customIcon } = useContext(GalleryContext);
  const urlTitle = name.toLowerCase().replace(/\s+/g, "_");
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="masonry-item small-column all product urban maintanance mx-auto"
    >
      <a href={`./projects/${urlTitle}`} className="inline-block text-white">
        <div className="project-block-one bg-primaryC cursor-pointer rounded-lg">
          <div className="inner-block item-center relative mb-8 block bg-primaryC rounded-lg w-auto w-11/12 mx-auto sm:w-[370px]">
            {thumbnail && (
              <figure className="image-box relative block rounded-md overflow-hidden h-auto sm:h-[290px]">
                <img
                  loading="lazy"
                  decoding="async"
                  src={thumbnail.src as any}
                  alt={altText}
                  className="object-cover w-full h-full rounded-lg"
                />
              </figure>
            )}
            <div className="content-box absolute h-full flex text-center transition duration-300 bg-primaryC rounded-lg">
              <div className="inner relative">
                <div className="icon-box relative mb-5 mx-auto flex rounded-lg bg-white text-3xl transition-all duration-300">
                  <img
                    src={customIcon ? customIcon.src : LightBulbIcon.src}
                    className="w-[50px] aspect-square m-auto"
                    alt="light bulb icon"
                  />
                </div>
                <h3 className="mb-3 block text-lg font-medium text-white transition duration-300">
                  <a
                    href={`./projects/${urlTitle}`}
                    className="inline-block text-white"
                  >
                    {name.toUpperCase()}
                  </a>
                </h3>
                <span className="relative block text-white transition duration-300">
                  {category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};
export default MasonaryItem;
