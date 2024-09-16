import PopularProductCard from "../components/PopularProductCard";

import shoe4 from "../assets/images/shoe4.svg";
import shoe5 from "../assets/images/shoe5.svg";
import shoe6 from "../assets/images/shoe6.svg";
import shoe7 from "../assets/images/shoe7.svg";

const PopularProducts = () => {
  const products = [
    {
      imgURL: shoe4,
      name: "AirMax Fusion X",
      price: "Kshs 20,000.20",
    },
    {
      imgURL: shoe5,
      name: "Zoom Ultra Boost",
      price: "Kshs 21,000.20",
    },
    {
      imgURL: shoe6,
      name: "React Volt Runner",
      price: "Kshs 22,000.20",
    },
    {
      imgURL: shoe7,
      name: "Lunar Blaze Elite",
      price: "Kshs 23,000.20",
    },
  ];
  return (
    <>
      <div className="" id="products">
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-4xl font-palanquin">
            Our Popular <span className="text-coral-blue">Products</span>
          </h2>
          <p className=" lg:max-w-lg text-slate-gray mt-2 font-montserrat">
            Explore top-quality products meticulously crafted to elevate your
            athletic performance and enhance your personal style.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 sm:gap-4 gap-4">
          {products.map((product) => (
            <PopularProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularProducts;
