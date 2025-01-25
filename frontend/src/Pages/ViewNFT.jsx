import { useState, useEffect} from "react";


// Dummy data (replace with API/blockchain call results)
const sampleNFTs = [
  {
    id: 1,
    name: "Digital Art #1",
    description: "A unique piece of digital art.",
    image:
      "https://images.unsplash.com/photo-1616252416685-54c6a67ad4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg2N3wwfDF8c2VhcmNofDV8fGRpZ2l0YWwlMjBhcnR8ZW58MHx8fHwxNjE2MjYwNjQ4&ixlib=rb-1.2.1&q=80&w=400",
    owner: "0x123...456",
  },
  {
    id: 2,
    name: "AI Bot Token",
    description: "An AI-powered collectible.",
    image:
      "https://media.istockphoto.com/id/1492393345/vector/artificial-intelligence-robot-logo.jpg",
    owner: "0x789...012",
  },
  {
    id: 3,
    name: "AI bot elements",
    description: "An AI-powered collectible.",
    image:
      "https://media.istockphoto.com/id/1492393345/vector/artificial-intelligence-robot-logo.jpg",
    owner: "0x789...0123",
  },
  {
    id: 2,
    name: "AI Bot Token",
    description: "An AI-powered collectible.",
    image:
      "https://media.istockphoto.com/id/1492393345/vector/artificial-intelligence-robot-logo.jpg",
    owner: "0x789...012",
  },
  {
    id: 2,
    name: "AI Bot Token",
    description: "An AI-powered collectible.",
    image:
      "https://media.istockphoto.com/id/1492393345/vector/artificial-intelligence-robot-logo.jpg",
    owner: "0x789...012",
  },
  {
    id: 2,
    name: "AI Bot Token",
    description: "An AI-powered collectible.",
    image:
      "https://media.istockphoto.com/id/1492393345/vector/artificial-intelligence-robot-logo.jpg",
    owner: "0x789...012",
  },
];

export default function ViewNFT() {
  const [nfts, setNFTs] = useState([]);

  useEffect(() => {
    // Simulate fetching NFT data (replace with blockchain call/API)
    setNFTs(sampleNFTs);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">My NFT Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {nfts.map((nft) => (
          <div
            key={nft.id}
            className="bg-gray-800 text-white p-4 rounded shadow hover:shadow-lg transition-shadow"
          >
            <img
              src={nft.image}
              alt={nft.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-bold">{nft.name}</h2>
            <p className="text-sm mt-2 text-gray-400">{nft.description}</p>
            <p className="mt-4 text-xs">Owner: {nft.owner}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
