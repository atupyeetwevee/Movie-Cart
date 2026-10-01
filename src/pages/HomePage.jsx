import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

function HomePage() {
  return (
    <div className="flex gap-15 min-h-screen mx-auto py-10 px-10 text-white">
        <Sidebar />
        <div className="w-screen">
            <Navbar />
            <div>the page</div>
        </div>
    </div>
  )
}

export default HomePage