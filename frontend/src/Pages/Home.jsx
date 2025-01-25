import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Navbar */}
      

      {/* Spline Viewer Background */}
      <div className="absolute inset-0 z-0 opacity-70 transition-opacity duration-1000 ease-in-out">
        <Spline
          scene="https://prod.spline.design/Lw0hU5lNQETQFCI6/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 pt-24 px-6 ">
        {/* Hero Section */}
        <section className=" mt-50 flex flex-col items-center justify-center text-white p-12 text-center rounded-lg mb-12 transition-all duration-1000 ease-in-out">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8">
            Welcome to NFT Hub
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8">
            Discover, Mint, and Showcase your NFTs in just a few clicks.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/mint">
              <button className="bg-blue-600 text-lg md:text-xl px-6 py-3 rounded hover:bg-blue-700 transition">
                Mint NFT
              </button>
            </Link>
            <Link to="/view">
              <button className="bg-green-600 text-lg md:text-xl px-6 py-3 rounded hover:bg-green-700 transition">
                View NFTs
              </button>
            </Link>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-white p-6 rounded  transition-all duration-1000 ease-in-out">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Featured NFT</h2>
            <img
              src="https://images.unsplash.com/photo-1616252416685-54c6a67ad4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg2N3wwfDF8c2VhcmNofDV8fGRpZ2l0YWwlMjBhcnR8ZW58MHx8fHwxNjE2MjYwNjQ4&ixlib=rb-1.2.1&q=80&w=400"
              alt="Featured NFT"
              className="w-full h-48 object-cover rounded mb-4"
            />
            <p className="text-base md:text-lg">
              Explore unique digital assets created by top artists.
            </p>
          </div>

          <div className="text-white p-6 rounded  transition-all duration-1000 ease-in-out overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">About Our Platform</h2>
            <p className="text-base md:text-lg">
              NFT Hub is the best place to mint, explore, and showcase digital
              assets securely on the blockchain. Join our community of creators
              and collectors today!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
