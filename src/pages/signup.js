import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";

const Signup = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword,setConpassword] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);

    if (e.target.name === "name") {
      setname(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
    else if (e.target.name === "cnfpassword") {
      setConpassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formBody = { name, email, password };

    const res = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      body: JSON.stringify(formBody),
      headers: { "Content-Type": "application/json" },
    });
    let response = await res.json();
    console.log(response);
    setname("");
    setEmail("");
    setPassword("");
    setConpassword("");


    toast.success('User Has Been Created Successfully ..', {
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
            height={80}
            width={80}
            priority
          />
          CodesWear
        </Link>

        {/* Signup Form Container */}
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-6 md:space-y-8 sm:p-8">
            {/* Title */}
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Create Your Account
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Join us to gain access to exclusive features and content.
            </p>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-6" method="POST">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>

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
                  placeholder="Enter a strong password"
                  required
                />
              </div>

              {/* Confirm Password Input */}
              <div>
                <label
                  htmlFor="cnfpassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="cnfpassword"
                  value={conPassword}
                  onChange={handleChange}
                  id="cnfpassword"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                  placeholder="Re-enter your password"
                  required
                />
              </div>

              {/* Signup Button */}
              <button
                type="submit"
                className="w-full text-white bg-pink-600 py-2 rounded-lg font-medium hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                SIGN UP
              </button>

              {/* Login Link */}
              <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-pink-600 hover:underline dark:text-pink-500"
                >
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
