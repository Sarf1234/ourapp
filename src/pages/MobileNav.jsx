"use client";

import Link from 'next/link';
import { FaHome, FaUser, FaShoppingCart, FaFacebook, FaYoutube, FaInstagram, FaWhatsapp, FaFileDownload, FaLock, FaSignOutAlt } from 'react-icons/fa';
import { GrBusiness } from 'react-icons/gr';
import { IoMdQuote } from 'react-icons/io';
import { RiLoginBoxLine } from 'react-icons/ri';
import { useSession, signOut } from "next-auth/react";

const NavbarMobile = ({ iconShow, setIconShow }) => {
 

  return (
    <div
    className={`fixed inset-y-0 right-0 z-50 w-[80%] overflow-hidden bg-white transform ${
      iconShow ? "translate-x-full" : "translate-x-0"
    } transition-transform duration-500 ease-in-out`}
  >
    <div className="flex items-center justify-between px-4 py-3 bg-[#144169] text-white">
      <button onClick={setIconShow} className="text-white">
        <FaSignOutAlt size={24} />
      </button>
    </div>
    <ul className="px-4 py-2">
      <li className="py-2 border-b border-gray-200">
        <Link href="/" className="block text-gray-600 hover:text-gray-900">
         Home
        </Link>
      </li>
      <li className="py-2 border-b border-gray-200">
        <Link href="/shop" className="block text-gray-600 hover:text-gray-900">
         Shop
        </Link>
      </li>
      <li className="py-2 border-b border-gray-200">
        <Link href="/account" className="block text-gray-600 hover:text-gray-900">
          Account
        </Link>
      </li>
      <li className="py-2 border-b border-gray-200">
        <Link href="/" className="block text-gray-600 hover:text-gray-900">
         Home
        </Link>
      </li>
      <li className="py-2 border-b border-gray-200">
        <Link href="/shop" className="block text-gray-600 hover:text-gray-900">
         Shop
        </Link>
      </li>
      <li className="py-2 border-b border-gray-200">
        <Link href="/" className="block text-gray-600 hover:text-gray-900">
         Home
        </Link>
      </li>
      <li className="py-2 border-b border-gray-200">
        <Link href="/shop" className="block text-gray-600 hover:text-gray-900">
         Shop
        </Link>
      </li>
      <li className="py-2 border-b border-gray-200">
        <Link href="/" className="block text-gray-600 hover:text-gray-900">
         Home
        </Link>
      </li>
      <li className="py-2 border-b border-gray-200">
        <Link href="/shop" className="block text-gray-600 hover:text-gray-900">
         Shop
        </Link>
      </li>
      </ul>
  </div>
  );
};

export default NavbarMobile;
