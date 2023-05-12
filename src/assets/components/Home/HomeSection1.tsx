import { AiOutlineCheckCircle } from "react-icons/ai";
import leftart from "../../images/blue-design-left.svg";
import Rightart from "../../images/yellow-design-right.svg";
import play from "../../images/play+button.svg";
import google from "../../images/google-banner-review-new.png";

const HomeSection1 = () => {
  return (
    <div className="relative px-5 md:px-16 lg:px-20 xl:24 py-8 md:py-10 lg:py-16 grid md:grid-cols-2 gap-8 place-items-center overflow-hidden min-h-[90vh]">
      <img
        src={leftart}
        alt=""
        className="absolute -left-10 -z-10 opacity-20 scale-125 Art-Anim-left"
      />
      <img
        src={Rightart}
        alt=""
        className="absolute -right-10 -z-10 -bottom-32 opacity-10  scale-125 rotate-90 Art-Anim-right"
      />
      <div className="flex flex-col justify-start h-full gap-10">
        <h1 className="text-5xl max-w-lg font-bold text-[#22262a]">
          E-Filing of Income Tax Return Online 2023-24
        </h1>
        <div className="text-xl">
          <p className="font-bold">
            Worried about the complexities of tax filing?
          </p>
          <p>
            Just share your details and{" "}
            <span className="border-b-2 border-rose-600">
              our tax experts will do it for you!
            </span>
          </p>
        </div>
        <a href="" className="flex items-center text-xl gap-4">
          <img src={play} alt="" className="h-[4.25rem]" />
          <p>ITR explained in 60 seconds</p>
        </a>

        <div className="flex items-center text-xl gap-4">
          <img src={google} alt="" />
          <p>4.3/5 Happy Reviews</p>
        </div>
      </div>
      <div className="w-full flex justify-center h-full items-start">
        <form
          action=""
          className="bg-white space-y-4 text-black p-5 lg:p-10 rounded-lg shadow-2xl  max-w-lg w-full "
        >
          <h1 className="text-xl font-bold text-center">Get Started! </h1>
          <input
            type="text"
            placeholder="Name*"
            className="border-b border-gray-300 p-2 w-full"
          />
          <input
            type="number"
            placeholder="mobile*"
            className="border-b border-gray-300 p-2 w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-b border-gray-300 p-2 w-full"
          />
          <input
            type="text"
            placeholder="City*"
            className="border-b border-gray-300 p-2 w-full"
          />
          <input
            type="text"
            placeholder="Service type*"
            className="border-b border-gray-300 p-2 w-full"
          />
          <div className="pt-4">
            <button className="p-2 px-8 rounded-sm bg-rose-600 text-white w-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default HomeSection1;
