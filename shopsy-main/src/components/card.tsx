import { productDataType } from "../Pages/HomePage";
import gsap from "gsap";
import { useRef } from "react";
import { LucideShoppingBag } from "lucide-react";
const Card = (props: productDataType) => {
  const overayRef = useRef<HTMLDivElement | null>(null);
  // *og
  return (
    <div
      onMouseEnter={() => gsap.to(overayRef.current, { y: "-50%" })}
      onMouseLeave={() => gsap.to(overayRef.current, { y: "0%" })}
      className="relative"
    >
      {/* Image Container */}
      <div className="h-[36rem] overflow-hidden rounded-[2.5rem] w-[35rem] relative">
        <img
          className="w-full object-cover h-full"
          src={props.image_url}
          alt={props.product_name}
        />

        {/* Overlay */}
        <div
          ref={overayRef}
          className="absolute  text-white flex items-start justify-center  top-[100%] left-0 w-full h-full     rounded-[2.5rem]"
        >
          <button className="bg-black mt-20 flex items-center justify-between text-white text-lg font-medium  px-[2rem] gap-[4rem] py-[2rem] rounded-full">
            <div className="flex gap-6 font-medium">
              <LucideShoppingBag size={30} />
              <span>ADD TO CART</span>
            </div>
            <div>$27</div>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="text-3xl font-medium my-8">{props.product_name}</div>
      <div className="text-lg tracking-wider text-zinc-500 font-medium">
        {props.description}
      </div>
      <div>
        <LucideShoppingBag />
      </div>
    </div>
  );
};

export default Card;
