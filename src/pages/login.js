import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const router=useRouter();

  const handleChange = (e) => {
    console.log(e.target.value);

    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formBody = {email, password };

    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: JSON.stringify(formBody),
      headers: { "Content-Type": "application/json" },
    });
    let response = await res.json();
    console.log(response);
    setEmail("");
    setPassword("");


    //Agar response.success==true hua toh toastify run honga and router.push() se home page mein redirect..

    if(response.success)
    {
      toast.success('User Successfully logged in ..', {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

        //timeout function jo hai 1 sec baad leke jayenga homepage pe after toastify run ho jaaye ..
        setTimeout(()=>{
          router.push('http://localhost:3000');
        },1000)

    }
    else{
      toast.error('Invalid Credentials...', {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }


    
    console.log("Handle Submit is called ...");
  };
  return (
    <section className="py-8 md:py-16 dark:bg-gray-800">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {/* Logo */}

        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />


        <Link
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image
            className="mr-3"
            src="/logo1.jpg"
            alt="Logo"
            height={80} // Increased height
            width={80} // Increased width
            priority // Ensures the logo loads quickly
          />
        </Link>

        {/* Login Form Container */}
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-6 md:space-y-8 sm:p-8">
            {/* Title */}
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Sign In Access
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400">
              You must become a member to login and access the entire site.
            </p>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6" method="POST" action="/auth/login/">
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={handleChange}
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                  placeholder="name@company.com"
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={handleChange}
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                  placeholder="••••••••"
                  required
                />
              </div>

              {/* Forgot Password */}
              <div className="flex items-center justify-between">
                <a
                  href="/forgot"
                  className="text-sm font-medium text-pink-600 hover:underline dark:text-pink-500"
                >
                  Forgot password?
                </a>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full text-white bg-pink-600 py-2 rounded-lg font-medium hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                SIGN IN
              </button>

              {/* Sign Up Link */}
              <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                Not a member yet?{" "}
                <Link
                  href="/signup"
                  className="font-medium text-pink-600 hover:underline dark:text-pink-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
