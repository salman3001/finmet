import logo from "../images/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <div className="fixed w-full z-30">
      <nav className=" w-full flex justify-between items-center h-[10vh] [&_a]:font-semibold px-3 md:px-6 lg:px-10 shadow-md z-10 bg-white">
        <div className="flex">
          <a className="hover:text-rose-600" href="/Home">
            <img src={logo} alt="" className="w-36" />
          </a>
        </div>
        <div className="space-x-8 hidden sm:block">
          <a className="hover:text-rose-600" href="/Calculators">
            Calculators
          </a>
          <a className="hover:text-rose-600" href="/Services">
            Services
          </a>
          <a className="hover:text-rose-600" href="/Sign-Up">
            Sign up
          </a>
          <a className="hover:text-rose-600" href="/Sign-In">
            Sign in
          </a>
        </div>
        <div
          className="sm:hidden"
          onClick={() => {
            setMenuState((state) => !state);
          }}
        >
          {menuState ? (
            <AiOutlineClose className="rotateIn" size={30} color="#e11d48" />
          ) : (
            <HiMenuAlt3 size={30} className="rotateIn" color="#e11d48" />
          )}
        </div>
      </nav>
      <nav
        className={`sticky overflow-hidden sm:hidden transition-all duration-500 [&_a]:font-semibold shadow-md bg-white z-20 ${menuState ? "h-40 p-6" : "h-0 p-0"
          }`}
      >
        <div className="flex flex-col gap-2 ">
          <a className="hover:text-rose-600" href="/Calculators">
            Calculators
          </a>
          <a className="hover:text-rose-600" href="/Services">
            Services
          </a>
          <a className="hover:text-rose-600" href="/Sign-Up">
            Sign up
          </a>
          <a className="hover:text-rose-600" href="/Sign-In">
            Sign in
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
