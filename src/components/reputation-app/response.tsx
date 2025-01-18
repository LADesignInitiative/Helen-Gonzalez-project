import { useContext, useRef } from "react";
import { FeedbackContext } from "./context.tsx";
import { StarComponent } from "./rating-component.tsx";
import CopyButton from "./copy-button.tsx";
import GoogleIcon from "./assets/Google-icon.webp";
import MessageComponent from "../MessageComponent/index.tsx";
import uuid from "react-uuid";
import { BusinessInfo } from "@/data/business-info.js";
import "./style.css";

const ResponseElement = () => {
  const { rating, responseRef } = useContext(FeedbackContext);
  return (
    <div id="Response" ref={responseRef} className="hidden">
      {rating > 3 && BusinessInfo.Google_review_url ? (
        <GoogleReviewRequest />
      ) : (
        <BadRatingResponse />
      )}
    </div>
  );
};

const GoogleReviewRequest = () => {
  const CopiedMessageRef = useRef(null);
  const { message, rating, values, GoodRatingRef } =
    useContext(FeedbackContext);

  return (
    <div
      className="my-10 [&>p]:leading-[25px] [&>p]:text-center [&>p]:my-5"
      ref={GoodRatingRef}
    >
      <MessageComponent
        message="Your feedback has been copied onto your clipboard."
        messageRef={CopiedMessageRef}
      />
      <h2 className="text-3xl font-primaryF text-center my-10">
        Awesome! Thank you for the {rating}-star rating!
      </h2>
      <div className="flex flex-row mx-auto justify-center">
        {values.map((value: number, index: number) => (
          <StarComponent rating={rating} value={value} key={uuid()} />
        ))}
      </div>
      <div className="my-10 bg-slate-300 text-black rounded-lg p-5 text-center">
        {message}
      </div>
      <p>
        <span className="text-primaryC font-bold text-lg">
          We need your help.{" "}
        </span>
        Can you also share your positive review on our Google Reviews Page? That
        would mean a lot to us.
      </p>
      <CopyButton CopiedMessageRef={CopiedMessageRef} />

      <a href={BusinessInfo.Google_review_url} target="_blank">
        <button
          type="button"
          className="mx-auto flex gap-x-5 text-center mt-[60px] duration-500 py-[20px] px-[10px] text-[18px] min-[480px]:text-[20px] md:py-[24px]  md:text-[22px] cursor-pointer rounded-[0px] no-underline inline-block border-[1px] border-solid border-primaryC bg-white text-secondaryC text-center my-[10px] font-secondaryF font-[500] transition-all active:translate-x-[1px] active:translate-y-[1px] hover:bg-slate-200 floatAnim"
        >
          <div>Post your feedback on Google</div>
          <img
            src={GoogleIcon.src}
            alt="Google Icon"
            className="w-[32px] aspect-square m-auto"
          />
        </button>
      </a>
    </div>
  );
};

const BadRatingResponse = () => {
  return (
    <div className="!text-black text-center my-10">
      <p>Thank you for your feedback.</p>
      <a href="/" className="mx-auto text-center mt-[60px]">
        <input
          type="button"
          data-wait="Please wait..."
          className="duration-500 py-[20px] px-[30px] text-[18px] min-[480px]:px-[50px] min-[480px]:text-[20px] md:py-[24px] md:px-[110px] md:text-[22px] cursor-pointer rounded-[0px] no-underline inline-block border-[1px] border-solid border-primaryC bg-primaryC text-secondaryC text-center my-[10px] mr-[10px] font-secondaryF font-[500] transition-all hover:bg-slate-300"
          value="Go Home"
        />
      </a>
    </div>
  );
};

export default ResponseElement;
