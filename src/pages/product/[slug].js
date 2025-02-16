import { useRouter } from "next/router";
import React, { useState } from "react";
import mongoose from "mongoose";
import Product from "../../../models/Product";

const SlugPage = ({ addTocart, toggleCart, product, variants }) => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(product, variants);

  const [pin, setPin] = useState("");
  const [delivery, setDelivery] = useState(null);
  const [color, setColor] = useState(product.color);
  // Initialize size as an empty string so no size is preselected.
  const [size, setSize] = useState("");

  const colorClasses = {
    white: "bg-white border-gray-500 shadow",
    red: "bg-red-500 border-gray-300",
    green: "bg-green-500 border-gray-300",
    blue: "bg-blue-500 border-gray-300",
    purple: "bg-purple-500 border-gray-300",
    yellow: "bg-yellow-500 border-gray-300",
    black: "bg-black border-gray-500",
  };

  const refreshVariant = (newColor, newSize) => {
    if (!newSize) return;
    if (variants[newColor] && variants[newColor][newSize]) {
      const url = `/product/${variants[newColor][newSize].slug}`;
      router.push(url); // Use router.push instead of window.location.href
    } else {
      console.warn("Variant combination not found:", newColor, newSize);
    }
  };
  

  const checkServicibility = async () => {
    try {
      const res = await fetch("/api/pincode");
      const pinData = await res.json();
      setDelivery(pinData.includes(parseInt(pin)));
    } catch (error) {
      console.error("Error checking pincode:", error);
      setDelivery(false);
    }
  };

  // If no size is selected, show all colors; otherwise, filter colors by availability of that size.
  const colorsToDisplay = size
    ? Object.keys(variants).filter((col) => variants[col][size])
    : Object.keys(variants);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-16 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/3 w-full px-24 lg:h-auto object-cover object-top rounded"
            src={product.img}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product.slug}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>
            <p className="leading-relaxed">{product.desc}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                {colorsToDisplay.map((col) => (
                  <button
                    key={col}
                    onClick={() => {
                      setColor(col);
                      refreshVariant(col, size);
                    }}
                    className={`border-2 ml-1 rounded-full w-6 h-6 focus:outline-none ${colorClasses[col]} ${
                      col === color ? "border-black" : "border-gray-300"
                    }`}
                  ></button>
                ))}
              </div>

              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <select
                  value={size}
                  onChange={(e) => {
                    const newSize = e.target.value;
                    setSize(newSize);
                    refreshVariant(color, newSize);
                  }}
                  className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10"
                >
                  {/* Default option for no selection */}
                  <option value="">Select a size</option>
                  {Object.keys(variants[color]).map((sz) => (
                    <option key={sz} value={sz}>
                      {sz}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ₹{product.price}
              </span>
              <button
                onClick={() => {
                  addTocart(slug, 1, product.price, product.title, size, color);
                  toggleCart();
                }}
                className="flex ml-8 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded"
              >
                Add To Cart
              </button>
              <button className="flex ml-4 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                Buy Now
              </button>
            </div>
            <div className="pin mt-6 flex space-x-2 text-sm">
              <input
                type="text"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="px-2 border-2 border-gray-400 rounded-md"
                placeholder="Enter Pincode"
              />
              <button
                onClick={checkServicibility}
                className="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded"
              >
                Check
              </button>
            </div>
            {delivery !== null && (
              <div
                className={`text-sm mt-3 ${
                  delivery ? "text-green-700" : "text-red-700"
                }`}
              >
                {delivery
                  ? "Yay! This pincode is serviceable."
                  : "Sorry! We do not deliver to this pincode yet."}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  const { slug } = context.params;
  let product = await Product.findOne({ slug });
  let variants = await Product.find({ title: product.title });
  let colorSizeSlug = {};


  variants.forEach((item) => {
    if (!colorSizeSlug[item.color]) {
      colorSizeSlug[item.color] = {};
    }
    colorSizeSlug[item.color][item.size] = { slug: item.slug };
  });

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      variants: JSON.parse(JSON.stringify(colorSizeSlug)),
    },
  };
}

export default SlugPage;
