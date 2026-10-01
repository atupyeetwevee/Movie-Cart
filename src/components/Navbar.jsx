import { LuSearch } from "react-icons/lu";

function Navbar() {
  return (
    <div className="flex items-center border border-amber-100">
        <LuSearch />
        <input placeholder="Search for movies or TV series"/>
    </div>
  )
};

export default Navbar;
