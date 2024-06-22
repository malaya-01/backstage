// src/context/SidebarContext.js
import React, { createContext, useState } from 'react';

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };





// src/context/SidebarContext.jsx
// import React, { createContext, useState } from 'react';

// const SidebarContext = createContext();

// const SidebarProvider = ({ children }) => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <SidebarContext.Provider value={{ expanded, setExpanded }}>
//       {children}
//     </SidebarContext.Provider>
//   );
// };

// export { SidebarContext, SidebarProvider };
