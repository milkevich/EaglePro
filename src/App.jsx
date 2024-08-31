import { Outlet, useNavigate, useLocation } from "react-router-dom";
import './shared/Styles/Variables.scss';
import Header from './components/Header';
import { useEffect, useRef, useState } from 'react';
import Footer from "./components/Footer";

function App() {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const updatePosition = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setPosition({ top: rect.top, left: rect.left });
      }
    };

    updatePosition();

    window.addEventListener('scroll', updatePosition);
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 850);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navigate = useNavigate();
  const match = location.pathname === '/EaglePro/' || '/EaglePro';

  useEffect(() => {
    if (match) {
      navigate('/EaglePro/home');
    }
  }, [navigate, match]);

  const hideHeaderRoutes = ['/EaglePro/brokers/transport', '/EaglePro/gourmet/order'];
  const isHeaderVisible = !hideHeaderRoutes.some(route => location.pathname.startsWith(route));

  return (
    <div>
      <div ref={headerRef} style={{ width: '1px', height: '1px', position: 'absolute', top: 0, left: 0 }} />
      {isHeaderVisible && <Header />}
      <div style={{ marginTop: position.top < -1 ? '0' : isHeaderVisible ? isSmallScreen ? '0' : '235px' : '0', transition: 'ease-in-out 0.3s all' }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
