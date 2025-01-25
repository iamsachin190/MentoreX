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
          <p className="ml-3 font-bold text-larger  ">MentoreX</p>
        </div>
        <div>
        <div>
  <button className="bg-black text-white font-bold text-lg px-7 py-2 rounded-full border-4 border-gray-500 shadow-md shadow-gray-900 active:shadow-none active:translate-y-2 active:border-gray-900">
    Get Started
  </button>
</div>


        </div>
      </header>
    </nav>
  );
}
