import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

function AppLayout() {
  return (
    <div className="flex w-screen h-screen text-white">
      <Sidebar />

      <div className="flex flex-col">
        <Navbar />
        
        <div className="p-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AppLayout;