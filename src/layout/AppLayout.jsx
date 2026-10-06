import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { useState } from "react";

function AppLayout() {
  const [search, setSearch] = useState("");

  return (
    <div className="md:flex w-screen h-screen text-white">
      <Sidebar />

      <div className="flex flex-col">
        <Navbar search={search} setSearch={setSearch} />
        
        <div className="p-4 overflow-y-auto">
          <Outlet context={{ search }}/>
        </div>
      </div>
    </div>
  )
}

export default AppLayout;