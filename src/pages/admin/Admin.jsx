import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../redux/slices/user-slice";

const Admin = () => {
  const handleDelete = (item) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteUser(item));
    }
  };

  const dispatch = useDispatch();
  const users = useSelector((s) => s.user.value);

  const usersItems = users?.map((item) => (
    <div
      key={item.id}
      className="p-4 border border-gray-300 rounded-lg bg-white shadow-md text-gray-800"
    >
      <h3 className="text-lg font-semibold">Name: {item.name}</h3>
      <p className="text-sm text-gray-600">Username: {item.username}</p>
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => handleDelete(item)}
          className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  ));

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto text-center font-sans">
        <h2 className="text-3xl font-bold mb-6 text-gray-700">Users</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {usersItems}
        </div>
      </div>
    </div>
  );
};

export default Admin;
