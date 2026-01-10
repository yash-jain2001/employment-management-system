import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("email is ",email, "password is ",password);
    setEmail("")
    setPassword("")
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={formSubmitHandler}
          className="flex flex-col gap-3 items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              // console.log(e.target.value);
              setEmail(e.target.value);
            }}
            required
            type="email"
            placeholder="Enter your email"
            className="border-2 border-emerald-600 text-white bg-transparent text-xl outline-none  px-4 py-2 rounded-full"
          />
          <input
            value={password}
            onChange={(e) => {
              // console.log(e.target.value);
              setPassword(e.target.value);
            }}
            required
            type="password"
            placeholder="Enter your password"
            className="border-2 border-emerald-600 text-white bg-transparent text-xl outline-none px-4 py-2 rounded-full"
          />
          <button className="w-full text-white bg-emerald-600 text-xl outline-none px-5 py-1.5 rounded-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
