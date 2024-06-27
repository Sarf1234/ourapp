import Link from "next/link";
import React, { useState } from "react";
import Image from 'next/image';

const Page = () => {
    const [nav, setNav] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  const links = [
    {
      id: 4,
      img:"https://erental.blob.core.windows.net/image/5ab53fbb-e85a-44cc-a366-d95c77198bed.png",
      link: "Quote",
    },
    {
      id: 5,
      img:"	https://erental.blob.core.windows.net/image/f663bcb8-d41e-4dc5-b990-4570cb921400.png",
      link: "Cart",
    },
  ];

  return (
   <div className="relative md:h-20 h-16">
       <div className="flex justify-between items-center w-full md:h-20 h-16 fixed top-0 md:px-12 px-4 text-black bg-white nav">
       <div className="mr-2">
        <Link
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
             <Image src="https://erental.blob.core.windows.net/image/4f4327ef-acd5-44de-8a32-c19af2dfb1e9.png" alt="My Image" width={100} height={70} />
        </Link>
      </div>

      <div className="md:flex-grow lg:flex-none w-2/4 px-2 md:mx-8 mx-2 py-2 border-gray rounded border  bg-placeholder-color">
        <div className="flex items-center w-full rounded">
          <div className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.776 13.69l3.974 3.975a1 1 0 01-1.415 1.414l-3.975-3.974a7.5 7.5 0 111.415-1.415zM9.5 15A5.5 5.5 0 109.5 4a5.5 5.5 0 000 11z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search For Rental Items…"
            className="text-sm md:text-md w-full outline-none bg-placeholder-color"
            aria-label="search"
          />
        </div>
      </div>


      <ul className="hidden lg:flex justify-center items-center">
        {links.map(({ id, link, img }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-black duration-200 link-underline"
          >
            <Link href={link} className="flex justify-center items-center">
              <Image src={img} alt="cart" width={20} height={20} />
              <h3>{link}</h3>
            </Link>
          </li>
        ))}
        <li
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-black duration-200 link-underline"
          >
            {/* <Link className="flex justify-center items-center" href='/login'>
              <h3>Login</h3>
            </Link> */}
            <div className="relative inline-block text-left">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-site-bg-collor text-sm font-medium text-white"
                id="options-menu"
                aria-expanded={isOpen}
                aria-haspopup="true"
                onClick={toggleMenu}
              >
                Login
                <svg
                  className={`-mr-1 ml-2 h-5 w-5 ${isOpen ? 'text-gray-700' : 'text-gray-400'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12.586l4.293-4.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 12.586z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isOpen && (
                <div  onClick={toggleMenu} className="origin-top-right bg-white absolute left-0 mt-2 w-36 rounded-md shadow-lg ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <div className="py-1" role="none">
                    <Link href="/" className="block px-4 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">
                      Item 1
                    </Link>
                    <Link href="/login" className="block px-4 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">
                      Item 2
                    </Link>
                    <Link href="/" className="block px-4 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">
                      Item 3
                    </Link>
                  </div>
                </div>
              )}
            </div>

          </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 text-gray-500 lg:hidden transition duration-300"
      >
        {nav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <div className="flex ">
              {/* cart  */}
               {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" className="h-6 w-6 mr-4">
                 <path d="M27.47,23.93H14.92A5.09,5.09,0,0,1,10,20L8,11.87a5.11,5.11,0,0,1,5-6.32h16.5a5.11,5.11,0,0,1,5,6.32l-2,8.15A5.1,5.1,0,0,1,27.47,23.93ZM12.94,8.05a2.62,2.62,0,0,0-2.54,3.23l2,8.15a2.6,2.6,0,0,0,2.54,2H27.47a2.6,2.6,0,0,0,2.54-2l2-8.15a2.61,2.61,0,0,0-2.54-3.23Z"></path><path d="M9.46 14a1.25 1.25 0 0 1-1.21-1L6.46 5.23A3.21 3.21 0 0 0 3.32 2.75H1.69a1.25 1.25 0 0 1 0-2.5H3.32A5.71 5.71 0 0 1 8.9 4.66l1.78 7.77a1.24 1.24 0 0 1-.93 1.5A1.43 1.43 0 0 1 9.46 14zM15.11 34.75a4 4 0 1 1 4-4A4 4 0 0 1 15.11 34.75zm0-5.54a1.52 1.52 0 1 0 1.52 1.52A1.52 1.52 0 0 0 15.11 29.21zM28.93 34.75a4 4 0 1 1 4-4A4 4 0 0 1 28.93 34.75zm0-5.54a1.52 1.52 0 1 0 1.53 1.52A1.52 1.52 0 0 0 28.93 29.21z"></path><path d="M28.93,29.21H12.27a3.89,3.89,0,1,1,0-7.78h2.65a1.25,1.25,0,1,1,0,2.5H12.27a1.39,1.39,0,1,0,0,2.78H28.93a1.25,1.25,0,0,1,0,2.5Z">
                 </path>
               </svg> */}
              {/* hamburger */}
             <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
             </svg>
          </div>
        )}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-gray-800 text-black transition duration-300">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
       </div>
   </div>
  );
};

export default Page;
