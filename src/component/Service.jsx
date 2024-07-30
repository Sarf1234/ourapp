import Image from 'next/image';

const Service = () => {
  return (
    <div className="my-20">
      <div className="flex justify-center items-center gap-4 flex-wrap">
        <div className="drop-shadow-[0_7px_8px_rgba(0,0,0,7%)] p-8 md:p-4 text-center md:h-[15rem] h-full md:w-[24rem] w-full bg-[#FCFCFC]">
          <div className="flex justify-center items-center">
            <Image
              src="https://blr1.vultrobjects.com/erental-object/31ef8e43-ce78-4754-b3ba-393a8618010e.png"
              width={70}
              height={70}
              alt="Short term service"
              quality={75}
            />
          </div>
          <h5 className="text-sm font-bold mt-1 text-[#252B42]">SHORT TERM ITEMS</h5>
          <p className="text-xs font-normal mt-2 text-[#737373]">eRentals provides short term rental services and products mainly for events, functions, expo and exhibitions</p>
        </div>
        <div className="drop-shadow-[0_7px_8px_rgba(0,0,0,7%)] p-8 md:p-4 text-center md:h-[15rem] h-full md:w-[24rem] w-full bg-[#FCFCFC]">
          <div className="flex justify-center items-center">
            <Image
              src="https://blr1.vultrobjects.com/erental-object/99d83209-04d6-4506-9c8b-ae91fe77d8c6.png"
              width={70}
              height={70}
              alt="Better options service"
              quality={75}
            />
          </div>
          <h5 className="text-base font-bold mt-1 text-[#252B42]">BETTER OPTIONS</h5>
          <p className="text-sm font-normal mt-2 text-[#737373]">eRentals provides a wide range of categories, more product options, and better choices at affordable cost to customer</p>
        </div>
        <div className="drop-shadow-[0_7px_8px_rgba(0,0,0,7%)] p-8 md:p-4 text-center md:h-[15rem] h-full md:w-[24rem] w-full bg-[#FCFCFC]">
          <div className="flex justify-center items-center">
            <Image
              src="https://blr1.vultrobjects.com/erental-object/bd4773a4-dde3-4e41-aaa6-c25d4dfe5dbb.png"
              width={70}
              height={70}
              alt="Timely delivery service"
              quality={75}
            />
          </div>
          <h5 className="text-base font-bold mt-1 text-[#252B42]">DELIVERY & SETUP</h5>
          <p className="text-sm font-normal mt-2 text-[#737373]">eRentals provides timely product delivery along with setup and installation facility based on customer choice</p>
        </div>
      </div>
    </div>
  );
};

export default Service;