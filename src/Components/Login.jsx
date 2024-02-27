import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="login-hero-section"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-semibold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-700 border-none outline-none rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-4 my-4 w-full bg-gray-700 border-none outline-none rounded-md"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 border-none outline-none rounded-md"
        />
        <button className="p-4 my-6 w-full bg-blue-700 font-semibold rounded-md hover:bg-blue-800">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-slate-400 font-regular">
          {isSignInForm ? "New to Flickwave?" : "Already Registered?"}

          <span
            className="text-white font-semibold cursor-pointer hover:underline ml-1"
            onClick={handleSignInForm}
          >
            {isSignInForm ? "Sign up now" : "Sign in"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
