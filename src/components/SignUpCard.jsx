import { useState } from "react";
import AdsPage from "../pages/AdsPage";
import LogInPage from "../pages/LogInPage";
import RegisterPage from "../pages/RegisterPage";

function SignUpCard() {
  const [hasAccount, setHasAccount] = useState(true);
  return (
    <div className="bg-green-300">
      <div className="flex items-center justify-center bg-secondary text-white shadow-2xl shadow-gray-600/50 border border-gray-700 rounded-xl py-4 px-4 mx-20">
        <AdsPage />
        {hasAccount ? <LogInPage /> : <RegisterPage />}
      </div>
    </div>
  );
}

export default SignUpCard;
