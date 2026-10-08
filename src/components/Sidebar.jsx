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
        src="toon1.png"
        alt="Profile"
        className="md:w-9 w-7 md:h-9 h-7 rounded-full object-cover"
      />
    </div>
   </div>
  )
}

export default Sidebar