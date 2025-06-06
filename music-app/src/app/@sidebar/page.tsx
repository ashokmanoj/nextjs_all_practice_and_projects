import { Button } from '@/components/ui/button';

export default function Sidebar() {
  const recentSongs = [
    { title: 'Tum Hi Ho', artist: 'Arijit Singh' },
    { title: 'Blinding Lights', artist: 'The Weeknd' },
    { title: 'Shape of You', artist: 'Ed Sheeran' },
  ];

  return (
    <aside className="p-4 bg-gray-900 text-white h-full flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-4">JioSaavn Clone</h2>
        <nav>
          <ul className="space-y-2 mb-6">
            <li><Button variant="ghost" className="w-full justify-start">Home</Button></li>
            <li><Button variant="ghost" className="w-full justify-start">Browse</Button></li>
            <li><Button variant="ghost" className="w-full justify-start">Library</Button></li>
            <li><Button variant="ghost" className="w-full justify-start">Search</Button></li>
          </ul>
        </nav>

        <div>
          <h3 className="text-md font-semibold mb-2">Recently Played</h3>
          <ul className="space-y-1 text-sm">
            {recentSongs.map((song, index) => (
              <li key={index} className="text-gray-300 hover:text-white">
                🎵 {song.title} — <span className="italic">{song.artist}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
