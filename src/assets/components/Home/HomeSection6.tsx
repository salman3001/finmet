import { BsCalculator } from "react-icons/bs";
import { IModalContent } from "../Types";

const HomeSection6 = (prop: { togelModal: (content: IModalContent) => void }) => {
  return (
    <div className="px-5 md:px-16 lg:px-20 xl:24 py-8 md:py-10 lg:py-16  bg-gray-100 flex flex-col sm:flex-row justify-evenly gap-8">
      <a href="/Calculators" className="flex flex-col items-center gap-3 hover:scale-110 cursor-pointer transition-transform duration-200" onClick={(e) => {
        e.preventDefault()
        prop.togelModal("ITCalculator")
      }}>
        <Icon color="bg-[#ffb383]" />
        <p className="text-xl font-semibold text-center max-w-[15rem]" >
          Income Tax (Old Regime) Calculator
        </p>
      </a>
      <a href="/Calculators" className="flex flex-col items-center gap-3 hover:scale-110 cursor-pointer transition-transform duration-200" onClick={(e) => {
        e.preventDefault()
        prop.togelModal("ITCalculatorNew")
      }}>
        <Icon color="bg-[#ffd4cc]" />
        <p className="text-xl font-semibold text-center max-w-[15rem]">
          Income Tax (New Regime) Calculator
        </p>
      </a>
      <a href="/Calculators" className="flex flex-col items-center gap-3 hover:scale-110 cursor-pointer transition-transform duration-200">
        <Icon color="bg-[#c9d293]" />
        <p className="text-xl font-semibold text-center max-w-[15rem]">
          MF Calulator
        </p>
      </a>
    </div>
  );
};

export default HomeSection6;

const Icon = (prop: { color: string }) => (
  <div
    className={`p-6 rounded-full  w-28 h-28  flex justify-center shadow-lg shadow-gray-400 items-center ${prop.color}`}
  >
    <BsCalculator size={40} />
  </div>
);
