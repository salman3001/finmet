import { BsFillCheckCircleFill } from "react-icons/bs";
const HomeSection4 = () => {
  return (
    <div className="px-5 md:px-16 lg:px-20 xl:24 py-8 md:py-10 lg:py-16 bg-gray-100 space-y-16">
      <h1 className="text-5xl font-bold text-center">Plans and Pricing</h1>
      <div className="grid lg:grid-cols-3 gap-12">
        <Card
          price="999"
          salary="upto &#8377;10"
          detail={[
            "For salaried individuals with salary less than ₹50 Lacs",
            "For salaried individuals with house property",
            "Tax due/refund status and filing confirmation",
          ]}
        />
        <Card
          price="1499"
          salary="upto &#8377;25"
          detail={[
            "For salaried individuals with salary less than ₹50 Lacs",
            "For salaried individuals with house property",
            "Tax due/refund status and filing confirmation",
          ]}
        />
        <Card
          price="1999"
          salary="above &#8377;25"
          detail={[
            "For salaried individuals with salary less than ₹50 Lacs",
            "For salaried individuals with house property",
            "Tax due/refund status and filing confirmation",
          ]}
        />
      </div>
    </div>
  );
};

export default HomeSection4;

const Card = (prop: { salary: string; price: string; detail: string[] }) => {
  return (
    <div className="h-full w-full rounded-xl overflow-hidden shadow-lg bg-whit hover:scale-110 transition-all divide-fuchsia-300 hover:shadow-xl">
      <div className="h-[30%] bg-rose-400 flex items-center justify-between gap-4 p-6">
        <div>
          <p className="text-xl ">Salaried Employee</p>
          <p>
            <span className="font-bold"> {prop.salary} Lakhs</span>
          </p>
        </div>
        <p className="text-2xl font-semibold">&#8377;{prop.price}/-</p>
      </div>
      <div className="h-full p-6 text-base space-y-2">
        {prop.detail.map((detail) => (
          <div className="flex gap-4 items-center">
            <div>
              <BsFillCheckCircleFill size={20} color="#fb7185" />
            </div>
            <p>{detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
