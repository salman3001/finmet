import leftart from "../../images/blue-design-left.svg";
import Rightart from "../../images/yellow-design-right.svg";
import play from "../../images/play+button.svg";
import { IModalContent } from "../Types";
import GetStartedForm from "../GetStartedForm";
import { FaUserTie } from "react-icons/fa";

const HomeSection1 = (prop: {
  togelModal: (content: IModalContent) => void;
}) => {
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
      <div className="flex flex-col justify-center h-full gap-10">
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
        <a
          href=""
          className="flex items-center text-xl gap-5"
          onClick={(e) => {
            e.preventDefault();
            prop.togelModal("youtube-Video");
          }}
        >
          <img src={play} alt="" className="h-[4.0rem]" />
          <p>2 mins to Understand - Income tax</p>
        </a>

        <a href="#testimonial" className="flex items-center text-xl gap-6">
          <div className="border-2 border-rose-700 rounded-full p-2">
            <FaUserTie size={42} color="#e11d48" />
          </div>
          <p>Our Happy client reviews</p>
        </a>
      </div>
      <div className="w-full flex justify-center  h-full items-center">
        <GetStartedForm togelModal={prop.togelModal} />
      </div>
    </div>
  );
};
export default HomeSection1;
