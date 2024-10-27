import Image from "next/image";
import Navbar from "../component/page";
export default function projects ()
   {
  return (
    
    <div className="flex items-center justify-center min-h-screen bg-gray-300 p-5 ">
    <div className="flex flex-wrap gap-10">
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:scale-105">
        <img src="https://cdn.pixabay.com/photo/2023/03/06/04/26/calculator-7832583_640.png" alt="calculator"
         className="w-full h-48 object-cover"/>
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Calculator</h3>
            <p className="text-gray-600 mb-4">This is my cli based calculator.</p>
            <a href="https://github.com/asmamasood/simple-calculator.git" className="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 
            transition-colors duration-300">click me</a>   
            
        </div>
    </div>


    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 ">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNTFLy4sv9A0t1jkYMrOZZqi8k6SlAQPvLZw&s" alt="Number guessing game"
         className="w-full h-48 object-cover"/>
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Number guessing game</h3>
            <p className="text-gray-600 mb-4">My cli based Number guessing game.</p>
            <a href="https://github.com/asmamasood/cli-number-guessing.git" className="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 
            transition-colors duration-300">click me</a>
        </div>
    </div>

    <div className=" max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:scale-105">
        <img src="data:image/jpeg;base64,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" alt="ATM mechine"
         className="w-full h-48 object-cover"/>
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">ATM mechine </h3>
            <p className="text-gray-600 mb-4">I have done my ATM mechine.</p>
            <a href="https://github.com/asmamasood/ATM-mechine.git" className="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 
            transition-colors duration-300">click me</a>




                   
        </div>
    </div>
    </div>
  </div>
        
  );
}
