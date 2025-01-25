import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
       <header className="flex justify-between items-center w-full p-4 bg-black bg-opacity-75 text-white">
        <div className="text-2xl flex items-center">
          <img
            src="https://media.istockphoto.com/id/1492393345/vector/artificial-intelligence-robot-logo.jpg?s=612x612&w=0&k=20&c=cBDzwMd0buidNn_8mVkL0l8MT7p14iNrSrl6fnO-qfc="
            alt="Logo"
            className="h-12 w-12 object-contain rounded-full"
          />
          <p className="ml-3">Ai Bot</p>
        </div>
        <div>
        <Link to="/login">
          <button className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold shadow-xl transform hover:bg-gray-800 hover:scale-105 transition-transform duration-300 mr-3">
            Login
          </button>
          </Link>
          <Link to="/signup">
          <button className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold shadow-xl transform hover:bg-gray-800 hover:scale-105 transition-transform duration-300">
            Sign Up
          </button>
          </Link>
        </div>
      </header>
    </nav>
  );
}
