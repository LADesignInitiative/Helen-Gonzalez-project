import type { ImageItemType, ContextType } from "./interface.tsx";
import { useContext, useRef, useEffect } from "react";
import { GalleryContext } from "./contextItem.tsx";

const ImageItem = (props: ImageItemType) => {
  const { image, altText, url, customStyle, index } = props;
  const { OpenLightBox, setIndex, currentIndex } = useContext<ContextType>(
    GalleryContext as any,
  );
  const imgRef = useRef<HTMLImageElement>(null);
  let delayTime = `${index * 200}ms`;
  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.classList.remove("floatUp");
    }
  }, [imgRef.current]);
  return (
    <img
      id={`squared-gallery-image-item-${index}`}
      // onClick={() => {
      //   if (index === currentIndex) {
      //     OpenLightBox();
      //   } else setIndex(index);
      // }}
      onClick={() => {
        location.href = `/projects/${image.url}`;
      }}
      className={`${customStyle ? customStyle : "w-full size-40 object-cover"} cursor-pointer imageItem transition-all duration-500 floatUp`}
      src={
        image.thumbnail
          ? typeof image.thumbnail === "string"
            ? image.thumbnail
            : (image.thumbnail.src as any)
          : typeof image.main === "string"
            ? image.main
            : image.main.src
      }
      alt={`${altText}-${index}`}
      role="img"
      ref={imgRef}
      style={{ transitionDelay: delayTime }}
    />
  );
};

export default ImageItem;
