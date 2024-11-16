import { useState, useEffect, useRef } from "react";
import type { CarouselItemType } from "@/util/interface";
import CarouselItem from "./carousel-item.tsx";
import uuid from "react-uuid";
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
  var displaySize = 2;
  const [displayed, setDisplayed] = useState<Array<CarouselItemType>>(
    testimonials.slice(0, displaySize),
  );
  const slideRef = useRef<HTMLDivElement>(null);
  const setPosition = (position: number): Array<CarouselItemType> => {
    if (position === testimonials.length - 1) {
      var displayArray: Array<CarouselItemType> = [];
      displayArray.push(testimonials[testimonials.length - 1]);
      displayArray.push(testimonials[0]);
      return displayArray;
    }
    return testimonials.slice(position, position + displaySize);
  };
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
  useEffect(() => {
    if (typeof $CarouselPosition != "undefined" && $CarouselPosition != null) {
      const newArray = setPosition($CarouselPosition);
      setDisplayed([...newArray]);
    }
  }, [$CarouselPosition]);

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
    <div
      ref={slideRef}
      id="CarouselSlide"
      className="carousel-grid xm:grid-cols-[repeat(auto-fill,300px)] mx-auto grid grid-cols-[repeat(auto-fill,250px)] gap-10 sm:grid-cols-[repeat(auto-fill,350px)] justify-evenly"
    >
      {testimonials &&
        testimonials.length > 0 &&
        displayed.map((testimonial) => (
          <CarouselItem {...testimonial} key={uuid()} />
        ))}
    </div>
  );
};
export default Carousel;
