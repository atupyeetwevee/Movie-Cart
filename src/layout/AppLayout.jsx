import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import MovieDetailsPage from "../pages/MovieDetailsPage";

function AppLayout() {
  const [search, setSearch] = useState("");
  const [profileMenu, setProfileMenu] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const location = useLocation();

  const showSearch = !(
    location.pathname.startsWith("/series/") ||
    location.pathname.startsWith("/movie/")
  );

  return (
    <>
      <div className="md:flex w-screen h-screen text-amber-50">
        <Sidebar profileMenu={profileMenu} setProfileMenu={setProfileMenu} />

        <div
          className={`flex flex-col px-4 min-w-0 h-full transition-[width] duration-500 ease-in-out ${
            profileMenu ? "flex-3" : "flex-1"
          }`}
        >
          <Navbar
            search={search}
            setSearch={setSearch}
            showSearch={showSearch}
          />

          <div className="flex flex-1 gap-5 min-w-0 overflow-x-hidden p-4">
            <div
              className={`${showDetails ? "w-3/4" : "w-full"} transition-all duration-500`}
            >
              <Outlet
                context={{
                  search,
                  profileMenu,
                  showDetails,
                  setShowDetails,
                  selectedMovie,
                  setSelectedMovie,
                }}
              />
            </div>
            {showDetails && (
              <div className="w-1/4 sticky right-0 bg-cover bg-center border border-gray-600 rounded-2xl overflow-y-auto">
                <MovieDetailsPage
                  id={selectedMovie}
                  onClose={() => setShowDetails(false)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AppLayout;
