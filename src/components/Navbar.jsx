import { LuSearch } from "react-icons/lu";

function Navbar() {
  return (
    <div className="flex gap-2 items-center px-2">
        <LuSearch className="text-xl font-bold"/>
        <input placeholder="Search for movies or TV series"
          className="w-full"
        />
    </div>
  )
};

export default Navbar;
