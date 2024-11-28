import "./style.css";
import Rating from "./rating-component.tsx";
import type {
  CarouselItemType,
  TestimonialObjType,
} from "@/util/interface.tsx";
import ShapeEight from "@/assets/images/shape/shape-8.png";
import BookIcon from "@/assets/icons/open-book.webp";
import {
  TestimonialLightBoxContent,
  TestimonialLightBoxDisplay,
} from "@/util/atomItems.js";
import { useStore } from "@nanostores/react";

const Item = (props: CarouselItemType) => {
  const {
    testimonial,
    name,
    designation,
    rating,
    profile_image,
    date = null,
    location = null,
    platform = null,
  } = props;
  const $LightBoxText: any = useStore(TestimonialLightBoxContent);
  const $DisplayLightBox: any = useStore(TestimonialLightBoxDisplay);
  const OpenLightBox = () => {
    const testimonialObj: TestimonialObjType = {
      testimonial,
      name,
      designation,
      rating,
      profile_image,
      date,
      location,
      platform,
    };
    TestimonialLightBoxContent.set(testimonialObj);
    TestimonialLightBoxDisplay.set(true);
  };
  const characters = testimonial.split("");
  return (
    <div className="testimonial-block-one carousel-item-shadow relative mx-auto h-full overflow-hidden">
      <div className="inner-box relative grid h-full rounded-lg bg-white pb-[50px] pl-[50px] pr-[30px] pt-[45px]">
        <div
          className="shape absolute"
          style={{ backgroundImage: `url(${ShapeEight.src})` }}
        ></div>
        <div className="text relative mb-[10px] block">
          <p>
            {testimonial.substr(0, 326)}
            {characters.length > 326 && <span>...</span>}
          </p>
          {characters.length > 326 && (
            <button
              type="button"
              onClick={OpenLightBox}
              className="text-primaryC font-bold px-5 py-1 mt-5 cursor-pointer flex gap-x-[10px] shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] rounded-lg active:translate-x-[1px] active:translate-y-[1px] hover:bg-slate-200"
            >
              <span className="inline-block my-auto">Read More</span>
              <img
                src={BookIcon.src as any}
                alt="Book Icon"
                decoding="async"
                loading="lazy"
                className="w-[24px] aspect-square my-auto opacity-40"
              />
            </button>
          )}
        </div>
        <Rating rating={rating} />
        {date && (
          <span className="designation relative mb-[2px] block text-base sm:text-xl text-slate-400">
            {date}
          </span>
        )}
        <div className="author-box relative flex pl-[65px]">
          {profile_image && (
            <figure className="author-thumb absolute">
              <img
                loading="lazy"
                decoding="async"
                src={profile_image as string}
                alt={name}
              />
            </figure>
          )}
          <div>
            <h5 className="relative mb-[2px] block text-lg font-medium sm:text-4xl">
              {name}
            </h5>
            {designation && (
              <span className="designation relative mb-[2px] block text-base sm:text-xl">
                {designation}
              </span>
            )}
            {location && (
              <span className="designation relative mb-[2px] block text-base sm:text-xl italic text-slate-500">
                {location}
              </span>
            )}
            {platform && (
              <span className="designation relative mb-[2px] block text-base sm:text-xl">
                {platform}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;
