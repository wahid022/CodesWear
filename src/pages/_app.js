import "@/styles/globals.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [cart, setcart] = useState({}); // Stored all the Previous Data of the cart
  const [subTotal, setSubTotal] = useState(0); // to Calculate the total Amount of the cart

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setcart(JSON.parse(localStorage.getItem("cart")));
      }
      // console.log('New Cart Items : useEffect : ',cart)
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
    
  }, []);
  // Function to Add a new Item to the Cart.. or When the user clicks on + button to increase the quantity of the product
  const addTocart = (itemCode, qty, price, name, size, variant) => {
    console.log('Add to Cart is called ...')
    let newCart = cart; // Copied the coming Data stored in cart State..

    // coming itemCode present already in the cart state or not
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty; //newCart[itemCode] to identify the particular item and then perform the operation accordingly..
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant };
    }

    setcart(newCart);
    saveCart(newCart);
  };

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let newTotal = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      newTotal += myCart[keys[i]].qty * myCart[keys[i]].price;
    }
    setSubTotal(newTotal);
  };

  //  To Clear the Cart ...
  const clearCart = () => {
    console.log("Items have been Cleared from the cart ....");
    setcart({});
    saveCart({});
  };

  // Function to Remove an Item from the Cart ...or When the user clicks on - button to decrease the quantity of the product..
  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart=JSON.parse(JSON.stringify(cart));   // Deep Copy 
    if (itemCode in newCart) {
      if (newCart[itemCode].qty <= 0) {
        delete newCart[itemCode];
      } else {
        newCart[itemCode].qty = newCart[itemCode].qty - qty;
      }
    }
    setcart(newCart);
    saveCart(newCart);
  };

  return (
    <>
      <Navbar
        cart={cart}
        addTocart={addTocart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
      />
      <Component
        cart={cart}
        addTocart={addTocart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
        {...pageProps}
      />
      ;
      <Footer />
    </>
  );
}
