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
import Transport from './screens/Transport';
import Order from './screens/Order';
import ErrorBoundary from './components/ErrorBoundary';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/EaglePro/' element={<App />}>
      <Route path='/EaglePro/home' element={<Home />} />
      <Route path='/EaglePro/express' element={<Express />} />
      <Route path='/EaglePro/mechanics' element={<Mechanics />} />
      <Route path='/EaglePro/trailers' element={<Trailers />} />
      <Route path='/EaglePro/trailers/:trailerId' element={<TrailerOverview />} />
      <Route path='/EaglePro/gourmet' element={<Gourmet />} />
      <Route path='/EaglePro/gourmet/order' element={<Order />} />
      <Route path='/EaglePro/invest' element={<Invest />} />
      <Route path='/EaglePro/brokers' element={<Brokers />} />
      <Route path='/EaglePro/brokers/transport/:transportInfo' element={<Transport />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
    <HeaderProvider>
      <RouterProvider router={router} />
    </HeaderProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
