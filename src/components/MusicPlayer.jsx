// // src/components/MusicPlayer.jsx
// import React from 'react';
// import { useMusic } from '../context/MusicContext';
// import { FaPlay, FaPause } from 'react-icons/fa';

// const MusicPlayer = () => {
//   const { currentTrack, isPlaying, playTrack, pauseTrack } = useMusic();

//   if (!currentTrack) return null;

//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-gray-100 p-4 shadow-lg">
//       <div className="flex justify-between items-center">
//         <div>
//           <p className="font-semibold">{currentTrack.title}</p>
//           <p className="text-gray-600">{currentTrack.artist}</p>
//         </div>
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
//           onClick={isPlaying ? pauseTrack : () => playTrack(currentTrack)}
//         >
//           {isPlaying ? <FaPause /> : <FaPlay />}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MusicPlayer;
















// // src/components/MusicPlayer.jsx
// import React from 'react';
// import { useMusic } from '../context/MusicContext';
// import { FaPlay, FaPause, FaForward, FaBackward, FaTimes } from 'react-icons/fa';

// const MusicPlayer = () => {
//   const { currentTrack, isPlaying, playTrack, pauseTrack, nextTrack, prevTrack, cancelTrack, progress, updateProgress } = useMusic();

//   if (!currentTrack) return null;

//   const handleProgressChange = (e) => {
//     updateProgress(Number(e.target.value));
//   };

//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-gray-100 p-4 shadow-lg">
//       <div className="flex justify-between items-center">
//         <div>
//           <p className="font-semibold">{currentTrack.title}</p>
//           <p className="text-gray-600">{currentTrack.artist}</p>
//           <div className="flex items-center space-x-2">
//             <input
//               type="range"
//               min="0"
//               max={currentTrack.duration}
//               value={progress}
//               onChange={handleProgressChange}
//               className="w-full"
//             />
//             <span>{Math.floor(progress / 60)}:{('0' + Math.floor(progress % 60)).slice(-2)}</span>
//           </div>
//         </div>
//         <div className="flex items-center space-x-2">
//           <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={prevTrack}>
//             <FaBackward />
//           </button>
//           <button
//             className="bg-blue-500 text-white px-2 py-1 rounded flex items-center"
//             onClick={isPlaying ? pauseTrack : () => playTrack(currentTrack)}
//           >
//             {isPlaying ? <FaPause /> : <FaPlay />}
//           </button>
//           <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={nextTrack}>
//             <FaForward />
//           </button>
//           <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={cancelTrack}>
//             <FaTimes />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MusicPlayer;

















// // src/components/MusicPlayer.jsx
// import React from 'react';
// import { useMusic } from '../context/MusicContext';
// import { FaPlay, FaPause, FaForward, FaBackward, FaTimes } from 'react-icons/fa';

// const MusicPlayer = () => {
//   const { currentTrack, isPlaying, playTrack, pauseTrack, nextTrack, prevTrack, cancelTrack, progress, updateProgress } = useMusic();

//   if (!currentTrack) {
//     return (
//       <div className="fixed bottom-0 left-0 right-0 bg-gray-100 p-4 shadow-lg flex justify-center items-center">
//         <p className="text-gray-600">No music playing</p>
//       </div>
//     );
//   }

//   const handleProgressChange = (e) => {
//     updateProgress(Number(e.target.value));
//   };

//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-gray-100 p-4 shadow-lg">
//       <div className="flex justify-between items-center space-x-4">
//         <div className="flex items-center space-x-4">
//           <img src={currentTrack.image} alt={currentTrack.title} className="w-16 h-16 object-cover rounded" />
//           <div>
//             <p className="font-semibold">{currentTrack.title}</p>
//             <p className="text-gray-600">{currentTrack.artist}</p>
//             <div className="flex items-center space-x-2">
//               <input
//                 type="range"
//                 min="0"
//                 max={currentTrack.duration}
//                 value={progress}
//                 onChange={handleProgressChange}
//                 className="w-full"
//               />
//               <span>{Math.floor(progress / 60)}:{('0' + Math.floor(progress % 60)).slice(-2)}</span>
//             </div>
//           </div>
//         </div>
//         <div className="flex items-center space-x-2">
//           <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={prevTrack}>
//             <FaBackward />
//           </button>
//           <button
//             className="bg-blue-500 text-white px-2 py-1 rounded flex items-center"
//             onClick={isPlaying ? pauseTrack : () => playTrack(currentTrack)}
//           >
//             {isPlaying ? <FaPause /> : <FaPlay />}
//           </button>
//           <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={nextTrack}>
//             <FaForward />
//           </button>
//           <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={cancelTrack}>
//             <FaTimes />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MusicPlayer;














// // src/components/MusicPlayer.jsx
// import React from 'react';
// import { useMusic } from '../context/MusicContext';
// import { FaPlay, FaPause, FaForward, FaBackward, FaTimes } from 'react-icons/fa';

// const MusicPlayer = () => {
//   const { currentTrack, isPlaying, playTrack, pauseTrack, nextTrack, prevTrack, cancelTrack, progress, updateProgress } = useMusic();

//   if (!currentTrack) {
//     return null; // Render nothing if there is no current track
//   }

//   const handleProgressChange = (e) => {
//     updateProgress(Number(e.target.value));
//   };

//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-gray-100 p-4 shadow-lg">
//       <div className="flex justify-between items-center space-x-4">
//         <div className="flex items-center space-x-4">
//           <img src={currentTrack.image} alt={currentTrack.title} className="w-16 h-16 object-cover rounded" />
//           <div>
//             <p className="font-semibold">{currentTrack.title}</p>
//             <p className="text-gray-600">{currentTrack.artist}</p>
//             <div className="flex items-center space-x-2">
//               <input
//                 type="range"
//                 min="0"
//                 max={currentTrack.duration}
//                 value={progress}
//                 onChange={handleProgressChange}
//                 className="w-full"
//               />
//               <span>{Math.floor(progress / 60)}:{('0' + Math.floor(progress % 60)).slice(-2)}</span>
//             </div>
//           </div>
//         </div>
//         <div className="flex items-center space-x-2">
//           <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={prevTrack}>
//             <FaBackward />
//           </button>
//           <button
//             className="bg-blue-500 text-white px-2 py-1 rounded flex items-center"
//             onClick={isPlaying ? pauseTrack : () => playTrack(currentTrack)}
//           >
//             {isPlaying ? <FaPause /> : <FaPlay />}
//           </button>
//           <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={nextTrack}>
//             <FaForward />
//           </button>
//           <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={cancelTrack}>
//             <FaTimes />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MusicPlayer;










// // src/components/MusicPlayer.jsx
// import React from 'react';
// import { useMusic } from '../context/MusicContext';
// import { FaPlay, FaPause, FaForward, FaBackward, FaTimes } from 'react-icons/fa';

// const MusicPlayer = () => {
//   const { currentTrack, isPlaying, playTrack, pauseTrack, nextTrack, prevTrack, cancelTrack, progress, updateProgress } = useMusic();

//   if (!currentTrack) {
//     return null; // Render nothing if there is no current track
//   }

//   const handleProgressChange = (e) => {
//     updateProgress(Number(e.target.value));
//   };

//   return (
//     <div className="sticky bottom-0 left-0 right-0 bg-gray-100 p-4 shadow-lg z-50">
//       <div className="max-w-screen-lg mx-auto">
//         <div className="flex justify-between items-center space-x-4">
//           <div className="flex items-center space-x-4">
//             <img src={currentTrack.image} alt={currentTrack.title} className="w-16 h-16 object-cover rounded" />
//             <div>
//               <p className="font-semibold">{currentTrack.title}</p>
//               <p className="text-gray-600">{currentTrack.artist}</p>
//               <div className="flex items-center space-x-2">
//                 <input
//                   type="range"
//                   min="0"
//                   max={currentTrack.duration}
//                   value={progress}
//                   onChange={handleProgressChange}
//                   className="w-full"
//                 />
//                 <span>{Math.floor(progress / 60)}:{('0' + Math.floor(progress % 60)).slice(-2)}</span>
//               </div>
//             </div>
//           </div>
//           <div className="flex items-center space-x-2">
//             <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={prevTrack}>
//               <FaBackward />
//             </button>
//             <button
//               className="bg-blue-500 text-white px-2 py-1 rounded flex items-center"
//               onClick={isPlaying ? pauseTrack : () => playTrack(currentTrack)}
//             >
//               {isPlaying ? <FaPause /> : <FaPlay />}
//             </button>
//             <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={nextTrack}>
//               <FaForward />
//             </button>
//             <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={cancelTrack}>
//               <FaTimes />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MusicPlayer;















// // src/components/MusicPlayer.jsx
// import React, { useState } from 'react';
// import { useMusic } from '../context/MusicContext';
// import { FaPlay, FaPause, FaForward, FaBackward, FaTimes } from 'react-icons/fa';

// const MusicPlayer = () => {
//   const { currentTrack, isPlaying, playTrack, pauseTrack, nextTrack, prevTrack, cancelTrack, progress, updateProgress } = useMusic();
//   const [isHovered, setIsHovered] = useState(false);

//   if (!currentTrack) {
//     return null; // Render nothing if there is no current track
//   }

//   const handleProgressChange = (e) => {
//     updateProgress(Number(e.target.value));
//   };

//   const toggleHover = () => {
//     setIsHovered(!isHovered);
//   };

//   return (
//     <div
//       className={`fixed bottom-4 right-4 bg-gray-100 p-4 shadow-lg z-50 transition-all duration-300 ${isHovered ? 'w-64 h-64' : 'w-16 h-16'}`}
//       onMouseEnter={toggleHover}
//       onMouseLeave={toggleHover}
//     >
//       <div className="max-w-screen-lg mx-auto h-full">
//         <div className={`flex flex-col justify-center items-center h-full space-y-4 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
//           <div className="flex items-center space-x-4">
//             <img src={currentTrack.image} alt={currentTrack.title} className="w-16 h-16 object-cover rounded" />
//             <div>
//               <p className="font-semibold">{currentTrack.title}</p>
//               <p className="text-gray-600">{currentTrack.artist}</p>
//               <div className="flex items-center space-x-2">
//                 <input
//                   type="range"
//                   min="0"
//                   max={currentTrack.duration}
//                   value={progress}
//                   onChange={handleProgressChange}
//                   className="w-full"
//                 />
//                 <span>{Math.floor(progress / 60)}:{('0' + Math.floor(progress % 60)).slice(-2)}</span>
//               </div>
//             </div>
//           </div>
//           <div className="flex items-center space-x-2">
//             <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={prevTrack}>
//               <FaBackward />
//             </button>
//             <button
//               className="bg-blue-500 text-white px-2 py-1 rounded flex items-center"
//               onClick={isPlaying ? pauseTrack : () => playTrack(currentTrack)}
//             >
//               {isPlaying ? <FaPause /> : <FaPlay />}
//             </button>
//             <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={nextTrack}>
//               <FaForward />
//             </button>
//             <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={cancelTrack}>
//               <FaTimes />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MusicPlayer;




















// src/components/MusicPlayer.jsx
import React, { useState } from 'react';
import { useMusic } from '../context/MusicContext';
import { FaPlay, FaPause, FaForward, FaBackward, FaTimes } from 'react-icons/fa';

const MusicPlayer = () => {
  const { currentTrack, isPlaying, playTrack, pauseTrack, nextTrack, prevTrack, cancelTrack, progress, updateProgress } = useMusic();
  const [expanded, setExpanded] = useState(false);

  if (!currentTrack) {
    return null; // Render nothing if there is no current track
  }

  const handleProgressChange = (e) => {
    updateProgress(Number(e.target.value));
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`fixed bottom-8 right-8 bg-gray-100 p-4 shadow-lg z-50 rounded-lg transition-all duration-300 ${expanded ? 'w-64 h-64' : 'w-16 h-16'}`} onClick={toggleExpanded}>
      {!expanded && (
        <div className="flex items-center space-x-2 cursor-pointer">
          <img src={currentTrack.image} alt={currentTrack.title} className="w-16 h-16 object-cover rounded" />
          <FaPlay className="text-3xl text-gray-800 cursor-pointer" />
        </div>
      )}
      {expanded && (
        <div className="max-w-screen-lg mx-auto">
          <div className="flex justify-between items-center space-x-4">
            <div className="flex items-center space-x-4">
              <img src={currentTrack.image} alt={currentTrack.title} className="w-16 h-16 object-cover rounded" />
              <div>
                <p className="font-semibold">{currentTrack.title}</p>
                <p className="text-gray-600">{currentTrack.artist}</p>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="0"
                    max={currentTrack.duration}
                    value={progress}
                    onChange={handleProgressChange}
                    className="w-full"
                  />
                  <span>{Math.floor(progress / 60)}:{('0' + Math.floor(progress % 60)).slice(-2)}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={prevTrack}>
                <FaBackward />
              </button>
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded flex items-center"
                onClick={isPlaying ? pauseTrack : () => playTrack(currentTrack)}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={nextTrack}>
                <FaForward />
              </button>
              <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={cancelTrack}>
                <FaTimes />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
