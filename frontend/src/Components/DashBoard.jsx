import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Dashboard Header */}
      <header className="flex justify-between items-center bg-white p-4 shadow-md rounded-md mb-6">
        <h1 className="text-2xl font-bold text-gray-700">Dashboard</h1>
        <Link
          to="/profile"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Edit Profile
        </Link>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Minted NFTs */}
        <section className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Minted NFTs</h2>
          <p className="text-gray-600">No NFTs minted yet. <Link to="/mint" className="text-blue-600 hover:underline">Mint Now</Link></p>
        </section>

        {/* Collected NFTs */}
        <section className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Collected NFTs</h2>
          <p className="text-gray-600">Your collected NFTs will appear here.</p>
        </section>

        {/* Mint New NFT */}
        <section className="bg-white p-6 rounded-md shadow-md flex items-center justify-center">
          <Link
            to="/mint"
            className="bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition"
          >
            Mint New NFT
          </Link>
        </section>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Statistics */}
        <section className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Statistics</h2>
          <ul className="text-gray-600 space-y-2">
            <li>Total NFTs Minted: 0</li>
            <li>NFTs Owned: 0</li>
            <li>Total Earnings: $0</li>
          </ul>
        </section>

        {/* Notifications */}
        <section className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Notifications</h2>
          <p className="text-gray-600">No new notifications.</p>
        </section>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Favorites */}
        <section className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Favorites</h2>
          <p className="text-gray-600">Your favorite NFTs will appear here.</p>
        </section>

        {/* Platform Updates */}
        <section className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Platform Updates</h2>
          <p className="text-gray-600">Stay tuned for the latest updates and features.</p>
        </section>
      </div>

      {/* Wallet Section */}
      <section className="bg-white p-6 rounded-md shadow-md mt-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Blockchain Details</h2>
        <p className="text-gray-600">Wallet Address: Not Connected</p>
        <p className="text-gray-600">Balance: 0 ETH</p>
      </section>

      {/* Community Section */}
      <section className="bg-white p-6 rounded-md shadow-md mt-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Community</h2>
        <Link
          to="/marketplace"
          className="text-blue-600 hover:underline"
        >
          Explore Marketplace
        </Link>
      </section>
    </div>
  );
}
