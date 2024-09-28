import React from 'react';
import Image from 'next/image';
import logo from "../../public/logo.webp";

const SignIn = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-oohpoint-primary-1"></div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/bg-signin.png')` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen w-full text-white">
        {/* Logo */}
        <Image src={logo} height={100} width={100} alt="Logo" />

        {/* Form Container */}
        <div className="bg-white p-5  lg:p-12 rounded-lg shadow-lg w-full max-w-lg mt-8">
          <h2 className="text-sm font-bold text-center mb-6 text-[#666666]">Please fill in your unique admin login details below</h2>
          
          {/* Form */}
          <form className="flex flex-col gap-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#666666]">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className=" w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-oohpoint-grey-200 mt-2 border-none"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#666666]">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-oohpoint-grey-200 mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent border-none"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className='w-full flex md:justify-end'>
              <h3 className='text-sm font-medium text-[#666666]'>Forget Password ?</h3>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
