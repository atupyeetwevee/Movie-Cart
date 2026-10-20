
function LogInPage() {
  return (
    <div className="flex items-center justify-center text-white py-4 px-4">
       <div className="w-full max-w-2xl">
         <form>
                <fieldset className="flex flex-col space-y-4 py-4 px-4 border border-gray-400 rounded-2xl">
                    <legend className="text-left text-4xl uppercase px-8">Login Form</legend>
                                
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" className="py-2 px-2 rounded-2xl border border-gray-400" />

                    <label for="password">Password:</label>
                    <input type="password" id="pass" name="password" className="py-2 px-2 rounded-2xl border border-gray-400" /> 

                    <button className="border border-gray-400 bg-secondary rounded-2xl px-2 py-2 w-1/2">LOGIN</button>
                </fieldset>
            </form>
       </div>
    </div>
  )
}

export default LogInPage