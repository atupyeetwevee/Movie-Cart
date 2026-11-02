// import { getAuth } from "firebase/auth";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../lib/firebase";
import { Link, useNavigate } from "react-router-dom";
import { LuEyeOff, LuMail } from "react-icons/lu";
import { Icon } from "@iconify/react";

function LogInPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitForm = async (formData) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );

      const user = userCredential.user;
      console.log("Logged in", user.uid);

      reset();
      navigate("/");
    } catch (error) {
      console.error(error.code, error.message);

      if (error.code === "auth/invalid-credential") {
        alert("Incorrect email or password.");
      } else {
        alert("Login failed. Please try again.");
      }
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
    <div className="flex items-center justify-center text-white">
      <div className="w-full justify-center">
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="flex flex-col gap-5 w-full"
          autoComplete="off"
        >
          <div className="flex flex-col w-full gap-5">
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

            <div className="flex justify-end">
              <p>Forgot Password?</p>
            </div>

            <div className="flex gap-5 justify-center items-center ">
              <button
                type="submit"
                className="bg-gray-500 border border-gray-400 rounded-lg px-2 py-2 w-1/2"
              >
                LOGIN
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
              Don't have an account? <Link to="/auth/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogInPage;
