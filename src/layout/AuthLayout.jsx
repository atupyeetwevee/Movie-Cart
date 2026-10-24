import AdsPage from "../pages/AdsPage";
import { Outlet } from "react-router-dom";

function SignUpCard() {
  return (
    <div className="bg-green-300">
      <div className="flex items-center justify-center bg-secondary text-white shadow-2xl shadow-gray-600/50 border border-gray-700 rounded-xl py-4 px-4 mx-20">
        <AdsPage />
        <Outlet />
      </div>
    </div>
  );
}

export default SignUpCard;
