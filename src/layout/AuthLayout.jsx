import AdsPage from "../components/AdsPage";
import { Outlet } from "react-router-dom";

function SignUpCard() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="flex items-stretch gap-5 w-full max-w-6xl bg-secondary text-white shadow-2xl shadow-gray-600/50 border border-gray-700 rounded-xl p-4">
        <div className="w-1/2 min-w-0">
          <AdsPage />
        </div>

        <div className="w-1/2 min-w-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default SignUpCard;
