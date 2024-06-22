import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Overview from './components/Overview.jsx'
import MusicCatalog from './components/MusicCatalog.jsx'
import MusicPlayer from './components/MusicPlayer.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Overview/>}/>
      <Route path='catalog' element={<MusicCatalog/>}/>
      <Route path='music-player' element={<MusicPlayer/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
      {/* <Outlet/> */}
    {/* </RouterProvider> */}
  </React.StrictMode>,
)
