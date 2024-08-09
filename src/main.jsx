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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/Home' element={<Home />} />
      <Route path='/Express' element={<Express />} />
      <Route path='/Mechanics' element={<Mechanics />} />
      <Route path='/Trailers' element={<Trailers />} />
      <Route path='/Gourmet' element={<Gourmet />} />
      <Route path='/Invest' element={<Invest />} />
      <Route path='/Brokers' element={<Brokers />} />
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
