import { useContext } from "react";
import { GalleryContext } from "./contextItem.tsx";
import type { LightBoxProps, ContextType } from "./interface.tsx";
import RightArrow from "./assets/right-white.png";
import LeftArrow from "./assets/left-white.png";

const LightBox = (props: LightBoxProps) => {
  const { currentImg, lightboxRef, PreviousImage, NextImage } =
    useContext<ContextType>(GalleryContext as any);
  return (
    currentImg && (
      <div
        ref={lightboxRef}
        id="lightbox"
        aria-labelledby="lightbox-title"
        aria-describedby="lightbox-description"
        aria-modal="true"
        className={`w-fit sm:w-8/12 h-fit m-auto fixed inset-0 z-10 z-[101] flex flex-col justify-center transtion-all duration-500 `}
      >
        <div className="flex flex-row justify-between mx-auto">
          <img
            src={LeftArrow.src}
            alt="next image"
            role="button"
            aria-label="Previous image"
            className="hidden sm:block w-[40px] sm:mr-1 aspect-square ml-0 mr-auto my-auto bg-[rgba(0,0,0,0.75)] bg-[rgba(0,0,0,0.5)] rounded-full select-none"
            onClick={PreviousImage}
          />
          <img
            role="img"
            id="lightbox"
            src={
              typeof currentImg.main === "string"
                ? currentImg.main
                : (currentImg.main.src as any)
            }
            alt="lightbox image"
            className={`min-w-[320px] max-h-[80vh] min-[400px]:min-w-[400px] sm:w-auto object-contain m-auto flex justify-center transtion-all duration-500 `}
          />
          <img
            src={RightArrow.src}
            alt="next image"
            role="button"
            aria-label="Next image"
            className="hidden sm:block w-[40px] sm:ml-1 aspect-square ml-auto mr-0 my-auto bg-[rgba(0,0,0,0.75)] bg-[rgba(0,0,0,0.5)] rounded-full select-none"
            onClick={NextImage}
          />
        </div>
        <NavigationBar />
      </div>
    )
  );
};

export default LightBox;

const NavigationBar = () => {
  const { CloseLightBox, PreviousImage, NextImage } = useContext<ContextType>(
    GalleryContext as any,
  );
  return (
    <div className="flex flex-row w-full sm:w-fit mx-auto p-5 mt-1 justify-between sm:bg-[rgba(0,0,0,0.75)] [&>*]:cursor-pointer">
      <img
        src={LeftArrow.src}
        alt="next image"
        role="button"
        aria-label="Previous image"
        className="block sm:hidden w-[40px] sm:mr-1 aspect-square ml-0 mr-auto my-auto bg-[rgba(0,0,0,0.75)] bg-[rgba(0,0,0,0.5)] rounded-full select-none"
        onClick={PreviousImage}
      />
      <div
        onClick={CloseLightBox}
        role="button"
        aria-label="Close lightbox"
        className="text-2xl text-white font-secondaryF underline text-center hover:font-bold"
      >
        Close
      </div>
      <img
        src={RightArrow.src}
        alt="next image"
        role="button"
        aria-label="Next image"
        className="block sm:hidden w-[40px] sm:ml-1 aspect-square ml-auto mr-0 my-auto bg-[rgba(0,0,0,0.75)] bg-[rgba(0,0,0,0.5)] rounded-full select-none"
        onClick={NextImage}
      />
    </div>
  );
};
