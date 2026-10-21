import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

function AppLayout() {
  const [search, setSearch] = useState("");
  const [profileMenu, setProfileMenu] = useState(false)
  const location = useLocation();

  const showSearch = !(
    location.pathname.startsWith("/series/") ||
    location.pathname.startsWith("/movie/") ||
    location.pathname.startsWith("/register") ||
    location.pathname.startsWith("/login")
  )

  const showSideBar = !(
    location.pathname.startsWith("/register") ||
    location.pathname.startsWith("/login")
  )

  return (
    <div className="md:flex w-screen h-screen text-amber-50">
      <Sidebar profileMenu={profileMenu} setProfileMenu={setProfileMenu} showSearch={showSideBar} />

      <div className="flex flex-col flex-1 min-w-0">
        <Navbar search={search} setSearch={setSearch} showSearch={showSearch} />

        <div className="p-4 overflow-y-auto">
          <Outlet context={{ search }} />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
