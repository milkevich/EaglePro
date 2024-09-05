import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const navigate = useNavigate()

  const goBack = () => {
    navigate('/EaglePro/home')
  }

  return (
    <div style={{ height: '100vh', width: '100vw', textAlign: 'center', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      <div style={{maxWidth: '1000px', margin: 'auto'}}>
        <h1>{isSmallScreen ? '404 :/' : "Oops! We've wandered off the road!"}</h1>
        <p style={{ color: 'var(--sec-color)', marginTop: '-20px' }}>{isSmallScreen ? "Let's get you back!" : "Seems like the path you're seeking doesn't exist."}</p>
        <button style={{ padding: '10px 40px', backgroundColor: 'var(--btn-bg-color)', borderRadius: '10px', border: 'none', outline: 'none', color: 'var(--main-color)', cursor: 'pointer' }} onClick={goBack}>Go Back</button>
      </div>
    </div>
  )
}

export default NotFound
