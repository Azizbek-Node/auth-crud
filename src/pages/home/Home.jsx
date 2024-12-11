import React from "react";

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
        <p className="text-lg mb-6">
          Experience the best services and features we offer.
        </p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white">
          <a href="/register">Get Started</a>
        </button>
      </div>
    </div>
  );
};

export default Home;
