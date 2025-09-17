import React from "react";
import { useNavigate } from "react-router-dom";

const LoginRequired = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/"); 
  };

  return (
    <div className="flex items-center justify-center  bg-white px-2">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md text-center w-6/10">
        <h2 className="text-3xl font-bold text-red-500 mb-4">
          Please Login First
        </h2>
        <p className="text-gray-600 mb-6">
          
        </p>
        <button
          onClick={handleLoginRedirect}
          className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default LoginRequired;
