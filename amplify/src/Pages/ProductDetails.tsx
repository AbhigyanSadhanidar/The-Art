import {
  LucideFacebook,
  LucideInstagram,
  LucideMenu,
  LucideShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../components/card";
import { productDataType } from "./HomePage";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

const ProductDetails = () => {
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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-[#DADADA] px-4 sm:px-8 md:px-12 lg:px-28">
        <a href="'/home" className="border">
          learn more
        </a>

        <nav className="py-8 lg:py-16 flex items-center justify-between flex-row">
          <Link to={"/"} className="text-xl sm:text-2xl font-bold">
            TEAFLOW
          </Link>

          <div className="hidden lg:flex flex-row gap-10">
            <div className="flex gap-8 lg:gap-16 flex-row lg:mr-48">
              <div className="text-lg lg:text-2xl">journal</div>
              <div className="text-lg lg:text-2xl">contact us</div>
              <div className="text-lg lg:text-2xl">about us</div>
              <Link to={"/products"} className="text-lg lg:text-2xl">
                shop
              </Link>
            </div>
            <div className="flex gap-4 lg:gap-8 flex-row">
              <LucideShoppingBag size={25} />
              <LucideMenu size={25} />
            </div>
          </div>

          <div className="flex lg:hidden gap-4">
            <LucideShoppingBag size={25} />
            <LucideMenu size={25} />
          </div>
        </nav>

        <div className="flex text-sm lg:text-lg font-medium text-zinc-400 mt-4">
          Home <div className="px-2 lg:px-8">/</div> GREEN TEA #3
        </div>

        <div className="flex flex-col lg:flex-row mt-8">
          <div className="w-full lg:w-2/3">
            <div className="rounded-2xl lg:rounded-[3rem] overflow-hidden h-auto lg:h-[52rem] mb-8">
              <img
                className="h-full w-full object-cover"
                src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806659_Slide1-min.jpeg"
                alt="Green Tea"
              />
            </div>

            <div className="block lg:hidden mb-10">
              <div className="text-2xl font-extrabold mb-4">GREEN TEA #3</div>
              <div className="text-lg mb-2">Tasting notes:</div>
              <div className="mb-6">
                juicy, sweet and strong. Velvety, fruity-berry aftertaste.
                Impact: refreshes and warms, gives strength and energy.
              </div>
              <button className="bg-black w-full flex items-center justify-between text-white text-base font-medium px-6 py-4 rounded-full">
                <div className="flex gap-4 font-medium">
                  <LucideShoppingBag size={24} />
                  <span>ADD TO CART</span>
                </div>
                <div>$27</div>
              </button>
            </div>

            <div className="text-xl font-extrabold my-8 lg:my-20">
              ABOUT PRODUCT
            </div>
            <div className="text-base lg:text-lg tracking-wider lg:tracking-widest w-full lg:w-[60rem]">
              Made in early spring from selected, large tea buds, densely
              covered with the golden-orange pile. The name translates as "Royal
              Big Golden Needles" (Chinese: 大金王王). The rich taste and bright
              aroma of Golden Needles have been achieved thanks to the highest
              quality class of the selected raw materials, the characteristics
              of the Jingu Da Bai Cha cultivar, and the terroir richness of the
              collection sites. Separately, we note the author's tea processing
              technology: the final drying process is carried out at a low
              temperature in order to maximize and fix the aroma of the tea
              leaf. Aroma: bright and rich, berry, smoky, and strawberry. Taste:
              juicy, sweet, and strong. Velvety, fruity-berry aftertaste.
              Effect: refreshes and warms, gives strength and energy. Harvest:
              First spring (most valuable), end of February 2022, Jingu Region,
              Pu'er County, Yunnan Province, China.
            </div>

            <div className="text-xl font-extrabold my-8 lg:my-20">
              PRODUCT DETAILS
            </div>
            <div className="text-base lg:text-lg tracking-wider lg:tracking-widest w-full lg:w-[60rem]">
              Made in early spring from selected, large tea buds, densely
              covered with the golden-orange pile. The name translates as "Royal
              Big Golden Needles" (Chinese: 大金王王). The rich taste and bright
              aroma of Golden Needles have been achieved thanks to the highest
              quality class of the selected raw materials, the characteristics
              of the Jingu Da Bai Cha cultivar, and the terroir richness of the
              collection sites. Separately, we note the author's tea processing
              technology: the final drying process is carried out at a low
              temperature in order to maximize and fix the aroma of the tea
              leaf. Aroma: bright and rich, berry, smoky, and strawberry. Taste:
              juicy, sweet, and strong. Velvety, fruity-berry aftertaste.
              Effect: refreshes and warms, gives strength and energy. Harvest:
              First spring (most valuable), end of February 2022, Jingu Region,
              Pu'er County, Yunnan Province, China.
            </div>
          </div>

          <div className="hidden lg:flex flex-col pl-10 h-fit mt-20 sticky right-0 top-5 gap-20 lg:gap-[20rem] lg:w-1/3">
            <div className="text-2xl lg:text-[3rem] font-extrabold">
              GREEN TEA #3
            </div>
            <div className="text-xl">
              <div className="my-4">Tasting notes:</div>
              <div>
                juicy, sweet and strong. Velvety, fruity-berry aftertaste.
                Impact: refreshes and warms, gives strength and energy.
              </div>
              <button className="bg-black mt-20 flex items-center justify-between text-white text-lg font-medium px-8 gap-4 lg:gap-[4rem] py-4 lg:py-[2rem] rounded-full">
                <div className="flex gap-4 lg:gap-6 font-medium">
                  <LucideShoppingBag size={25} />
                  <span>ADD TO CART</span>
                </div>
                <div>$27</div>
              </button>
            </div>
          </div>
        </div>

        <div className="my-10 lg:my-[10rem]">
          <h2 className="text-xl font-bold mb-8">Related Products</h2>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 40 },
              1024: { slidesPerView: 3, spaceBetween: 210 },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {products.map((item) => (
              <SwiperSlide key={item.id}>
                <Card
                  category_id={item.category_id}
                  price={item.price}
                  stock_quantity={item.stock_quantity}
                  created_at={item.created_at}
                  id={item.id}
                  product_name={item.product_name}
                  description={item.description}
                  image_url={item.image_url}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="py-10 lg:py-16 mt-10 lg:mt-[20rem] px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <div className="flex flex-col w-full md:w-1/4 mb-8 md:mb-0">
              <div className="text-xl lg:text-2xl font-semibold">SHOP</div>
              <div className="mt-4 lg:mt-6 flex flex-col gap-2 lg:gap-4">
                <div className="text-lg lg:text-xl cursor-pointer">Home</div>
                <div className="text-lg lg:text-xl cursor-pointer">
                  Products
                </div>
                <div className="text-lg lg:text-xl cursor-pointer">
                  Top Sales
                </div>
                <div className="text-lg lg:text-xl cursor-pointer">
                  Premium Tea
                </div>
                <div className="text-lg lg:text-xl cursor-pointer">Set</div>
              </div>
            </div>

            <div className="flex flex-col w-full md:w-1/4 mb-8 md:mb-0">
              <div className="text-xl lg:text-2xl font-semibold">HELP</div>
              <div className="mt-4 lg:mt-6 flex flex-col gap-2 lg:gap-4">
                <div className="text-lg lg:text-xl cursor-pointer">
                  Delivery
                </div>
                <div className="text-lg lg:text-xl cursor-pointer">
                  Returns and Exchange
                </div>
                <div className="text-lg lg:text-xl cursor-pointer">
                  Terms and Conditions
                </div>
                <div className="text-lg lg:text-xl cursor-pointer">
                  Privacy Policy
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full md:w-1/4 mb-8 md:mb-0">
              <div className="text-xl lg:text-2xl font-semibold">ABOUT US</div>
              <div className="mt-4 lg:mt-6 flex flex-col gap-2 lg:gap-4">
                <div className="text-lg lg:text-xl cursor-pointer">
                  About Us
                </div>
                <div className="text-lg lg:text-xl cursor-pointer">
                  Contact Us
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-start md:justify-center items-center w-full md:w-1/4">
              <div className="border p-2 rounded-full cursor-pointer hover:bg-gray-700">
                <LucideFacebook size={24} />
              </div>
              <div className="border p-2 rounded-full cursor-pointer hover:bg-gray-700">
                <LucideInstagram size={24} />
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-24 text-center text-base lg:text-lg text-gray-400">
            <div>&copy; 2025 TEAFLOW. All rights reserved.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
