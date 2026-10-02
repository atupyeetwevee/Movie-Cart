import { MdArtTrack, MdBookmark, MdLiveTv, MdLocalMovies, MdWindow } from "react-icons/md"
import { NavLink } from "react-router-dom";

function Sidebar() {
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
   <div className="p-4">
     <div className=" flex flex-col justify-between h-full bg-secondary rounded-lg px-4 py-4 ">
      <div className="flex flex-col gap-20">
        <MdArtTrack className="text-4xl"/>
        <div className="flex flex-col gap-4">
        {menu.map((item) => {
          const Icon = item.icon;
          return(
            <NavLink to={item.path}>
              <Icon size={25} />
            </NavLink>
          )
        })}
        </div>
      </div>
      <img
        src="toon1.png"
        alt="Profile"
        className="w-9 h-9 rounded-full object-cover"
      />
    </div>
   </div>
  )
}

export default Sidebar