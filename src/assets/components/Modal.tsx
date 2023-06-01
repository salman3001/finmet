import { RiCloseCircleFill } from "react-icons/ri";
import YoutubeVideo from "./YoutubeVideo";
import { IModalContent } from "./Types";
import ITCalculator from "./ITCalculator";
import ITCalculatorNew from "./ITCalculatorNew";
import ThankYouMessage from "./ThankYouMessage";

const Modal = (prop: {
  content: IModalContent;
  state: boolean;
  close: (content: IModalContent) => void;
}) => {
  return (
    <>
      {prop.state && (
        <div
          className="fixed  top-0 left-0 w-screen h-screen z-[200] bg-black  bg-opacity-70 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-56 2xl:px-96 pt-10 sm:pt-20"
          onClick={() => {
            prop.close("youtube-Video");
          }}
        >
          <div
            className="relative bg-white px-5 md:px-16 lg:px-20 xl:24 py-8 md:py-10 lg:py-16 rounded-lg pt-10"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {prop.content === "youtube-Video" && <YoutubeVideo />}
            {prop.content === "ITCalculator" && <ITCalculator />}
            {prop.content === "ITCalculatorNew" && <ITCalculatorNew />}
            {prop.content === "Thankyou-Message" && <ThankYouMessage />}
            <div className="absolute top-2 right-2 cursor-pointer">
              <RiCloseCircleFill
                color="#e11d48"
                size={25}
                onClick={() => {
                  prop.close("youtube-Video");
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
