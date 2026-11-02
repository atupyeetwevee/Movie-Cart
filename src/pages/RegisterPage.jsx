import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../lib/firebase";
import { LuEyeOff, LuMail, LuUserRound } from "react-icons/lu";
import { Icon } from "@iconify/react";

function RegisterPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitForm = async (formData) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );

      const user = userCredential.user;

      console.log(user.uid);
      console.log("Account created:", user.uid);

      alert("Welcome! Your account was created.");

      reset();
      navigate("/");
    } catch (error) {
      console.error(error.code);

      alert("Something went wrong. Please try again.");
    }
  };

  //Google LogIn

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      console.log("Google login successful:", user.uid);

      navigate("/");
    } catch (error) {
      console.error(error.code, error.message);

      if (error.code === "auth/popup-closed-by-user") {
        alert("Google login was cancelled.");
      } else {
        alert("Google login failed. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center text-white w-full">
      <div className="w-full">
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="flex flex-col gap-5"
          autoComplete="off"
        >
          <div className="flex flex-col w-full gap-5">
            <div className="flex gap-2 w-full justify-end items-center px-4 py-2 border border-gray-400 rounded-lg">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your Full Name"
                autoComplete="off"
                {...register("name", { required: "Name is required" })}
                className="w-full outline-none"
              />
              <LuUserRound />
            </div>
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name?.message}</p>
            )}
            <div className="flex gap-2 w-full justify-end items-center px-4 py-2 border border-gray-400 rounded-lg">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                autoComplete="off"
                {...register("email", {
                  required: "Enter an email address",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                className="w-full outline-none"
              />
              <LuMail />
            </div>
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email?.message}</p>
            )}
            <div className="flex gap-2 w-full justify-end items-center px-4 py-2 border border-gray-400 rounded-lg">
              <input
                type="password"
                id="pass"
                name="password"
                placeholder="********"
                autoComplete="new-password"
                {...register("password", { required: "Password is required" })}
                className="w-full outline-none"
              />
              <LuEyeOff />
            </div>
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password?.message}</p>
            )}
            <div className="flex gap-5 justify-center items-center ">
              <button
                type="submit"
                className="border border-gray-400 bg-gray-400 rounded-lg px-2 py-2 w-1/2"
              >
                SIGN-UP
              </button>

              <button
                type="submit"
                className="flex justify-center items-center gap-1 border border-gray-400 bg-secondary rounded-lg px-2 py-2 w-1/2"
                onClick={handleGoogleLogin}
              >
                <Icon icon="logos:google-icon" />
                <p className="text-gray-500 text-xl">|</p> Continue with Google
              </button>
            </div>
            <p>
              Already have an account <Link to="/auth/login">Log In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
