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
    <div className="flex items-center justify-center text-white w-full h-full">
      <form onSubmit={handleSubmit(onSubmitForm)} className="min-w-full">
        <fieldset className="flex flex-col space-y-4 py-4 px-4 border border-gray-400 rounded-2xl">
          <legend className="text-left text-4xl uppercase px-8">
            Login Form
          </legend>

          <label htmlFor="email">Email:</label>
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
            className="py-2 px-2 rounded-2xl border border-gray-400"
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email?.message}</p>
          )}

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="pass"
            name="password"
            {...register("password", { required: "Password is required" })}
            className="py-2 px-2 rounded-2xl border border-gray-400"
          />
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password?.message}</p>
          )}

          <button
            type="submit"
            className="border border-gray-400 bg-secondary rounded-2xl px-2 py-2 w-1/2"
          >
            LOGIN
          </button>
          <p>
            Don't have an account? <Link to="/auth/register">Register</Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
}

export default LogInPage;
