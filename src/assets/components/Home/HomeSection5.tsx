import { BsFillCheckCircleFill } from "react-icons/bs";

const HomeSection5 = () => {
  return (
    <div className="px-5 md:px-16 lg:px-20 xl:24 py-8 md:py-10 lg:py-16 space-y-10 md:space-y-16">
      <h1 className="text-5xl font-bold text-center">
        Our Accounting Services
      </h1>
      <div className="grid sm:grid-cols-2 gap-2 sm:place-items-center">
        <div className="space-y-3 sm:border-l-2 sm:pl-6">
          <ListItem link="/Services-Requset" line="Income Tax Services" />
          <ListItem link="/Services-Requset" line="Company Registration" />
          <ListItem link="/Services-Requset" line="MSME Registration" />
          <ListItem link="/Services-Requset" line="ROC Filing" />
        </div>
        <div className="space-y-3 sm:border-l-2 sm:pl-6">
          <ListItem
            link="/Services-Requset"
            line="GST Registration & Filing Services"
          />
          <ListItem link="/Services-Requset" line="Trademark Registration" />
          <ListItem link="/Services-Requset" line="ISO Certification" />
          <ListItem
            link="/Services-Requset"
            line="Startup India Registration"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection5;

const ListItem = (prop: { line: string; link: string }) => {
  return (
    <div className="flex items-center gap-3 ">
      <div>
        <BsFillCheckCircleFill size={20} color="#e11d48" />
      </div>
      <a
        href={prop.link}
        className="text-rose-600 hover:text-black transition-colors duration-150 text-xl cursor-pointer"
      >
        {prop.line}
      </a>
    </div>
  );
};
