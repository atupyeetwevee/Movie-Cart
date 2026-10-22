import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

function AppLayout() {
  const [search, setSearch] = useState("");
  const [profileMenu, setProfileMenu] = useState(false);
  const location = useLocation();

  const hideLayoutRoutes = ["/login", "/register", "/series/", "/movie/"];

  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div className="md:flex w-screen h-screen text-amber-50">
      {!hideLayout && (
        <Sidebar profileMenu={profileMenu} setProfileMenu={setProfileMenu} />
      )}

      <div className="flex flex-col flex-1 min-w-0">
        {!hideLayout && <Navbar search={search} setSearch={setSearch} />}

        <div className="p-4 overflow-y-auto">
          <Outlet context={{ search }} />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
