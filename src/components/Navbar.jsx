import { LuSearch } from "react-icons/lu";

function Navbar({search, setSearch}) {
  return (
    <div className="sticky top-0 py-8 p-4 bg-primary">
       <div className="relative flex items-center border border-gray-100 md:w-1/2 w-full p-2 rounded-md">
          <LuSearch className="absolute left-3 text-xl"/>
          <input
            value={search} 
            onChange = {(e) => setSearch(e.target.value)}
            placeholder="Search for movies or TV series"
            className="pl-8 w-full outline-none"
        />
       </div>
    </div>
  )
};

export default Navbar;
