import { Outlet, useMatch, useNavigate } from "react-router-dom";
import './shared/Styles/Variables.scss'
import Header from './components/Header'
import { useEffect, useRef, useState } from 'react';

function App() {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const headerRef = useRef(null);

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

  const navigate = useNavigate();
  const match = useMatch('/')

  useEffect(() => {
    if (match) {
      navigate('/Home');
    }
  }, [navigate, match])

  return (
    <div>
      <div ref={headerRef} style={{width: '1px', height: '1px', position: 'absolute', top: 0, left: 0}}/>
      <Header />
      <div style={{marginTop: position.top < -1 ? '0' : '235px', transition: 'ease-in-out 0.3s all'}}>
        <Outlet />
      </div>
    </div>
  )
}

export default App
