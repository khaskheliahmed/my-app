"use client";

import React, { useState } from "react";

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
    // You can redirect to the forgot password page or handle the logic here.
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="grid grid-cols-2 gap-4 w-[80%] h-[70%] bg-white rounded-lg shadow-md">
        {/* Left Column */}
        <div className="flex items-center justify-center bg-red-400 rounded-l-lg">
          <h1 className="text-4xl font-bold text-white">Welcome Back!</h1>
        </div>

        {/* Right Column */}
        <div className="flex items-center justify-center bg-white rounded-r-lg">
          <div className="w-full max-w-md p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
            <form onSubmit={handleLogin}>
              {/* Email Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
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
