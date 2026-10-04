import { LuSearch } from "react-icons/lu";

function Navbar() {
  return (
    <div className="sticky top-0 flex gap-2 items-center py-8 p-4 bg-primary">
       <div className="relative flex items-center border border-gray-100 w-1/2 p-2 rounded-md">
          <LuSearch className="absolute text-xl font-bold"/>
          <input placeholder="Search for movies or TV series"
         className="ml-8 w-full border-none"
        />
       </div>
    </div>
  )
};

export default Navbar;
