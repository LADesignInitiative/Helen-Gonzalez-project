import { useState, useEffect, useRef } from "react";
import "./before-after-style.css";
//bgImg is the background image
//fgImg is the foreground image that will change in width
//HEIGHT AND WIDTH are the dimensions of the image file in pixels. They have to be exact and accurate.
type SliderType = {
  bgImg: string;
  fgImg: string;
  HEIGHT: number;
  WIDTH: number;
};
const Slider = (props: SliderType) => {
  const { bgImg, fgImg, HEIGHT, WIDTH } = props;
  const wrapperStyle = `absolute inset-0 mx-auto overflow-x-hidden bg-no-repeat`;
  const [width, setWidth] = useState<number>(WIDTH / 2);
  const afterRef = useRef<any>(null);
  const handleChange = (e: any) => {
    setWidth(e?.target.value);
    if (afterRef.current) {
      afterRef.current.style.width = `${e.target.value}px`;
    }
  };

  // useEffect(()=>{
  //     if(afterRef.current){
  //         //setWidth(250)
  //     }
  // },[afterRef.current])

  return (
    <>
      <div
        className={`z-2 ${wrapperStyle} `}
        style={{
          height: `${HEIGHT}px`,
          width: `${WIDTH}px`,
          backgroundImage: `url(${bgImg})`,
        }}
      ></div>
      <div
        className={` z-1 ${wrapperStyle}`}
        style={{ height: `${HEIGHT}px`, width: `${WIDTH}px` }}
      >
        <div
          className={`relative h-full overflow-hidden`}
          style={{ width: width }}
          ref={afterRef}
        >
          <div
            className="absolute inset-0 bg-no-repeat"
            style={{ backgroundImage: `url(${fgImg})` }}
          ></div>
        </div>
      </div>
      <input
        type="range"
        min={1}
        max={WIDTH}
        value={width}
        onChange={handleChange as any}
        className="relative block top-[95%] translate-y-[-95%] sm:top-[75%] sm:translate-y-[-75%] mx-auto my-auto"
        style={{ width: `${WIDTH}px` }}
        name="slider"
        id="slider"
      />
      <div className="slider-button"></div>
    </>
  );
};

export default Slider;
