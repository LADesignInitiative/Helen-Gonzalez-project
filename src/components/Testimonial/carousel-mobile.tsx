import { useEffect, useRef } from "react";
import type { CarouselItemType } from "@/util/interface";
import CarouselItem from "./carousel-item.tsx";
import { useStore } from "@nanostores/react";
import {
  CarouselPosition,
  TestimonialSideDirection,
} from "@/util/atomItems.js";

type PropsType = {
  testimonials: Array<CarouselItemType>;
};
const Carousel = (props: PropsType) => {
  const { testimonials } = props;
  const $CarouselPosition = useStore(CarouselPosition);
  const $TestimonialSideDirection = useStore(TestimonialSideDirection);
  var displaySize = 1;

  const slideRef = useRef<HTMLDivElement>(null);

  const animateSlide = () => {
    if (slideRef.current) {
      slideRef.current.style.animationPlayState = "paused";
      if ($TestimonialSideDirection === "right") {
        slideRef.current.classList.add("slideFromRight");
      } else if ($TestimonialSideDirection === "left") {
        slideRef.current.classList.add("slideFromLeft");
      }
      slideRef.current.style.animationPlayState = "running";
    }
  };

  const unbindListener = TestimonialSideDirection.subscribe(animateSlide);

  const resetAnimation = () => {
    slideRef?.current?.classList.remove("slideFromLeft");
    slideRef?.current?.classList.remove("slideFromRight");
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.addEventListener("animationend", resetAnimation);
    }
  }, [slideRef.current]);

  useEffect(() => {
    return () => {
      unbindListener();
    };
  }, []);

  return (
    <div ref={slideRef} className="carousel-grid mx-auto grid gap-y-5">
      <CarouselItem {...testimonials[$CarouselPosition]} />
    </div>
  );
};
export default Carousel;
