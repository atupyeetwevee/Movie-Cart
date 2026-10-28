import AdsPage from "../components/AdsPage";
import { Outlet } from "react-router-dom";
// import { motion } from "framer-motion";

function SignUpCard() {
  return (
    <div className="min-h-screen flex items-center justify-center py-4">
      <div className="flex gap-5 w-full max-w-4xl min-h-100 bg-secondary text-white shadow-2xl shadow-gray-600/50 border border-gray-700 rounded-xl p-4">
        <div className="w-1/2 max-w-full gap-3">
          <AdsPage />
        </div>

        <div className="w-1/2 max-w-full min-h-100 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default SignUpCard;
