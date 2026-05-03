import React from "react";

function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col items-center justify-center gap-6">
      {/* Logo */}
      <img src="/spotify-logo.png" alt="logo" className="h-12 w-12" />

      <div className="w-[350px] space-y-6">
        {/* Heading */}
        <h1 className="text-5xl text-center font-bold">
          Sign up to start listening
        </h1>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email address</label>
            <input
              type="email"
              placeholder="name@domain.com"
              className="w-full p-2 rounded bg-[#121212] border border-gray-700"
            />
          </div>

          <button className="w-full bg-green-500 text-black py-2 rounded font-semibold">
            Next
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2">
          <hr className="flex-1 border-gray-700" />
          <span className="text-sm">or</span>
          <hr className="flex-1 border-gray-700" />
        </div>

        {/* Social Buttons */}
        <div className="space-y-3">
          <button className="w-full border border-gray-600 py-2 rounded flex items-center justify-center gap-6">
            <img src="/google-logo.png" alt="google" className="h-5 w-5" />
            <span>Sign up with Google</span>
          </button>

          <button className="w-full border border-gray-600 py-2 rounded flex items-center justify-center gap-6">
            <img src="/apple-logo.png" alt="apple" className="h-5 w-5" />
            <span>Sign up with Apple</span>
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-400">
          Already have an account?{" "}
          <span className="text-white underline cursor-pointer">Log in</span>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
