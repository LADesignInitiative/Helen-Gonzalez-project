import HardRockIcon from "@/assets/icons/hard-rock-icon.svg";

const LoadingIndicator = () => {
  return (
    <div className="font-bold text-2xl text-center absolute w-full h-full top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
      <div>Loading...</div>
      <div>
        <img
          src={HardRockIcon.src}
          className="w-[100px] aspect-square mx-auto"
          alt="Loading icon"
        />
      </div>
    </div>
  );
};

export default LoadingIndicator;
