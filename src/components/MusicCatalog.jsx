// // src/components/MusicCatalog.jsx
// import React from 'react';
// import { useMusic } from '../context/MusicContext';


// const tracks = [
//   { id: 1, title: 'Track 1', artist: 'Artist 1' },
//   { id: 2, title: 'Track 2', artist: 'Artist 2' },
//   { id: 3, title: 'Track 3', artist: 'Artist 3' },
// ];

// const MusicCatalog = () => {
//   const { playTrack } = useMusic();

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Music Catalog</h2>
//       <ul className="space-y-4">
//         {tracks.map(track => (
//           <li key={track.id} className="flex justify-between items-center p-4 bg-white shadow rounded">
//             <div>
//               <p className="font-semibold">{track.title}</p>
//               <p className="text-gray-600">{track.artist}</p>
//             </div>
//             <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => playTrack(track)}>Play</button>
//           </li>
//         ))}
//       </ul>

//     </div>
//   );
// };

// export default MusicCatalog;


















// src/components/MusicCatalog.jsx
import React from 'react';
import { useMusic } from '../context/MusicContext';

const MusicCatalog = () => {
  const { tracks, playTrack } = useMusic();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Music Catalog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tracks.map((track) => (
          <div key={track.id} className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-200">
            <img src={track.image} alt={track.title} className="w-full h-48 object-cover rounded mb-4" />
            <h2 className="text-xl font-semibold">{track.title}</h2>
            <p className="text-gray-600">{track.artist}</p>
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => playTrack(track)}
            >
              Play
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicCatalog;
