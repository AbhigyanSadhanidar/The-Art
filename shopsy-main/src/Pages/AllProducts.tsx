import {
  LucideFacebook,
  LucideInstagram,
  LucideMenu,
  LucideShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";

const AllProducts = () => {
  return (
    <>
      <div className="min-h-screen  bg-white px-28">
        <nav className="  py-16 border-black flex items-center justify-between flex-row">
          <Link to={"/"} className="text-2xl font-bold">
            TEAFLOW
          </Link>
          <div className="flex flex-row gap-10">
            <div className="flex gap-16 flex-row   mr-48">
              <div className="text-2xl">journal</div>
              <div className="text-2xl">contact us</div>
              <div className="text-2xl">about us</div>
              <Link to={"/products"} className="text-2xl">
                shop
              </Link>
            </div>
            <div className="flex gap-8 flex-row">
              <LucideShoppingBag size={30} />
              <LucideMenu size={30} />
            </div>
          </div>
        </nav>
        <div>
          <div className="flex text-lg font-medium text-zinc-400">
            Home <div className="px-8">/</div> Products
          </div>
        </div>
        <div className="  my-6 font-extrabold text-[8rem] tracking-tight">
          PRODUCTS
        </div>
        <div className="  justify-items-center gap-8  grid grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className=" ">
              <div className="h-[24rem]   rounded-[2.5rem] overflow-hidden gap-4 w-[30rem] ">
                <img
                  className="h-full w-full"
                  src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806688_awareness%20fl-min-1.jpg"
                  alt=""
                />
              </div>
              <div className="text-2xl font-medium my-8 px-4">GREEN TEA #1</div>
              <div className="text-2xl text-[#838383] font-medium  px-4">
                $15
              </div>
            </div>
          ))}
        </div>
        <div className="py-16 mt-[20rem] px-8">
           <div className="flex items-start justify-between gap-8">
             <div className="flex flex-col w-full sm:w-1/4">
              <div className="text-2xl font-semibold">SHOP</div>
              <div className="mt-6 flex flex-col gap-4">
                <div className="text-xl cursor-pointer">Home</div>
                <div className="text-xl cursor-pointer">Products</div>
                <div className="text-xl cursor-pointer">Top Sales</div>
                <div className="text-xl cursor-pointer">Premium Tea</div>
                <div className="text-xl cursor-pointer">Set</div>
              </div>
            </div>

             <div className="flex flex-col w-full sm:w-1/4">
              <div className="text-2xl font-semibold">HELP</div>
              <div className="mt-6 flex flex-col gap-4">
                <div className="text-xl cursor-pointer">Delivery</div>
                <div className="text-xl cursor-pointer">
                  Returns and Exchange
                </div>
                <div className="text-xl cursor-pointer">
                  Terms and Conditions
                </div>
                <div className="text-xl cursor-pointer">Privacy Policy</div>
              </div>
            </div>

             <div className="flex flex-col w-full sm:w-1/4">
              <div className="text-2xl font-semibold">ABOUT US</div>
              <div className="mt-6 flex flex-col gap-4">
                <div className="text-xl cursor-pointer">About Us</div>
                <div className="text-xl cursor-pointer">Contact Us</div>
              </div>
            </div>

             <div className="flex gap-4 justify-center items-center sm:w-1/4">
              <div className="border p-2 rounded-full cursor-pointer hover:bg-gray-700">
                <LucideFacebook size={28} />
              </div>
              <div className="border p-2 rounded-full cursor-pointer hover:bg-gray-700">
                <LucideInstagram size={28} />
              </div>
            </div>
          </div>

           <div className="mt-24 text-center text-lg text-gray-400">
            <div>&copy; 2025 Your Company. All rights reserved.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
