import Link from "next/link";
import React from "react";
import mongoose from "mongoose";
import Product from "../../models/Product";

// products coming from getServerSideProps function below ...
const Tshirts = ({ products }) => {
  return (
    <div className="container mx-auto">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-around">
            {/* yaha Objecty */}
            {Object.keys(products).length === 0 && (<p>Sorry No Tshirts in Stock Right Now! Stay Tuned ...</p>)}

            {Object.keys(products).map((item) => (
              <div
                key={products[item]._id}
                className="lg:w-1/4 md:w-1/2 sm:w-full w-full p-4 shadow-lg mb-6"
              >
                {/* Link to product details page */}
                <Link
                  href={`/product/${products[item].slug}`}
                  className="block relative rounded overflow-hidden"
                >
                  <img
                    alt={products[item].title}
                    className="h-[30vh] w-full object-contain"
                    src={products[item].img}
                  />
                </Link>

                <div className="mt-4">
                  {/* Product category */}
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {products[item].category
                      ? products[item].category.toUpperCase()
                      : "UNKNOWN CATEGORY"}
                  </h3>

                  {/* Product title */}
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {products[item].title}
                  </h2>

                  {/* Product price */}
                  <p className="mt-1 text-gray-700">₹{products[item].price}</p>

                  {/* Displaying sizes as square boxes */}
                  {/* <p className="mt-2 text-gray-500">Sizes:</p> */}
                  <div className="flex space-x-2 mt-1">
                    {products[item].size && products[item].size.length > 0
                      ? products[item].size.map((size, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-sm border border-gray-300 rounded bg-gray-100"
                          >
                            {size}
                          </span>
                        ))
                      : "N/A"}
                  </div>

                  {/* Displaying colors as small colored dots */}
                  {/* <p className="mt-2 text-gray-500">Colors:</p> */}
                  <div className="flex space-x-2 mt-1">
                    {products[item].color && products[item].color.length > 0
                      ? products[item].color.map((color, index) => (
                          <span
                            key={index}
                            className={`h-5 w-5 rounded-full border border-gray-300`}
                            style={{ backgroundColor: color }}
                          ></span>
                        ))
                      : "N/A"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Here Not fetching Data Using fetchApi() but by getServerSideProps() to save time
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    // Connect to MongoDB if not already connected
    await mongoose.connect(process.env.MONGO_URI);
  }

  // Here we are finding data from the database, not from the API
  let products = await Product.find({category:'tshirt'}); // this is the array form

  let tshirts = {};
  for (let item of products) {
    if (item.title in tshirts) {
      // If a particular color is not available or or Color ka Array Bana Do Pehle
      if (!Array.isArray(tshirts[item.title].color)) {
        tshirts[item.title].color = [tshirts[item.title].color];
      }

      //  Upar jo Color Array bana hai usmein wo color daal do Jo nahi hai 

      if (!tshirts[item.title].color.includes(item.color) && item.availableQty > 0) {
        tshirts[item.title].color.push(item.color);
      }

      // If a particular size is not available for the t-shirt or Size ka Array Bana Do Pehle 
      if (!Array.isArray(tshirts[item.title].size)) {
        tshirts[item.title].size = [tshirts[item.title].size];
      }
      //  Upar jo Size Array bana hai usmein wo color daal do Jo nahi hai 
      if(!tshirts[item.title].size.includes(item.size) && item.availableQty > 0) 
      {
        tshirts[item.title].size.push(item.size);
      }
    } 
    
    else {
      // Store the whole object as value and make the item title the key
      tshirts[item.title] = JSON.parse(JSON.stringify(item));

      // If available quantity exists, convert color and size into arrays
      if (item.availableQty > 0) {
        tshirts[item.title].color = [item.color];
        tshirts[item.title].size = [item.size];
      }
    }
  }

  return {
    // Here converting array into string first and then converting string into JSON format
    props: { products: JSON.parse(JSON.stringify(tshirts)) }, // This props is actually passed to the Tshirt function above
  };
}

export default Tshirts;
