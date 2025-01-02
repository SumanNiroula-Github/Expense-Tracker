import React from "react";
import expenseImage from "../assets/Expense_Remove.png"; // Import the image

function App() {
  return (
    <div className="bg-red-600 min-h-screen flex items-center justify-center">
      <div className="flex items-center justify-center p-8 rounded-lg m-0">
        {/* Image on the left */}
        <div className="w-full flex justify-center mr-8">
          <img
            src={expenseImage}
            alt="Expense Tracker"
            className="rounded-lg  w-full md:w-3/4 lg:w-1/2" // Adjusted for bigger image
          />
        </div>

        {/* Content on the right */}
        <div className="text-white text-center w-3/4">
          <h1 className="text-8xl font-bold mb-4">
            Track your expenses with ease!
          </h1>

          {/* Google Sign Up and Login Buttons */}
          <div className="mt-8 space-y-4">
            {/* Sign Up Button */}
            <button className="bg-gray-400 text-white py-3 px-8 rounded-full text-xl font-semibold hover:bg-gray-500 transform animate-bounce w-96">
              Register
            </button>

            {/* Login Button */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
