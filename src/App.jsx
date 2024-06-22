


// // src/App.js
// import React, { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import Overview from './components/Overview';
// import Header from './components/Header';
// import { Outlet } from 'react-router-dom';
// // import { MusicProvider } from './context/MusicContext';
// import MusicPlayer from './components/MusicPlayer';
// import { MusicProvider, useMusic } from './context/MusicContext';

// function App() {
//   const [expanded, setExpanded] = useState(false);
//   const { currentTrack } = useMusic();

//   return (
//     <MusicProvider>
//       <div className="flex h-screen bg-white">
//         <Sidebar expanded={expanded} setExpanded={setExpanded} />
//         <div className={`flex-grow flex flex-col transition-all duration-300 ${expanded ? 'ml-56' : 'ml-16'}`}>
//           <Header />
//           <main className="flex-grow p-4 overflow-auto">
//             {/* <Overview /> */}
//             <Outlet />
//           </main>
//           {currentTrack && <MusicPlayer />}
//         </div>
//       </div>

//     </MusicProvider>

//   );
// }

// export default App;






// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MusicPlayer from './components/MusicPlayer';
import { Outlet } from 'react-router-dom';
import { MusicProvider } from './context/MusicContext'; // Ensure you import MusicProvider

function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <MusicProvider>
      <div className="flex h-screen bg-white">
        <Sidebar expanded={expanded} setExpanded={setExpanded} />
        <div className={`flex-grow flex flex-col transition-all duration-300 ${expanded ? 'ml-56' : 'ml-16'}`}>
          <Header />
          <main className="flex-grow p-4 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
      <MusicPlayer /> {/* Always rendered within MusicProvider to access MusicContext */}
    </MusicProvider>
  );
}

export default App;
