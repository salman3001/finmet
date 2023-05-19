import poster from "../../images/finmetindia.png";
const HomeSection7 = () => {
  return (
    <div className="grid lg:grid-cols-2 px-5 md:px-16 lg:px-20 xl:24 py-8 md:py-10 lg:py-16 gap-12">
      <div className="flex">
        <img
          src={poster}
          alt=""
          className="rounded-xl shadow-xl shadow-gray-400 w-full  lg:max-w-[600px]"
        />
      </div>
      <div className="space-y-6">
        <h1 className="text-5xl font-bold"> Why Choose us</h1>
        <p className=" text-xl">
          Finmet has a team of registration experts who can provide complete
          guidance to register your taxes!
        </p>
        <div className="flex gap-4">

          <div>
            <p className="font-bold text-xl">1. GST Registration :</p>
            <p className="text-lg">
              Hassle Free Process with Finmet. GST Registration helps the small businesses in avoiding the lengthy taxation services.
            </p>
          </div>
        </div>
        <div className="flex gap-4">

          <div>
            <p className="font-bold text-xl">
              2. GST Returns Filings </p>
            <p className="text-lg">
              The importance of GST returns for businesses lies in their compliance with the legal requirement and their ability to claim input tax credit.
            </p>
          </div>
        </div>
        <div className="flex gap-4">

          <div>
            <p className="font-bold text-xl">3. Licenses Registrationst</p>
            <p className="text-lg">
              Simpest way to get Various Licences Registration Like UDYAM,FSSAI,Import-Export Etc.
            </p>
          </div>
        </div>
        <div className="flex gap-4">

          <div>
            <p className="font-bold text-xl">4. Company Formation :</p>
            <p className="text-lg">
              Sole Proprietorship, LLP, Pvt Ltd. etc Company Foramtion in Easiest Possible Steps.
            </p>
          </div>
        </div>
        <div className="flex gap-4">

          <div>
            <p className="font-bold text-xl">5. Individuals  :</p>
            <p className="text-lg">
              Income tax Planning & Execution To Minimize their tax liablility & also For Financial Planning in Easy & Practical way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection7;
