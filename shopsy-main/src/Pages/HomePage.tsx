import {
  LucideArrowRight,
  LucideFacebook,
  LucideInstagram,
  LucideMenu,
  LucideShoppingBag,
} from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../../src/components/card";
import { Swiper, SwiperSlide } from "swiper/react";
import Marquee from "react-fast-marquee";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import Loader from "../components/Loader";
export type productDataType = {
  id: number;
  created_at: Date;
  product_name: string;
  description: string;
  price: number;
  stock_quantity: number;
  category_id: number;
  image_url: string;
};
const HomePage = () => {
  const [products, setProducts] = useState<productDataType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from("Products").select("*");

      if (error) {
        throw new Error(error.message);
      }

      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const [scrollDirection, setScrollDirection] = useState<"left" | "right">(
    "right"
  );
  const [prevScrollY, setPrevScrollY] = useState<number>(0);
  const navRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setScrollDirection("left");
      } else {
        setScrollDirection("right");
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  const navigation = useNavigate();

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className="min-h-screen  bg-[#DADADA] px-28">
        <nav
          ref={navRef}
          className="  py-16 border-black flex items-center justify-between flex-row"
        >
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
        <button
          onClick={() => {
            console.log("Button pressed");
            navigation(`/products/${1}`);
          }}
        >
          check
        </button>
        <button onClick={() => supabase.auth.signOut()}>signout</button>
        <div className="flex flex-row items-center justify-between">
          <div>
            <h1 className="text-9xl font-extrabold ">
              <div className="absolute left-[10rem] top-[15rem]">
                RELAX WITH
              </div>{" "}
              <div className="absolute   left-[3rem] top-[22rem]">RICH RED</div>{" "}
              <div className="absolute   left-[3rem] top-[29rem]">TEA #3</div>
            </h1>
            <span className="  text-[1.3rem] ml-[2rem]   font-medium  absolute  my-36">
              Discover the complex aroma and sweet jam taste of
              <div>Golden Eyebrows - a deservedly popular red tea!</div>
            </span>
          </div>
          <div className="h-[52rem] overflow-hidden rounded-[3rem]  w-[55rem]">
            <img
              className="h-full w-full"
              src=" https://plus.unsplash.com/premium_photo-1664640458839-000c310875fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBhaW50aW5nfGVufDB8fDB8fHww"
            />
          </div>
        </div>
        {/* all products */}
        <div className="mb-[8rem]  flex flex-row items-center  gap-[10rem] mt-[25rem]">
          <div className="text-[4rem] tracking-widest font-semibold  ml-[9rem]">
            CHOOSE YOUR FLOW
          </div>
          <div className="underline  text-xl">all flows</div>
        </div>
        <Swiper
          spaceBetween={210}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {products.map((item) => (
            <SwiperSlide>
              <Card
                category_id={item.category_id}
                created_at={item.created_at}
                price={item.price}
                stock_quantity={item.stock_quantity}
                id={item.id}
                key={item.id}
                product_name={item.product_name}
                description={item.description}
                image_url={item.image_url}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-[16rem]   flex items-center justify-center  font-extrabold mt-[22rem]">
          TOP SALES
        </div>
        <div className="flex flex-row gap-20 items-center ">
          <div className="h-[52rem] overflow-hidden rounded-[3rem] mt-[8rem] min-w-[55rem]">
            <img
              className="h-full w-full"
              src="https://images.unsplash.com/photo-1599894019794-50339c9ad89c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBhaW50aW5nfGVufDB8fDB8fHww "
            />
          </div>
          <div className="flex flex-col h-[40rem]  justify-between  ">
            <div className="p-8">
              <div className="text-3xl font-medium">GREEN TEA #2</div>
              <div className="text-xl mt-4">$ 17</div>
            </div>

            <div className="  pr-20 text-xl leading-relaxed">
              Longjing is one of the ten "Famous Teas od China". It is made of
              small tea leaves and buds, thanks to which it is drunk for a long
              time, and has a bright aroma and rich taste. In the manufacture of
              thin and flat leaves are obtained
            </div>
          </div>
        </div>
        <div className="  px-28">
          <div className="text-xl my-20 underline">all top sales</div>
          <div className="grid grid-cols-3 gap-6 p-6">
            {products.map((item) => (
              <div>
                <div className="overflow-hidden rounded-[3rem]">
                  <img
                    className="h-full w-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
                    src={item.image_url}
                    alt=""
                  />
                </div>
                <div className="  px-4 my-4 text-2xl font-medium">
                  {item.product_name}
                </div>
                <div className="px-4 text-2xl text-zinc-400">
                  $ {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <Marquee
            direction={scrollDirection}
            speed={150}
            className="  absolute top-[10rem] flex flex-col marquee-container overflow-hidden"
          >
            <div className="text-[16rem]  marquee-text font-extrabold whitespace-nowrap">
              RED TEA YELLOW TEA GREEN TEA PINK TEA
            </div>
          </Marquee>
          <Marquee
            speed={300}
            direction={scrollDirection}
            className="  flex flex-col marquee-container overflow-hidden"
          >
            <div className="text-[16rem]  marquee-text font-extrabold whitespace-nowrap">
              RED TEA YELLOW TEA GREEN TEA PINK TEA
            </div>
          </Marquee>
        </div>
        <div className="flex bg-[grey] mt-[10rem] py-[10rem] rounded-[6rem] flex-row items-center justify-center gap-[18rem]">
          <div>
            <div className="text-[4rem]">GET 20% OFF</div>
            <div className="  mt-[4rem] font-medium flex flex-col gap-2 text-lg">
              <div>Your first order + future sales updates</div>
              <div>You can safely unsubscribe from any email</div>
              <div>footer. Here is our privacy policy.</div>
            </div>
          </div>
          <div className=" gap-8  border-b flex">
            <form action="">
              <input
                placeholder="Enter the email"
                className="outline-0 text-2xl"
                type="text"
                name=""
                id=""
              />
            </form>
            <div className="mb-2 ">
              <button className="  rounded-[2rem] py-1 px-10">
                <LucideArrowRight size={28} />
              </button>
            </div>
          </div>
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

export default HomePage;
