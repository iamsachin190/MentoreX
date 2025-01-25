import { useState } from "react";


export default function MintNFT() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleMint = async () => {
    // Mock minting logic (replace this with actual blockchain interaction)
    console.log("Minting NFT with:", { name, description, file });
    alert("NFT Minted Successfully!");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Mint Your NFT</h1>
      <div className="max-w-lg mx-auto bg-gray-800 text-white p-6 rounded shadow-lg">
        <label className="block mb-4">
          <span className="text-sm font-medium">Name</span>
          <input
            type="text"
            className="w-full mt-1 p-2 bg-gray-700 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="block mb-4">
          <span className="text-sm font-medium">Description</span>
          <textarea
            className="w-full mt-1 p-2 bg-gray-700 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>
        <label className="block mb-4">
          <span className="text-sm font-medium">Upload File</span>
          <input
            type="file"
            className="mt-1"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>
        <button
          onClick={handleMint}
          className="w-full bg-blue-600 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Mint NFT
        </button>
      </div>
    </div>
  );
}
