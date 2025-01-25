

export default function Profile() {
  const user = {
    name: "John Doe",
    walletAddress: "0x1234...abcd",
    profileImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg2N3wwfHx8fGF2YXRhcnxlbnwwfHx8fHwxNjE2MjYxODAw&ixlib=rb-1.2.1&q=80&w=400",
    ownedNFTs: [
      {
        id: 1,
        name: "Digital Art #1",
        image:
          "https://images.unsplash.com/photo-1616252416685-54c6a67ad4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg2N3wwfDF8c2VhcmNofDV8fGRpZ2l0YWwlMjBhcnR8ZW58MHx8fHwxNjE2MjYwNjQ4&ixlib=rb-1.2.1&q=80&w=400",
      },
      {
        id: 2,
        name: "AI Bot Token",
        image:
          "https://media.istockphoto.com/id/1492393345/vector/artificial-intelligence-robot-logo.jpg",
      },
      
    ],
  };

  return (
    <div className="p-6">
      <div className="bg-gray-800 text-white p-6 rounded shadow-lg max-w-md mx-auto">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={user.profileImage}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-sm text-gray-400">
              Wallet: {user.walletAddress}
            </p>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-4">Owned NFTs</h2>
        <div className="grid grid-cols-1 gap-4">
          {user.ownedNFTs.map((nft) => (
            <div
              key={nft.id}
              className="flex items-center bg-gray-700 p-4 rounded shadow"
            >
              <img
                src={nft.image}
                alt={nft.name}
                className="w-16 h-16 rounded object-cover mr-4"
              />
              <div>
                <h3 className="font-bold">{nft.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
    
  );
}
