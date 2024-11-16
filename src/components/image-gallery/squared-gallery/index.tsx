import {
  useState,
  useRef,
  useEffect,
  useCallback,
  Suspense,
  lazy,
} from "react";
import uuid from "react-uuid";
import { GalleryContext } from "./contextItem.tsx";
import type { GalleryPropType, ImageItemType } from "./interface.tsx";
import LightBox from "./light-box.tsx";
//import ImageItem from "./image-item.tsx";
const ImageItem = lazy(() => import("./image-item.tsx"));
import LoadingComponent from "@/components/loading-component/simple.tsx";

const Gallery = (props: GalleryPropType) => {
  const { images, altText = "gallery image" } = props;

  //stores the current image for the lightbox
  const [currentImg, setCurrent] = useState<ImageItemType | null>(null);

  //index of lightbox image
  const [currentIndex, setIndex] = useState<number | null>(null);

  //responsible for the fade in and fade out effects when switch images
  const [fadeIn, setFadeIn] = useState(false);
  const lightboxRef = useRef<any>(null);
  const backdropRef = useRef<any>(null);

  //closes the lightbox
  const CloseLightBox = () => {
    if (!lightboxRef?.current.classList.contains("invisible", "opacity-0")) {
      lightboxRef?.current.classList.add("invisible", "opacity-0");
    }
    if (!backdropRef.current.classList.contains("invisible", "opacity-0")) {
      backdropRef.current.classList.add("invisible", "opacity-0");
    }
  };
  const OpenLightBox = useCallback(
    (nextImg: ImageItemType) => {
      setFadeIn(true);
      setTimeout(() => {
        setCurrent(nextImg);
        if (lightboxRef?.current) {
          lightboxRef?.current.classList.remove("invisible", "opacity-0");
        }
        if (backdropRef?.current) {
          backdropRef.current.classList.remove("invisible", "opacity-0");
        }
        setFadeIn(false);
      }, 300);
    },
    [currentImg],
  );

  //responsible for changing the image in the light box
  //useEffect listins for changes to currentIndex variable
  const NextImage = () => {
    let next =
      typeof currentIndex === "number"
        ? currentIndex + 1 < images.length
          ? currentIndex + 1
          : 0
        : 0;
    setIndex(next);
  };

  const PreviousImage = () => {
    let next =
      typeof currentIndex === "number"
        ? currentIndex - 1 >= 0
          ? currentIndex - 1
          : images.length - 1
        : images.length - 1;
    setIndex(next);
  };
  const checkIfClickedOutside = (evt: any) => {
    if (
      lightboxRef.current &&
      !evt.target.classList.contains("imageItem") &&
      !lightboxRef.current.classList.contains("invisible") &&
      !lightboxRef.current.contains(evt.target)
    ) {
      CloseLightBox();
    }
  };

  const context = {
    images,
    currentImg,
    setCurrent,
    lightboxRef,
    CloseLightBox,
    OpenLightBox,
    fadeIn,
    setFadeIn,
    currentIndex,
    setIndex,
    NextImage,
    PreviousImage,
  };

  useEffect(() => {
    document.addEventListener("mousedown", checkIfClickedOutside);
  }, []);

  useEffect(() => {
    if (currentIndex != null) OpenLightBox(images[currentIndex]);
  }, [currentIndex]);

  return (
    <GalleryContext.Provider value={context as any}>
      <div className="relative">
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-2"
          role="list"
          aria-label="Gallery of images"
        >
          {images &&
            images.length > 0 &&
            images.map((item: any, index: number) => (
              <Suspense key={uuid()} fallback={<LoadingComponent />}>
                <ImageItem
                  image={item}
                  altText={altText}
                  index={index}
                  aria-label={`Image ${index + 1} of ${images.length}`}
                />
              </Suspense>
            ))}
        </div>
        <LightBox currentImg={null} altText={altText} />
      </div>
      <div
        ref={backdropRef}
        id="gallery-backdrop"
        className="invisible opacity-0 z-5 absolute w-full h-full bg-secondaryC/75 top-0 bottom-0 left-0 right-0 transition-all duration-500"
        aria-hidden="true"
      ></div>
    </GalleryContext.Provider>
  );
};

export default Gallery;
