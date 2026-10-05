import { useUsers } from "../hooks/useUsers"

function HomePage() {
 const {data:users} = useUsers();

 console.log("HAPAAA", users)

  return (
    <>
        <div className="">
            <h1>Trending</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 pt-4">
              <div className="border border-white/20 rounded-lg shadow-lg shadow-gray-800"><img src="toon1.png" /></div>  
              <div className="border border-white/20 rounded-lg shadow-lg shadow-gray-800"><img src="toon1.png" /></div>
              <div className="border border-white/20 rounded-lg shadow-lg shadow-gray-800"><img src="toon1.png" /></div>
            </div>
          </div>

          <div className="pt-8">
            <h1>Recommended for you</h1>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-5 pt-4">
              <div className="border border-white/20 rounded-lg shadow-lg shadow-gray-800"><img src="toon1.png" /></div>  
              <div className="border border-white/20 rounded-lg shadow-lg shadow-gray-800"><img src="toon1.png" /></div>
              <div className="border border-white/20 rounded-lg shadow-lg shadow-gray-800"><img src="toon1.png" /></div>
              <div className="border border-white/20 rounded-lg shadow-lg shadow-gray-800"><img src="toon1.png" /></div>  
              <div className="border border-white/20 rounded-lg shadow-lg shadow-gray-800"><img src="toon1.png" /></div>
              <div className="border border-white/20 rounded-lg shadow-lg shadow-gray-800"><img src="toon1.png" /></div>  
              <div className="border border-white/20 rounded-lg shadow-lg shadow-gray-800"><img src="toon1.png" /></div>
              <div className="border border-white/20 rounded-lg shadow-lg shadow-gray-800"><img src="toon1.png" /></div>
            </div>
        </div>
    </>
  )
}

export default HomePage
