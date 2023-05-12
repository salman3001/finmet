import { BsCalculator } from "react-icons/bs";

const HomeSection6 = () => {
  return (
    <div className="px-5 md:px-16 lg:px-20 xl:24 py-8 md:py-10 lg:py-16  bg-gray-100 flex flex-col sm:flex-row justify-evenly gap-8">
      <div className="flex flex-col items-center gap-3 hover:scale-110 cursor-pointer transition-transform duration-200">
        <Icon color="bg-[#ffb383]" />
        <p className="text-xl font-semibold">SIP Calculator</p>
      </div>
      <div className="flex flex-col items-center gap-3 hover:scale-110 cursor-pointer transition-transform duration-200">
        <Icon color="bg-[#ffd4cc]" />
        <p className="text-xl font-semibold">LUMSUM Calculator</p>
      </div>
      <div className="flex flex-col items-center gap-3 hover:scale-110 cursor-pointer transition-transform duration-200">
        <Icon color="bg-[#c9d293]" />
        <p className="text-xl font-semibold">MF Calulator</p>
      </div>
    </div>
  );
};

export default HomeSection6;

const Icon = (prop: { color: string }) => (
  <div
    className={`p-6 rounded-full  w-28 h-28  flex justify-center items-center ${prop.color}`}
  >
    <BsCalculator size={40} />
  </div>
);
