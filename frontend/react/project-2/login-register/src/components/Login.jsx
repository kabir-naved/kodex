import { useState } from "react";

function Login({ toggle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (email.trim() !== "" && password.trim() !== "") {
      toggle();
    }
  }
  return (
    <>
      <h1 className="text-3xl font-bold text-center text-[#0F172B]">
        Welcome back
      </h1>
      <p className="text-center text-gray-500 mt-2">Sign in to your account</p>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="text-sm font-medium text-[#3D4C61]">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg outline-none 
          focus:border-[#E8EAED] focus:ring-2 focus:ring-[#778798]
            transition-all duration-300 bg-[#F8FAFC]"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-[#3D4C61]">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg outline-none 
          focus:border-[#E8EAED] focus:ring-2 focus:ring-[#778798]
            transition-all duration-300 bg-[#F8FAFC]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#0F172B] text-white py-3 rounded-xl font-semibold hover:bg-[#172440] cursor-pointer"
        >
          Sign in
        </button>
      </form>

      <p className="text-center text-gray-500 mt-6">
        Don't have an account?
        <button onClick={toggle} className="ml-2 font-semibold text-[#1D293D] cursor-pointer">
          Sign up
        </button>
      </p>
    </>
  );
}

export default Login;
