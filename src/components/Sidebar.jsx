import { MdBookmark, MdLiveTv, MdLocalMovies, MdWindow } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Sidebar({ profileMenu, setProfileMenu }) {
  const navigate = useNavigate();

  const menu = [
    {
      icon: MdWindow,
      path: "/",
    },
    {
      icon: MdLocalMovies,
      path: "/movies",
    },
    {
      icon: MdLiveTv,
      path: "/series",
    },
    {
      icon: MdBookmark,
      path: "/bookmark",
    },
  ];
  return (
    <>
      <div className="relative pl-4 z-99">
        <div className="flex md:flex-col justify-between items-center h-full bg-secondary border-gray-500 border-r px-4 py-4 ">
          <div className="flex md:flex-col items-center md:gap-20 gap-10">
            <img
              src="logo.png"
              alt="image of a movie-cart logo"
              className="w-10 h-10"
            />
            <div className="flex md:flex-col gap-6">
              {menu.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "text-white" : "text-gray-400"
                    }
                  >
                    <Icon md:size={25} size={28} />
                  </NavLink>
                );
              })}
            </div>
          </div>

          <img
            onClick={() => setProfileMenu(!profileMenu)}
            src="toon1.png"
            alt="Profile"
            className={`w-9 h-9 border rounded-full object-cover cursor-pointer ${
              profileMenu ? "border-amber-400" : "border-amber-100"
            }`}
          />
        </div>
      </div>

      {profileMenu && (
        <div
          className={`h-full shrink-0 bg-secondary transition-all duration-500 ease-in-out py-4 px-4 ${
            profileMenu ? "flex-1 opacity-100" : "flex-0 opacity-0"
          }`}
        >
          <ul className="">
            <li className="hover:text-amber-300">
              <Link to="">SETTINGS</Link>
            </li>
            <li
              onClick={() => navigate("/auth/login")}
              className="hover:text-amber-300"
            >
              <Link to="/auth/login">LOG OUT</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Sidebar;
