import "./style.css";
import { CarouselPosition, TestimonialSideDirection } from "@/util/atomItems";
import { useStore } from "@nanostores/react";
import LeftArrow from "@/assets/icons/left.png";
import RightArrow from "@/assets/icons/right.png";

const CarouselNav = (props: { size: number; desktop?: boolean }) => {
  const { size, desktop = true } = props;

  const $CarouselPosition = useStore(CarouselPosition);

  const SlideLeft = () => {
    var nextPosition = desktop
      ? $CarouselPosition + 2 < size
        ? $CarouselPosition + 2
        : 0
      : $CarouselPosition + 1 < size
        ? $CarouselPosition + 1
        : 0;
    CarouselPosition.set(nextPosition);
    TestimonialSideDirection.set("left");
  };
  const SlideRight = () => {
    var nextPosition = desktop
      ? $CarouselPosition - 2 >= 0
        ? $CarouselPosition - 2
        : size - 1
      : $CarouselPosition - 1 >= 0
        ? $CarouselPosition - 1
        : size - 1;
    CarouselPosition.set(nextPosition);
    TestimonialSideDirection.set("right");
  };
  return (
    <div
      id="carousel-nav-buttons"
      className="bottom-[100px] block text-center md:text-left mt-10"
    >
      <button
        type="button"
        className="owl-prev nav_box_shadow relative mr-[10px] inline-block h-[60px] w-[60px] cursor-pointer rounded-md bg-[#fff] text-center text-[20px] leading-[60px] text-[#2f7955] transition-all active:translate-x-1 active:translate-y-1 bg-slate-300"
        onClick={SlideRight}
      >
        <img
          src={LeftArrow.src}
          alt="left nav arrow"
          loading="lazy"
          decoding="async"
          className="w-[70px] aspect-square"
        />
      </button>
      <button
        type="button"
        className="owl-next nav_box_shadow relative inline-block h-[60px] w-[60px] cursor-pointer rounded-md bg-[#fff] text-center text-[20px] leading-[60px] text-[#2f7955] transition-all active:translate-x-1 active:translate-y-1 bg-slate-300"
        onClick={SlideLeft}
      >
        <img
          src={RightArrow.src}
          alt="right nav arrow"
          loading="lazy"
          decoding="async"
          className="w-[70px] aspect-square"
        />
      </button>
    </div>
  );
};
export default CarouselNav;
