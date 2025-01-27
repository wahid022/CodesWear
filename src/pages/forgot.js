import React from "react";
import Link from "next/link";
import Image from "next/image";

const ForgotPassword = () => {
  return (
    <section className="py-8 md:py-16 dark:bg-gray-800">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image
            className="mr-3"
            src="/logo.jpg"
            alt="Logo"
            height={80}
            width={80}
            priority
          />
          CodesWear
        </Link>

        {/* Forgot Password Form Container */}
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-6 md:space-y-8 sm:p-8">
            {/* Title */}
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Forgot Your Password?
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Enter your registered email address to reset your password.
            </p>

            {/* Forgot Password Form */}
            <form
              className="space-y-6"
              method="POST"
              action="/auth/forgot-password"
            >
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
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                  placeholder="name@company.com"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-white bg-pink-600 py-2 rounded-lg font-medium hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                Send Reset Link
              </button>
            </form>

            {/* Back to Login */}
            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
              Remembered your password?{" "}
              <Link
                href="/login"
                className="font-medium text-pink-600 hover:underline dark:text-pink-500"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
