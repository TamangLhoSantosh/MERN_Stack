import React from "react";
import SignupForm from "./SignupForm";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen mt-20">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
