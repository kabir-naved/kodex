import { useContext, useState } from "react";
import { Zap, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Auth } from "../../context/AuthContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  let { registerUsers, setLoggedInUser } = useContext(Auth);

  let navigate = useNavigate();

  let {
    register,
    handleSubmit,
    reset,
    formState: { error, isValid },
  } = useForm({
    mode: onchange,
  });

  const handleFormSubmit = (data) => {
    let user = registerUsers.find(
      (elem) => elem.email === data.email && elem.password === data.password,
    );
    if (!user) {
      toast.dismiss()
      toast.error("User Not Found");
      reset();
      return;
    } else {
      setLoggedInUser(user);
      localStorage.setItem("log user", JSON.stringify(user));
      navigate("/start");
      toast.success("Succssfully LoggedIn");
      // console.log(data);
      reset();
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center p-6">
      <div className="w-full max-w-md animate-[scaleIn_.4s_ease]">
        {/* Mobile Logo */}
        <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
          <div className="w-9 h-9 bg-indigo-500 rounded-xl flex items-center justify-center">
            <Zap className="text-black fill-black w-4 h-4" />
          </div>
          <span className="font-bold text-xl">
            Sky<span className="text-indigo-500">Mart</span>
          </span>
        </div>

        {/* Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
          <h2 className="font-bold text-2xl mb-1">Sign in</h2>
          <p className="text-white/40 text-sm mb-8">
            Enter your credentials to continue
          </p>

          <form className="space-y-4" onSubmit={handleSubmit(handleFormSubmit)}>
            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 w-4 h-4" />
              <input
                type="email"
                {...register("email")}
                placeholder="Email address"
                className="w-full bg-transparent border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm outline-none focus:border-indigo-500"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 w-4 h-4" />

              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full bg-transparent border border-white/10 rounded-xl py-3 pl-10 pr-10 text-sm outline-none focus:border-indigo-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Submit */}
            <button
              // disabled={isValid}
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 mt-2 text-base font-bold bg-indigo-500 hover:bg-indigo-600 rounded-xl transition"
            >
              Sign in
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-white/30 text-sm mt-6">
            Don't have an account?{" "}
            <NavLink
              to={"/register"}
              className="text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              Create one
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
