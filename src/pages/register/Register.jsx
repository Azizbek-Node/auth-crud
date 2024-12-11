import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/slices/user-slice";
import { v4 as uuidv4 } from "uuid";

const Register = () => {
  const user = useSelector((s) => s.user.value);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    let newUser = { ...Object.fromEntries(formData), id: uuidv4() };

    if (user.findIndex((item) => item.username === newUser.username) >= 0) {
      return alert("Username already exists");
    }
    dispatch(addUser(newUser));
    e.target.reset();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white border border-gray-300 rounded-lg w-full max-w-sm p-6">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Sign up to get started
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            className="border border-gray-400 rounded py-2 px-3 focus:outline-none focus:ring-1 focus:ring-gray-600"
            placeholder="Name"
            type="text"
            required
            name="name"
          />
          <input
            className="border border-gray-400 rounded py-2 px-3 focus:outline-none focus:ring-1 focus:ring-gray-600"
            placeholder="Username"
            type="text"
            required
            name="username"
          />
          <input
            className="border border-gray-400 rounded py-2 px-3 focus:outline-none focus:ring-1 focus:ring-gray-600"
            placeholder="Password"
            type="password"
            required
            name="password"
          />
          <button className="text-lg font-medium bg-gray-700 text-white py-2 rounded hover:bg-gray-800 transition duration-300">
            Register
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4 text-sm">
          Already have an account?{' '}
          <a href="/login" className="text-gray-700 hover:text-gray-900 underline">
            Login Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
