import Link from "next/link";
import React from "react";
import mongoose from "mongoose";
import Product from "../../models/Product";

//products coming from getServerSideProps function below ...
const Tshirts = ({ products }) => {
  return (
    <div className="container mx-auto">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-around">
            {products.map((product) => (
              <div
                key={product._id}
                className="lg:w-1/4 md:w-1/2 sm:w-full w-full p-4 shadow-lg mb-6"
              >
                <Link
                  href={`/product/${product.slug}`}
                  className="block relative rounded overflow-hidden"
                >
                  <img
                    alt={product.title}
                    className="h-[30vh] w-full object-contain"
                    src={product.img}
                  />
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.category.toUpperCase()}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {product.title}
                  </h2>
                  <p className="mt-1 text-gray-700">₹{product.price}</p>
                  <p className="mt-1 text-gray-400">
                    {Array.isArray(product.size)
                      ? product.size.join(", ")
                      : product.size || "N/A"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};


export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  //Here We are finding data from the database not from the api ...
  let products = await Product.find(); // this is the array form 

  return {

    //Here converting array into string first and then converting string into JSON format 
    props: { products: JSON.parse(JSON.stringify(products)) } // This Props is actaully passed to the tshirt function above 
  };
}

export default Tshirts;
