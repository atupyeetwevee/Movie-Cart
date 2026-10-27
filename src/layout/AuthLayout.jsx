import AdsPage from "../components/AdsPage";
import { Outlet } from "react-router-dom";
// import { motion } from "framer-motion";

function SignUpCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="flex gap-5 w-full max-w-6xl h-auto min-h-screen bg-secondary text-white shadow-2xl shadow-gray-600/50 border border-gray-700 rounded-xl p-4">
        <div className="md:flex w-1/2 min-w-0 gap-3 hidden bg-pink-500">
          <AdsPage />
        </div>

        <div className="w-1/2 max-w-full bg-amber-700">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default SignUpCard;
