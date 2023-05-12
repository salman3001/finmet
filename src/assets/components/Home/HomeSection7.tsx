import poster from "../../images/finmetindia.png";
import { AiOutlineMail } from "react-icons/ai";
const HomeSection7 = () => {
  return (
    <div className="grid lg:grid-cols-2 px-5 md:px-16 lg:px-20 xl:24 py-8 md:py-10 lg:py-16 gap-12">
      <div className="flex">
        <img
          src={poster}
          alt=""
          className="rounded-xl shadow-xl shadow-gray-400 w-full md:max-w-[600px]"
        />
      </div>
      <div className="space-y-6">
        <h1 className="text-5xl font-bold"> Why Choose us</h1>
        <p className="max-w-lg text-xl">
          Finmet has a team of registration experts who can provide complete
          guidance to register your taxes!
        </p>
        <div className="flex gap-4">
          <div className="p-3 rounded-full border h-12 w-12 flex justify-center items-center">
            <AiOutlineMail size={20} />
          </div>
          <div>
            <p className="font-bold text-xl">Fix an appointment</p>
            <p className="max-w-sm text-lg">
              Just reach out to our experts at vakilsearch on our website.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="p-3 rounded-full border h-12 w-12 flex justify-center items-center">
            <AiOutlineMail size={20} />
          </div>
          <div>
            <p className="font-bold text-xl">Fix an appointment</p>
            <p className="max-w-sm text-lg">
              Just reach out to our experts at vakilsearch on our website.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="p-3 rounded-full border h-12 w-12 flex justify-center items-center">
            <AiOutlineMail size={20} />
          </div>
          <div>
            <p className="font-bold text-xl">Fix an appointment</p>
            <p className="max-w-sm text-lg">
              Just reach out to our experts at vakilsearch on our website.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="p-3 rounded-full border h-12 w-12 flex justify-center items-center">
            <AiOutlineMail size={20} />
          </div>
          <div>
            <p className="font-bold text-xl">Fix an appointment</p>
            <p className="max-w-sm text-lg">
              Just reach out to our experts at vakilsearch on our website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection7;
