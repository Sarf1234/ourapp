'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { FaCamera } from "react-icons/fa";
import DropDown from "@/ui/DropDown";
import { useSession, signIn } from "next-auth/react"


const Page = () => {

  const [iconShow, setIconShow] = useState(true)
  const session = useSession();
  console.log(session)

  return (
    <header className="md:border-b-[1px] px-2 sm:px-12 md:!px-16 lg:!px-16 2xl:!px-28 w-full">
      <nav className="md:h-[5.5rem] h-16 w-full flex justify-between items-center ">
        <div className="flex justify-between items-center md:gap-[3.4rem] 2xl:gap-20 gap-4 w-full">
          <div className="flex justify-center items-center">
            <div className="md:h-20 md:w-40 h-16 w-32 flex justify-center items-center">
              <Link href="/">
                <Image
                  src="https://blr1.vultrobjects.com/erental-object/378f01fe-2344-4c35-90d2-07dcd2236dd8.png"
                  className="h-full w-full object-contain"
                  alt="Logo"
                  width={200}
                  height={100}
                />
              </Link>
            </div>
            <div className="block md:hidden cursor-pointer mx-2">
              <CiShoppingCart className="text-2xl" />
            </div>
          </div>
          <div
            className="block md:hidden cursor-pointer"
            onClick={() => setIconShow(!iconShow)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 18L20 18"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 12L20 12"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 6L20 6"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="grow border-[1px]  bg-[#F3F9FB] cursor-pointer h-12 2xl:h-14 md:flex hidden justify-between items-center rounded">
            <form className="flex justify-center items-center w-full px-4">
              <div className="grow flex justify-center items-center">
                <span>
                  <CiSearch
                    style={{ fontSize: "25px" }}
                    className="searchNavbarmenu"
                  />
                </span>
                <input
                  type="search"
                  className="input_nav w-full px-2 h-8 bg-[#F3F9FB] outline-0"
                  placeholder="Search for Rental Item...."
                />
              </div>
              <div className="shrink-0 flex justify-center items-center w-8">
                <input type="file" className="hidden" accept="image/*" />
                <span className="">
                  <FaCamera style={{ fontSize: "25px" }} />
                </span>
              </div>
            </form>
          </div>
          <div className="md:flex hidden justify-center items-center gap-x-2">
            <div className="flex justify-center items-center">
              <Link
                href="/myaccount/Request%20Quote"
                className="flex justify-center items-center"
              >
                <LiaFileInvoiceSolid
                  className="mx-2 text-xl text-black"
                  style={{ fontSize: "24px" }}
                />
                <div className="text-lg 2xl:text-lg font-normal text-black">
                  Quote
                </div>
              </Link>
            </div>

            <span className="border-l border-gray-300 h-6 mx-2"></span>

            <div className="flex justify-center items-center">
              <Link
                href="/checkout"
                className="flex justify-center items-center"
              >
                <CiShoppingCart
                  className="mx-2 text-xl text-black"
                  style={{ fontSize: "24px" }}
                />
                <div className="text-lg 2xl:text-lg font-normal text-black">
                  Cart
                </div>
              </Link>
            </div>
            <span className="border-l border-gray-300 h-6 mx-2"></span>

            <div className="flex justify-center items-center">
              <DropDown />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Page;
