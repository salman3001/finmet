import { AiOutlineWhatsApp } from "react-icons/ai";
import { ImArrowUp } from "react-icons/im";
import { useScrollYPosition } from "react-use-scroll-position";

const Whatsapp = () => {
  const scrollY = useScrollYPosition();
  console.log(scrollY);

  const scrolltop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="fixed bottom-10 right-0 z-[120] text-black  flex justify-end">
      <div className="flex items-center gap-2">
        <a
          href="https://api.whatsapp.com/send?phone=+917893918311&text=Helo%21%20Finmet%20"
          className="bg-green-500 rounded-full flex items-center gap-2 text-white text-xl hover:text-rose-700 p-2  cursor-pointer "
          target="_blank"
        >
          <AiOutlineWhatsApp size={35} />
          <p className="hidden md:inline">Chat on WhatsApp</p>
        </a>
        <div
          id="scroll-btn"
          className={`relative w-10 h-12 bg-black text-rose-700  justify-center items-center cursor-pointer flex transition-transform duration-300 ${
            scrollY > 1000 ? "translate-x-0" : "translate-x-16"
          } `}
        >
          <ImArrowUp size={30} onClick={scrolltop} />
        </div>
      </div>
    </div>
  );
};

export default Whatsapp;
