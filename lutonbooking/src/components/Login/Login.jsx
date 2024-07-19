import React from "react";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
