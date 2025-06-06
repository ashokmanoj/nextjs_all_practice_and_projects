"use client";

import { useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';

export default function Player() {
  const soundRef = useRef<Howl | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const sound = new Howl({
      src: ['/songs/Tum Hi Ho.mp3'], // replace with your song
      html5: true,
      onload: () => setDuration(Math.floor(sound.duration())),
      onend: () => setIsPlaying(false),
    });

    soundRef.current = sound;

    return () => sound.unload();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        const time = soundRef.current?.seek() as number;
        setCurrentTime(Math.floor(time));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    if (!soundRef.current) return;
    if (isPlaying) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (sec: number) =>
    `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <footer className="w-full bg-gray-900 text-white p-4 flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 ml-15">
          <img
            src="/images/albums/album1.jpg"
            alt="Album Art"
            className="w-12 h-12 rounded-md object-cover"
          />
          <div>
            <h3 className="text-sm font-semibold">Tum Hi Ho</h3>
            <p className="text-xs text-gray-400">Arijit Singh</p>
          </div>
        </div>

        <button
          onClick={togglePlay}
          className="bg-blue-600 px-4 py-1 rounded hover:bg-blue-700 text-sm"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>

        
      </div>

      <div className="mt-2 h-1 bg-gray-700 rounded w-100 ml-15 flex items-center ">
        <div
          className="h-1 bg-blue-500 rounded"
          style={{ width: `${progress}%` }}
        />
        <div className="text-xs text-gray-400 w-24 text-end ml-50 mb-7">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>
    </footer>
  );
}
