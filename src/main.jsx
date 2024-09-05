import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import App from './App';
import Mechanics from './screens/Mechanics';
import Trailers from './screens/Trailers';
import Invest from './screens/Invest';
import Brokers from './screens/Brokers';
import Express from './screens/Express';
import Home from './screens/Home';
import { HeaderProvider } from './contexts/HeaderContext';
import TrailerOverview from './screens/TrailerOverview';
import Transport from './screens/Transport';
import Order from './screens/Order';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './screens/NotFound';
import Protected from './Protected';
import UserContextProvider from './contexts/UserContext';
import AdminAuth from './screens/AdminAuth';
import AdminDashboard from './screens/AdminDashboard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/EaglePro/' element={<App />}>
      <Route path='/EaglePro/express' element={<Home />} />
      <Route path='/EaglePro/careers' element={<Express />} />
      <Route path='/EaglePro/mechanics' element={<Mechanics />} />
      <Route path='/EaglePro/trailers' element={<Trailers />} />
      <Route path='/EaglePro/trailers/:trailerInfo' element={<TrailerOverview />} />
      <Route path='/EaglePro/gourmet' element={<Order />} />
      <Route path='/EaglePro/invest' element={<Invest />} />
      <Route path='/EaglePro/brokers' element={<Brokers />} />
      <Route path='/EaglePro/brokers/transport/:transportInfo' element={<Transport />} />
      <Route path="/EaglePro/*" element={<NotFound />} errorElement={<NotFound />} />
      <Route path="/EaglePro/admin-logIn" element={<AdminAuth />} />
      <Route element={<Protected />}>
        <Route path='/EaglePro/admin' element={<AdminDashboard />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <ErrorBoundary>
        <HeaderProvider>
          <RouterProvider router={router} />
        </HeaderProvider>
      </ErrorBoundary>
    </UserContextProvider>
  </React.StrictMode>,
);
