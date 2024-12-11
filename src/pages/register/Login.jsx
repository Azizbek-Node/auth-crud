import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/slices/token-slice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const users = useSelector((s) => s.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);
    let user = Object.fromEntries(formData);

    let existUser = users.find((item) => item.username === user.username);

    if (existUser) {
      if (existUser.password === user.password) {
        dispatch(signIn("testToken"));
        navigate("/admin");
      } else {
        alert("Username or password invalid");
      }
    } else {
      alert("Username or password invalid");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white border border-gray-300 rounded-lg w-full max-w-sm p-6">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Please login to your account
        </p>
        <form onSubmit={handleLogin} className="flex flex-col gap-3">
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
            Login
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4 text-sm">
          Don't have an account?{' '}
          <a href="/register" className="text-gray-700 hover:text-gray-900 underline">
            Register Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;