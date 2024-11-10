import logo from "../assets/logo.png";
import { FaMicroscope } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";

export const Navbar = () => {
  return (
    <>
      <nav className="w-full p-4 bg-[#FCFBF3] flex justify-between">
        <div>
          <img width={170} src={logo} alt="logo" />
        </div>

        <div className="hidden md:flex items-center font-medium cursor-pointer text-[#322B2A]">
          <button className="hover:bg-[#F5F0D6] px-5 h-10 rounded-lg">
            Home
          </button>
          <button className="group hover:bg-[#F5F0D6] px-5 h-10 rounded-lg flex items-center gap-1">
            Products{" "}
            <IoChevronDown className="mt-1 transform transition-transform duration-200 group-hover:rotate-180" />
          </button>
          <button className="hover:bg-[#F5F0D6] px-5 h-10 rounded-lg">
            Careers
          </button>
          <button className="hover:bg-[#F5F0D6] px-5 h-10 rounded-lg">
            Partner
          </button>
        </div>

        <div className="hidden md:flex items-center">
          <button className="font-semibold hover:bg-[#FCFBF3] hover:text-black border-2 border-[#322B2A] flex items-center gap-4 cursor-pointer px-4 h-10 rounded-lg text-white bg-[#322B2B]">
            <FaMicroscope />
            team@24labs.ai
          </button>
        </div>

        <div className="flex  md:hidden mt-2 cursor-pointer items-center border border-black rounded-md h-8 p-1 py-2">
        <HiBars3 size={25} />

        </div>
      </nav>
    </>
  );
};
