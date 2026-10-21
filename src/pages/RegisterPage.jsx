import { useForm } from "react-hook-form";

function RegisterPage() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

  const onSubmitForm = (formData) => {
    console.log(formData);
    reset();
  };

  return (
    <div className="flex items-center justify-center text-white py-4 px-4">
       <div className="w-full max-w-2xl">
         <form onSubmit={handleSubmit(onSubmitForm)}>
                <fieldset className="flex flex-col space-y-4 py-4 px-4 border border-gray-400 rounded-2xl">
                    <legend className="text-left text-4xl uppercase px-8">Registration Form</legend>
                    
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your Full Name"
                        {...register("name", { required: "Name is required" })}
                        className="py-2 px-2 rounded-2xl border border-gray-400" />
                        {errors.name && (
                            <p className="text-xs text-red-500">{errors.name?.message}</p>
                        )}
                    
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="example@gmail.com"
                        {...register("email", { required: "Enter an email address", pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email address",}
                        ,})}
                        className="py-2 px-2 rounded-2xl border border-gray-400" />
                        {errors.email && (
                            <p className="text-xs text-red-500">{errors.email?.message}</p>
                        )}

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="pass" name="password"
                        {...register("password", { required: "Password is required" })}
                        className="py-2 px-2 rounded-2xl border border-gray-400" /> 
                        {errors.password && (
                            <p className="text-xs text-red-500">{errors.password?.message}</p>
                        )}

                    <button type="submit" className="border border-gray-400 bg-secondary rounded-2xl px-2 py-2 w-1/2">REGISTER</button>
                </fieldset>
            </form>
       </div>
    </div>
  )
}

export default RegisterPage