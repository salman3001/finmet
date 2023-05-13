import logo from "../../images/logo.png";
import { ReactNode } from "react";
import { AiOutlineForm } from "react-icons/ai";
import { RiCustomerService2Line } from "react-icons/ri";
import { GoCommentDiscussion } from "react-icons/go";
import { GrMoney } from "react-icons/gr";
import { GoTriangleRight } from "react-icons/go";

const HomeSeciton3 = () => {
  return (
    <div className="px-5 md:px-16 lg:px-20 xl:24 py-8 md:py-10 lg:py-16 space-y-16 font-bold">
      <h1 className="text-5xl text-center">ITR - Easy Process</h1>
      <div className="grid lg:grid-cols-2 gap-12">
        {/* <div className="overflow-hidden rounded-xl">
          <img src={steps} alt="" />
        </div> */}
        <div className="grid grid-cols-2  gap-4 place-content-center">
          <div className="flex flex-col  items-center gap-2">
            <Icon icon={<AiOutlineForm size={35} />} bg="bg-[#ffb383]" />
            <p className="text-center  font-semibold italic text-lg max-w-[11.75rem]">
              1. Fill The basic required detail
            </p>
          </div>
          <div className="flex flex-col  items-center gap-2">
            <Icon
              icon={<RiCustomerService2Line size={35} />}
              bg="bg-[#ffd4cc]"
            />
            <p className="text-center font-semibold italic text-lg max-w-[11.75rem]">
              2. Connect with FinMet ITR expert
            </p>
          </div>
          <div className=" col-span-2 flex justify-center">
            <img src={logo} alt="" className="h-12" />
          </div>
          <div className="flex flex-col  items-center gap-2">
            <Icon icon={<GoCommentDiscussion size={35} />} bg="bg-[#ffdf8b]" />
            <p className="text-center  font-semibold italic text-lg max-w-[11.75rem]">
              3. Disucuss and share the tax saving instruments
            </p>
          </div>
          <div className="flex flex-col  items-center gap-2">
            <Icon icon={<GrMoney size={35} />} bg="bg-[#c9d293]" />
            <p className="text-center  font-semibold italic text-lg max-w-[11.75rem]">
              4. File ITR with max refund
            </p>
          </div>
        </div>
        <div className="overflow-hidden flex font-normal md:first-letter:p-5">
          <div className="space-y-3 sm:border-l sm:pl-4 md:pl-8">
            <div className="flex gap-2">
              <div className="pt-1">
                <GoTriangleRight color="#e11d48" />
              </div>
              <p className="pl-2">
                For ITR filing online, first and foremost keep all the soft
                copies, scanned copies of all the required documents like your
                bank statement and last year's return. You should also fill out
                income tax Form 16.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="pt-1">
                <GoTriangleRight color="#e11d48" />
              </div>

              <p className="pl-2">
                {" "}
                Submit all the required documents to our experts
              </p>
            </div>
            <div className="flex gap-2">
              <div className="pt-1">
                <GoTriangleRight color="#e11d48" />
              </div>
              <p className="pl-2">
                Through the registered portal our experts will file your income
                tax return online
              </p>
            </div>
            <div className="flex gap-2">
              <div className="pt-1">
                <GoTriangleRight color="#e11d48" />
              </div>
              <p className="pl-2">
                ITR Filing Form will be selected based on your category, and
                experts will fill in all required information and claim any
                applicable exemptions
              </p>
            </div>
            <div className="flex gap-2">
              <div className="pt-1">
                <GoTriangleRight color="#e11d48" />
              </div>
              <p className="pl-2">
                Our experts will inform you regarding the tax payable amount if
                any after all exemptions
              </p>
            </div>
            <div className="flex gap-2">
              <div className="pt-1">
                <GoTriangleRight color="#e11d48" />
              </div>
              <p className="pl-2">
                Subsequently your income tax return will be filed without any
                hassle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSeciton3;

const Icon = (prop: { icon: ReactNode; bg: string }) => {
  return (
    <div className=" border-b-2 p-3 flex justify-center items-center w-[9rem] sm:w-[10rem]">
      <div
        className={`rounded-full h-20 w-20 ${prop.bg} flex justify-center items-center  italic text-2xl  text-gray-800 ring-2 ring-gray-400 shadow-lg shadow-gray-500 hover:scale-110 transition-transform duration-300`}
      >
        {prop.icon}
      </div>
    </div>
  );
};
