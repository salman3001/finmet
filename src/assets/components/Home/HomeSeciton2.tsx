import { AiFillCheckCircle } from "react-icons/ai";

const HomeSeciton2 = () => {
  return (
    <div className="px-5 md:px-16 lg:px-20 xl:24 py-8 md:py-10 lg:py-16 bg-gray-100 flex flex-col sm:flex-row  justify-center sm:items-center gap-4 md:gap-14 ">
      <p className="flex  items-center gap-3 text-lg">
        <AiFillCheckCircle size={25} />
        Simple 4 Step Process
      </p>
      <p className="flex  items-center gap-3 text-lg">
        <AiFillCheckCircle size={25} />
        Completely Online
      </p>
      <p className="flex items-center gap-3 text-lg">
        <AiFillCheckCircle size={25} />
        Assisted by Income Tax Experts
      </p>
    </div>
  );
};

export default HomeSeciton2;
