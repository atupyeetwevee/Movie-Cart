import { MdArtTrack, MdBookmark, MdLiveTv, MdLocalMovies, MdWindow } from "react-icons/md"

function Sidebar() {
  return (
    <div className="flex flex-col justify-between bg-secondary rounded-lg px-4 py-4">
      <div className="flex flex-col gap-15">
        <MdArtTrack className="text-4xl"/>
        <div className="flex flex-col gap-3">
          <MdWindow className="text-2xl" />
          <MdLocalMovies className="text-2xl" />
          <MdLiveTv className="text-2xl" />
          <MdBookmark className="text-2xl" />
        </div>
      </div>
      <img
        src="atu2.png"
        alt="Profile"
        className="w-9 h-9 rounded-full object-cover"
      />
    </div>
  )
}

export default Sidebar