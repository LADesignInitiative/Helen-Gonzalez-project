import type { ImageItemType, ContextType } from "./interface.tsx";
import { useContext } from "react";
import { GalleryContext } from "./contextItem.tsx";

const ImageItem = (props: ImageItemType) => {
  const { image, altText, customStyle, index } = props;
  const { OpenLightBox, setIndex } = useContext<ContextType>(
    GalleryContext as any,
  );
  return (
    <img
      id={`squared-gallery-image-item-${index}`}
      onClick={() => {
        OpenLightBox(image);
        setIndex(index);
      }}
      className={`${customStyle ? customStyle : "w-full size-40 object-cover"} cursor-pointer imageItem`}
      src={typeof image === "string" ? image : (image.src as any)}
      alt={`${altText}-${index}`}
      role="img"
    />
  );
};

export default ImageItem;
