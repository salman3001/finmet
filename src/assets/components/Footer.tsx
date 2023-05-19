import logo from "../images/logo-2.png";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="px-5 md:px-16 lg:px-20 xl:24 py-8 md:py-10 lg:py-16 bg-[#222] text-white grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
      <div className="space-y-4 lg:col-span-2">
        <div className="flex w-40">
          <img src={logo} alt="" className="w-full" />
        </div>
        <div className="space-y-4">
          <p>Over 10 years of experience</p>
          <p className="text-[#888] text-justify leading-5 max-w-xs">
            Finmet [Financial Meter] is a website where you can get all types of
            calculators which are gonna help you to take steps towards creating
            wealth, and through Our Blog You can Also take these steps
            practically.
          </p>
          <a
            href="mailto:support@finmet.in"
            className="text-blue-700 flex gap-2 items-center"
          >
            <AiOutlineMail />
            <span>Email: support@finmet.in</span>
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1>Main Menu</h1>

        <a className="text-[#888]" href="/Home">
          &#8250; Home
        </a>
        <a className="text-[#888]" href="/About-us">
          &#8250; About
        </a>
        <a className="text-[#888]" href="/Calculators">
          &#8250; Calculators
        </a>
        <a className="text-[#888]" href="/Services">
          &#8250; Services
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <h1>Follow us</h1>

        <a
          className="text-[#888] flex gap-2 items-center"
          href="https://www.facebook.com/finmetindia"
          target="_blank"
        >
          <FaFacebookF /> Facebook
        </a>
        <a
          className="text-[#888] flex gap-2 items-center"
          href="https://twitter.com/FinmetI"
          target="_blank"
        >
          <AiOutlineTwitter /> Twitter
        </a>
        <a
          className="text-[#888] flex gap-2 items-center"
          href="https://www.instagram.com/finmetindia/"
          target="_blank"
        >
          <AiOutlineInstagram /> Instagram
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <h1>Follow us</h1>
        <p>Sign Up for our mailing list to get latest updates and news.</p>
        <div className="flex h-10">
          <input
            type="email"
            className="h-full bg-gray-700 pl-2 w-[80%]"
            placeholder="Enter your email "
          />
          <button className="p-2 bg-rose-600 h-full w-[20%] flex justify-center items-center">
            <AiOutlineMail />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
