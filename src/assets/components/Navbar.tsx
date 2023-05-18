import logo from "../images/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className="fixed w-full z-30">
      <nav className=" relative w-full flex justify-between items-center h-[10vh] [&_a]:font-semibold px-3 md:px-6 lg:px-10 shadow-md z-10 bg-white">
        <input type="checkbox" name="menu" id="menu" className="peer hidden" />
        <div className="flex">
          <a className="hover:text-rose-600" href="/home">
            <img src={logo} alt="" className="w-28" />
          </a>
        </div>
        <div className="space-x-8 hidden sm:block">
          <a className="hover:text-rose-600" href="/Calculators">
            Calculators
          </a>
          <a className="hover:text-rose-600" href="/Services">
            Services
          </a>
          <a className="hover:text-rose-600" href="/Sign-up">
            Sign up
          </a>
          <a className="hover:text-rose-600" href="/Sign-in">
            Sign in
          </a>
        </div>
        <label htmlFor="menu" className="sm:hidden peer-checked:hidden">
          <HiMenuAlt3 className="rotateIn " />
        </label>
        <label htmlFor="menu" className="sm:hidden hidden peer-checked:block">
          <GrClose className="rotateIn " />
        </label>
        <label
          htmlFor="menu"
          className="absolute w-full -bottom-[24vh] left-0 overflow-hidden sm:hidden transition-all duration-500 [&_a]:font-semibold shadow-md bg-white z-20 h-40 p-6 peer-checked:block hidden"
        >
          <div className="flex flex-col gap-2 ">
            <a className="hover:text-rose-600" href="/Calculators">
              Calculators
            </a>
            <a className="hover:text-rose-600" href="/Services">
              Services
            </a>
            <a className="hover:text-rose-600" href="/Sign-up">
              Sign up
            </a>
            <a className="hover:text-rose-600" href="/Sign-in">
              Sign in
            </a>
          </div>
        </label>
      </nav>
    </div>
  );
};

export default Navbar;
