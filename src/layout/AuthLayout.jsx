import AdsPage from "../components/AdsPage";
import { Outlet } from "react-router-dom";
// import { motion } from "framer-motion";

function SignUpCard() {
  return (
    <div className="min-h-screen flex items-center justify-center py-4">
      <div className="md:flex gap-5 w-full max-w-4xl min-h-100 bg-secondary text-white shadow-2xl shadow-gray-600/50 border border-gray-700 rounded-xl p-4">
        <div className="hidden md:block md:w-1/2 md:max-w-full gap-3">
          <AdsPage />
        </div>

        <div className="md:w-1/2 md:max-w-full h-full min-h-100 space-y-10 ">
          <h1 className="text-3xl py-4">Welcome to Movie Cart</h1>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default SignUpCard;
