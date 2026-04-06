import { useContext, useState } from "react";
import { Zap, User, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Auth } from "../../context/AuthContext";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  let navigate = useNavigate();

  const { setRegisterUsers, registerUsers } = useContext(Auth);

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const handleFormSubmit = (data) => {
    let newUsers = [...registerUsers, data];

    setRegisterUsers(newUsers);
    localStorage.setItem("reg users", JSON.stringify(newUsers));
    console.log(data);
    toast.dismiss();
    toast.success("Account Registered Successfully");
    reset();
  };

  const onError = () => {
    toast.dismiss()
    toast.error("Please fill all fields");
  };

  return (
    <div className="flex-1 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-1">Create account</h2>
          <p className="text-white/40 mb-6">Join SkyMart</p>

          <form className="space-y-4" onSubmit={handleSubmit(handleFormSubmit, onError)}>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                {...register("name", { required: "Name is required" })}
                className="w-full pl-10 py-3 bg-transparent border border-white/10 rounded-xl outline-none focus:border-indigo-500"
                placeholder="Full name"
              />
             <div>
               {/* {errors.name && <span className= {` text-red-400 text-xs`}>{errors.name.message}</span> } */}
             </div>
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                {...register("email", { required: "Email is required" })}
                className="w-full pl-10 py-3 bg-transparent border border-white/10 rounded-xl outline-none focus:border-indigo-500"
                placeholder="Email"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 character",
                  },
                })}
                type={showPassword ? "text" : "password"}
                className="w-full pl-10 pr-10 py-3 bg-transparent border border-white/10 rounded-xl outline-none focus:border-indigo-500"
                placeholder="Password"
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

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                {...register("samepassword", {
                  required: "Password not matched is required",
                })}
                type="password"
                className="w-full pl-10 py-3 bg-transparent border border-white/10 rounded-xl outline-none focus:border-indigo-500"
                placeholder="Confirm password"
              />
            </div>

            <button
              // disabled={!isValid}
              type="submit"
              className="w-full bg-indigo-500 py-3 rounded-xl flex items-center justify-center gap-2 font-bold hover:bg-indigo-600"
            >
              Create Account <ArrowRight />
            </button>
          </form>

          <p className="text-center text-white/30 mt-6 ">
            Already have an account?{" "}
            <NavLink>
              <button
                className="text-indigo-400 cursor-pointer"
                onClick={() => navigate("/")}
              >
                Sign in
              </button>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
