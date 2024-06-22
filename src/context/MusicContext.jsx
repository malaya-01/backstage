// // src/context/MusicContext.js
// import React, { createContext, useState, useContext } from 'react';

// const MusicContext = createContext();

// export const MusicProvider = ({ children }) => {
//   const [currentTrack, setCurrentTrack] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const playTrack = (track) => {
//     setCurrentTrack(track);
//     setIsPlaying(true);
//   };

//   const pauseTrack = () => {
//     setIsPlaying(false);
//   };

//   return (
//     <MusicContext.Provider value={{ currentTrack, isPlaying, playTrack, pauseTrack }}>
//       {children}
//     </MusicContext.Provider>
//   );
// };

// export const useMusic = () => useContext(MusicContext);


// // src/context/MusicContext.js
// import React, { createContext, useState, useContext } from 'react';

// const MusicContext = createContext();

// const tracks = [
//   { id: 1, title: 'Track 1', artist: 'Artist 1', duration: 240 },
//   { id: 2, title: 'Track 2', artist: 'Artist 2', duration: 300 },
//   { id: 3, title: 'Track 3', artist: 'Artist 3', duration: 180 },
// ];

// export const MusicProvider = ({ children }) => {
//   const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [progress, setProgress] = useState(0);

//   const playTrack = (track) => {
//     const index = tracks.findIndex(t => t.id === track.id);
//     setCurrentTrackIndex(index);
//     setIsPlaying(true);
//     setProgress(0);
//   };

//   const pauseTrack = () => {
//     setIsPlaying(false);
//   };

//   const nextTrack = () => {
//     if (currentTrackIndex !== null && currentTrackIndex < tracks.length - 1) {
//       setCurrentTrackIndex(currentTrackIndex + 1);
//       setProgress(0);
//       setIsPlaying(true);
//     }
//   };

//   const prevTrack = () => {
//     if (currentTrackIndex !== null && currentTrackIndex > 0) {
//       setCurrentTrackIndex(currentTrackIndex - 1);
//       setProgress(0);
//       setIsPlaying(true);
//     }
//   };

//   const cancelTrack = () => {
//     setCurrentTrackIndex(null);
//     setIsPlaying(false);
//     setProgress(0);
//   };

//   const updateProgress = (newProgress) => {
//     if (currentTrackIndex !== null && newProgress >= 0 && newProgress <= tracks[currentTrackIndex].duration) {
//       setProgress(newProgress);
//     }
//   };

//   return (
//     <MusicContext.Provider value={{
//       currentTrack: currentTrackIndex !== null ? tracks[currentTrackIndex] : null,
//       isPlaying,
//       progress,
//       playTrack,
//       pauseTrack,
//       nextTrack,
//       prevTrack,
//       cancelTrack,
//       updateProgress
//     }}>
//       {children}
//     </MusicContext.Provider>
//   );
// };

// export const useMusic = () => useContext(MusicContext);





















// src/context/MusicContext.js
// import React, { createContext, useState, useContext, useRef, useEffect } from 'react';

// const MusicContext = createContext();

// const tracks = [
//   {
//     id: 1,
//     title: 'Track 1',
//     artist: 'Artist 1',
//     duration: 240, // duration in seconds
//     image: 'https://via.placeholder.com/150/0000FF/808080?text=Track+1',
//     url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
//   },
//   {
//     id: 2,
//     title: 'Track 2',
//     artist: 'Artist 2',
//     duration: 300,
//     image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Track+2',
//     url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
//   },
//   {
//     id: 3,
//     title: 'Track 3',
//     artist: 'Artist 3',
//     duration: 180,
//     image: 'https://via.placeholder.com/150/00FF00/000000?text=Track+3',
//     url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
//   },
//   {
//     id: 4,
//     title: 'Track 4',
//     artist: 'Artist 4',
//     duration: 210,
//     image: 'https://via.placeholder.com/150/FFFF00/000000?text=Track+4',
//     url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
//   },
// ];

// export const MusicProvider = ({ children }) => {
//   const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const audioRef = useRef(new Audio());

//   useEffect(() => {
//     const audio = audioRef.current;

//     const handleTimeUpdate = () => {
//       setProgress(audio.currentTime);
//     };

//     audio.addEventListener('timeupdate', handleTimeUpdate);
    
//     return () => {
//       audio.removeEventListener('timeupdate', handleTimeUpdate);
//     };
//   }, []);

//   useEffect(() => {
//     const audio = audioRef.current;
    
//     if (currentTrackIndex !== null) {
//       audio.src = tracks[currentTrackIndex].url;
//       if (isPlaying) {
//         audio.play();
//       }
//     } else {
//       audio.pause();
//       audio.src = '';
//     }
//   }, [currentTrackIndex]);

//   useEffect(() => {
//     const audio = audioRef.current;
    
//     if (isPlaying) {
//       audio.play();
//     } else {
//       audio.pause();
//     }
//   }, [isPlaying]);

//   const playTrack = (track) => {
//     const index = tracks.findIndex(t => t.id === track.id);
//     setCurrentTrackIndex(index);
//     setIsPlaying(true);
//     setProgress(0);
//   };

//   const pauseTrack = () => {
//     setIsPlaying(false);
//   };

//   const nextTrack = () => {
//     if (currentTrackIndex !== null && currentTrackIndex < tracks.length - 1) {
//       setCurrentTrackIndex(currentTrackIndex + 1);
//       setProgress(0);
//       setIsPlaying(true);
//     }
//   };

//   const prevTrack = () => {
//     if (currentTrackIndex !== null && currentTrackIndex > 0) {
//       setCurrentTrackIndex(currentTrackIndex - 1);
//       setProgress(0);
//       setIsPlaying(true);
//     }
//   };

//   const cancelTrack = () => {
//     setCurrentTrackIndex(null);
//     setIsPlaying(false);
//     setProgress(0);
//   };

//   const updateProgress = (newProgress) => {
//     if (currentTrackIndex !== null && newProgress >= 0 && newProgress <= tracks[currentTrackIndex].duration) {
//       const audio = audioRef.current;
//       audio.currentTime = newProgress;
//       setProgress(newProgress);
//     }
//   };

//   return (
//     <MusicContext.Provider value={{
//       currentTrack: currentTrackIndex !== null ? tracks[currentTrackIndex] : null,
//       isPlaying,
//       progress,
//       playTrack,
//       pauseTrack,
//       nextTrack,
//       prevTrack,
//       cancelTrack,
//       updateProgress
//     }}>
//       {children}
//     </MusicContext.Provider>
//   );
// };

// export const useMusic = () => useContext(MusicContext);

























// src/context/MusicContext.js
import React, { createContext, useState, useContext, useRef, useEffect } from 'react';

const MusicContext = createContext();

const tracks = [
  {
    id: 1,
    title: 'Track 1',
    artist: 'Artist 1',
    duration: 240,
    image: 'https://via.placeholder.com/150/0000FF/808080?text=Track+1',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },
  {
    id: 2,
    title: 'Track 2',
    artist: 'Artist 2',
    duration: 300,
    image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Track+2',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  {
    id: 3,
    title: 'Track 3',
    artist: 'Artist 3',
    duration: 180,
    image: 'https://via.placeholder.com/150/00FF00/000000?text=Track+3',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  },
  {
    id: 4,
    title: 'Track 4',
    artist: 'Artist 4',
    duration: 210,
    image: 'https://via.placeholder.com/150/FFFF00/000000?text=Track+4',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
  },
];

export const MusicProvider = ({ children }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      setProgress(audio.currentTime);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    if (currentTrackIndex !== null) {
      audio.src = tracks[currentTrackIndex].url;
      if (isPlaying) {
        audio.play();
      }
    } else {
      audio.pause();
      audio.src = '';
    }
  }, [currentTrackIndex]);

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const playTrack = (track) => {
    const index = tracks.findIndex((t) => t.id === track.id);
    setCurrentTrackIndex(index);
    setIsPlaying(true);
    setProgress(0);
  };

  const pauseTrack = () => {
    setIsPlaying(false);
  };

  const nextTrack = () => {
    if (currentTrackIndex !== null && currentTrackIndex < tracks.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
      setProgress(0);
      setIsPlaying(true);
    }
  };

  const prevTrack = () => {
    if (currentTrackIndex !== null && currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
      setProgress(0);
      setIsPlaying(true);
    }
  };

  const cancelTrack = () => {
    setCurrentTrackIndex(null);
    setIsPlaying(false);
    setProgress(0);
  };

  const updateProgress = (newProgress) => {
    if (currentTrackIndex !== null && newProgress >= 0 && newProgress <= tracks[currentTrackIndex].duration) {
      const audio = audioRef.current;
      audio.currentTime = newProgress;
      setProgress(newProgress);
    }
  };

  return (
    <MusicContext.Provider
      value={{
        currentTrack: currentTrackIndex !== null ? tracks[currentTrackIndex] : null,
        isPlaying,
        progress,
        playTrack,
        pauseTrack,
        nextTrack,
        prevTrack,
        cancelTrack,
        updateProgress,
        tracks // Include tracks in the context value
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => useContext(MusicContext);
