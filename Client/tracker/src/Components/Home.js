import React from "react";
import { useNavigate } from "react-router-dom";
import expenseImage from "../assets/Expense_Remove.png"; // Import the image

function App() {
  const navigate = useNavigate();
  return (
    <div className="bg-red-600 min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center p-8 rounded-lg m-0">
        {/* Image on the left */}
        <div className="w-full flex justify-center mb-8 md:mb-0 md:mr-8">
          <img
            src={expenseImage}
            alt="Expense Tracker"
            className="rounded-lg w-full md:w-3/4 lg:w-1/2"
          />
        </div>

        {/* Content on the right */}
        <div className="text-white text-center w-full md:w-3/4">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4">
            Track your expenses with ease!
          </h1>

          {/* Google Sign Up and Login Buttons */}
          <div className="mt-8 space-y-4">
            {/* Register Button */}
            <button
              onClick={() => navigate("/register")}
              className="bg-gray-400 text-white py-3 px-8 rounded-full text-xl font-semibold hover:bg-gray-500 transform animate-bounce w-64 sm:w-80 md:w-96"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
