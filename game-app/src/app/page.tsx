'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const Home = () => {
  const router = useRouter();

  const goToGames = () => {
    router.push('/games');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">Welcome to GameZone</h1>
      <p className="text-xl mb-8 max-w-md text-center">
        Dive into a world of excitement! Discover a collection of awesome games and let the fun begin.
      </p>
      <button
        className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-2xl shadow-md hover:bg-indigo-100 transition-all duration-300"
      >
        <Link href="/games" >
        Go to Games
        </Link>
      </button>
    </div>
  );
};

export default Home;
