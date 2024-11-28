import "./style.css";
import { useRef, useEffect } from "react";
import Rating from "./rating-component.tsx";
import ShapeEight from "@/assets/images/shape/shape-8.png";
import {
  TestimonialLightBoxContent,
  TestimonialLightBoxDisplay,
} from "@/util/atomItems.js";
import { useStore } from "@nanostores/react";

const TestimonialLightBox = () => {
  const $LightBoxContent: any = useStore(TestimonialLightBoxContent);
  const $DisplayLightBox: any = useStore(TestimonialLightBoxDisplay);
  const closeLightBox = () => {
    TestimonialLightBoxDisplay.set(false);
  };
  const lightboxRef = useRef<any>(null);
  const {
    testimonial,
    name,
    designation,
    rating,
    profile_image,
    date,
    location,
    platform,
  } = $LightBoxContent;

  const checkIfClickedOutside = (evt: MouseEvent) => {
    if (lightboxRef?.current && !lightboxRef?.current?.contains(evt.target)) {
      closeLightBox();
    }
  };

  useEffect(() => {
    window.document.addEventListener("mousedown", checkIfClickedOutside);
  }, [lightboxRef.current]);

  return (
    $DisplayLightBox && (
      <div
        ref={lightboxRef}
        id="testimonial-lightbox"
        className="mx-auto w-11/12 md:w-fit h-fit overflow-hidden bg-slate-100 fixed top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] p-10 rounded-lg border-b-[2px] border-b-solid border-b-primaryC z-[100] shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]"
      >
        <div className="relative grid h-full">
          <div
            className="absolute bottom-[10px] right-[5px]"
            style={{ backgroundImage: `url(${ShapeEight.src})` }}
          ></div>
          <div className="relative mb-[10px] block overflow-y-scroll max-h-[400px]">
            <p>{testimonial}</p>
          </div>
          <Rating rating={rating} />
          {date && <span className="mb-5">{date}</span>}
          <div className="relative flex gap-x-5">
            {profile_image && (
              <figure className="">
                <img
                  loading="lazy"
                  decoding="async"
                  src={profile_image as string}
                  alt="author"
                  className="rounded-full"
                />
              </figure>
            )}
            <div>
              <h5 className="relative mb-[2px] block text-lg font-medium sm:text-4xl">
                {name}
              </h5>
              <span className="relative mb-[2px] block text-base sm:text-xl">
                {designation}
              </span>
              {location && (
                <span className="relative mb-[2px] block text-base sm:text-xl text-slate-500 italic">
                  {location}
                </span>
              )}
              {platform && (
                <span className="relative mb-[2px] block text-base sm:text-xl font-bold">
                  {platform}
                </span>
              )}
            </div>
          </div>
          <button
            type="button"
            className="text-primaryC w-fit bg-white font-bold px-5 py-1 mt-5 cursor-pointer flex gap-x-[10px] shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] rounded-lg active:translate-x-[1px] active:translate-y-[1px] hover:bg-slate-300 text-center mx-auto"
            onClick={closeLightBox}
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default TestimonialLightBox;
