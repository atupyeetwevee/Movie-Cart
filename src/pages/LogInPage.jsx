// import { getAuth } from "firebase/auth";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { Link, useNavigate } from "react-router-dom";

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

  return (
    <div className="flex items-center justify-center text-white">
      <div className="w-full justify-center">
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="flex flex-col gap-5 w-full"
        >
          <div className="flex flex-col w-full gap-5">
            <div className="flex gap-2 w-full justify-center items-center border border-gray-400">
              <p className="">Email:</p>
              <input
                type="email"
                id="email"
                name="email"
                {...register("email", {
                  required: "Enter an email address",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                className="w-full py-2 px-2 rounded-2xl border border-gray-400"
              />
            </div>

            {errors.email && (
              <p className="text-xs text-red-500">{errors.email?.message}</p>
            )}

            <div className="flex gap-2 w-full justify-center items-center border border-gray-400">
              <p className="">Password:</p>
              <input
                type="password"
                id="pass"
                name="password"
                {...register("password", { required: "Password is required" })}
                className="w-full py-2 px-2 rounded-2xl border border-gray-400"
              />
            </div>
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password?.message}</p>
            )}

            <div className="flex justify-end">
              <p>Forgot Password?</p>
            </div>

            <div className="flex justify-center items-center ">
              <button
                type="submit"
                className="border border-gray-400 bg-secondary rounded-2xl px-2 py-2 w-full"
              >
                LOGIN
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
