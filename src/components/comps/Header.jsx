import React from "react";

const Header = (props) => {
  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    // console.log(props.changeUser);
    props.changeUser("");
    // window.location.reload();
  };

  return (
    <div className="flex justify-between items-center border-b-2 border-gray-700 p-2">
      <h1 className="text-white text-2xl font-medium ">
        Hello, <br />
        <span className="text-4xl font-semibold font-serif">
          {props.data?.name || "Admin"}👋
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-500 font-semibold text-white px-5 text-lg py-1.5 rounded-sm hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
