const LoadingComponent = () => {
  return (
    <div className="font-bold text-2xl text-center w-full h-full min-h-[300px] mx-auto flex flex-col my-5 ">
      <div
        className="text-black font-bold text-2xl text-center"
        role="alert"
        aria-busy="true"
      >
        Loading...
      </div>
    </div>
  );
};

export default LoadingComponent;
