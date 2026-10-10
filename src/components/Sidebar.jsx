import { useState } from "react";
import { MdArtTrack, MdBookmark, MdLiveTv, MdLocalMovies, MdWindow } from "react-icons/md"
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  const [profileMenu, setProfileMenu] = useState(false)
  const menu = [
    {
      icon: MdWindow,
      path: "/"
    },
    {
      icon: MdLocalMovies,
      path: "/movies"
    },
    {
      icon: MdLiveTv,
      path: "/series"
    },
    {
      icon: MdBookmark,
      path: "/bookmark"
    }
  ]
  return (
    <>
      <div className="relative p-4 z-99">
        <div className="flex md:flex-col justify-between items-center h-full bg-secondary rounded-lg px-4 py-4 ">
          <div className="flex md:flex-col items-center md:gap-20 gap-10">
            <MdArtTrack className="text-4xl text-red-400"/>
            <div className="flex md:flex-col gap-6">
            {menu.map((item) => {
              const Icon = item.icon;
              return(
                <NavLink key={item.path} to={item.path} className={({isActive}) => isActive? "text-white" : "text-gray-400"}>
                  <Icon md:size={25} size={28} />
                </NavLink>
              )
            })}
            </div>
          </div>
          
          <img
            onClick={() => setProfileMenu(!profileMenu)}
            src="toon1.png"
            alt="Profile"
            className="md:w-9 w-7 md:h-9 h-7 border border-amber-100 rounded-full object-cover"
          />
        </div>

          {/* {profileMenu && (
          <div
            className="fixed inset-0 bg-white backdrop-blur-sm"
          />
        )} */}
      </div>

      {profileMenu && (
        <div className="absolute left-21 bottom-4 py-2 text-white h-20 w-25 text-center bg-secondary">
          <ul className="">
            <li className="hover:text-amber-300">
              <Link to="">SETTINGS</Link>
            </li>
            <li className="hover:text-amber-300">
              <Link to="">LOG OUT</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Sidebar