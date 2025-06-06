import { useEffect, useRef } from 'react';
import { Howl } from 'howler';

export default function Player() {
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    soundRef.current = new Howl({
      src: ['https://example.com/song.mp3'],
      html5: true,
    });

    return () => {
      soundRef.current?.unload();
    };
  }, []);

  const playSound = () => {
    soundRef.current?.play();
  };

  return (
    <footer className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <div>Now Playing: Song Title</div>
      <button onClick={playSound}>Play</button>
    </footer>
  );
}
