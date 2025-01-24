"use client";

import React, { useState } from "react";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  const handleForgotPassword = () => {
    console.log("Redirecting to Forgot Password page...");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="grid sm:grid-cols-12 gap-4 w-[100%] md:w-[80%] lg:h-[100%] lg:w-[100%] h-auto md:h-[70%] bg-white rounded-lg shadow-md">
        {/* Left Column */}
        <div className="flex items-center justify-center bg-red-400 rounded-l-lg sm:col-span-7 sm:block hidden">
          <h1 className="text-4xl font-bold text-white">Welcome Back!</h1>
        </div>

        {/* Right Column */}
        <div className="flex items-center justify-center bg-white rounded-r-lg sm:col-span-5">
          <div className="w-full max-w-md p-6">



            {/* Logo Section */}
            <div className="flex justify-start mb-6">
              <img
                src="/logo.png" // Replace this with your actual logo path
                alt="Logo"
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Heading Section */}
            <div className="mb-4 ">
              <h1 className="text-4xl font-bold mb-2">Sign In</h1>
              <p className="text-gray-600">
                Please enter your email and password to log in to your account.
              </p>
            </div>

            <form onSubmit={handleLogin}>
              {/* Email Input */}
              <div className="mb-4 relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <EnvelopeIcon className="w-5 h-5 text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-3" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="mb-4 relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <LockClosedIcon className="w-5 h-5 text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-3" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between mb-6">
                {/* Remember Me */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-2 text-sm text-gray-600"
                  >
                    Remember Me
                  </label>
                </div>

                {/* Forgot Password */}
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-sm text-blue-500 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
