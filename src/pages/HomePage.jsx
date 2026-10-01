import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

function HomePage() {
  return (
    <div className="flex gap-15 min-h-screen mx-auto py-10 px-10 text-white">
        <Sidebar />
        <div className="w-screen space-y-8">
          <Navbar />

          <div className="space-y-4">
            <h1>Trending</h1>
            <div className="grid grid-cols-3 gap-5">
              <div className="border border-white/20 rounded-lg shadow-lg shadow-gray-800"><img src="toon1.png" /></div>  
              <div className="border border-white/20 rounded-lg shadow-lg shadow-gray-800"><img src="toon1.png" /></div>
              <div className="border border-white/20 rounded-lg shadow-lg shadow-gray-800"><img src="toon1.png" /></div>
            </div>
          </div>

          <div className="space-y-4">
            <h1>Recommended for you</h1>
            <div className="grid grid-cols-4 gap-5">
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

        </div>
    </div>
  )
}

export default HomePage