import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import App from './App';
import Mechanics from './screens/Mechanics';
import Trailers from './screens/Trailers';
import Gourmet from './screens/Gourmet';
import Invest from './screens/Invest';
import Brokers from './screens/Brokers';
import Express from './screens/Express';
import Home from './screens/Home';
import { HeaderProvider } from './contexts/HeaderContext';
import TrailerOverview from './screens/TrailerOverview';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/home' element={<Home />} />
      <Route path='/express' element={<Express />} />
      <Route path='/mechanics' element={<Mechanics />} />
      <Route path='/trailers' element={<Trailers />} />
      <Route path='/gourmet' element={<Gourmet />} />
      <Route path='/invest' element={<Invest />} />
      <Route path='/brokers' element={<Brokers />} />
      <Route path='/trailers/:trailerId' element={<TrailerOverview />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeaderProvider>
      <RouterProvider router={router} />
    </HeaderProvider>
  </React.StrictMode>,
);
