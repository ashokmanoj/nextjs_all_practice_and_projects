export default function Main() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Browse Albums</h1>
      <div className="grid grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <img
              src={`/images/albums/album${i + 1}.png`}
              alt={`Album ${i + 1}`}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <div className="text-center font-medium">Album {i + 1}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
