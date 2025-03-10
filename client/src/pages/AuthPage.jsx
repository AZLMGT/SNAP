import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex justify-center items-center p-4 bg-gradient-to-br from-red-500 to-pink-500">
      <div className="w-full max-w-md">
        {/* bg  */}
        <h2 className="text-center text-3xl font-extrabold text-white mb-8">
          {isLogin ? "Sign in to Swipe" : "Create a Swipe account"}
        </h2>
        <div className="bg-white shadow-xl rounded-lg p-8">
          {isLogin ? <LoginForm /> : <SignUpForm />}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              {isLogin ? "Nedd to Swipe" : "Already have an account"}
            </p>
            <button
              onClick={() => setIsLogin((prevLogin) => !prevLogin)}
              className="mt-2 text-red-600 hover:text-red-800 font-medium transition-colors duration-300"
            >
              {isLogin ? "Create an account" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
