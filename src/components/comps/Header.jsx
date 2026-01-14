import React, { useState } from "react";

const Header = () => {

// const [userName, setUserName] = useState('')

// if(!data){
//   setUserName('Admin')
// }else{
//   setUserName(data.name)
// }

const logOutUser = ()=>{
localStorage.removeItem('loggedInUser')
window.location.reload()
}

  return (
    <div className="flex justify-between items-center border-b-2 border-gray-700 p-5">
      <h1 className="text-white text-2xl font-medium ">
        Hello, <br />
        <span className="text-4xl font-semibold font-serif">userName👋</span>
      </h1>
      <button onClick={logOutUser} className="bg-red-500 font-semibold text-white px-5 text-lg py-1.5 rounded-sm hover:bg-red-600">
        Logout
      </button>
    </div>
  );
};

export default Header;
