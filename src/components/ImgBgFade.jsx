import React, { useEffect, useState } from 'react'

const ImgBgFade = ({img, opacity, marginTop}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isSmallScreen2, setIsSmallScreen2] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 850);
      setIsSmallScreen2(window.innerWidth <= 1200)
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ position: 'relative', maxHeight: '50vh', overflow: 'hidden', zIndex: 9, marginTop: '-1px', minHeight: isSmallScreen ? '50vh' : 'none' }}>
    <img
      style={{
        backgroundColor: 'var(--sec-bg-color)',
        minWidth: '100vw',
        maxWidth: '700px',
        marginTop: isSmallScreen ? '0vh' : marginTop ? marginTop : isSmallScreen2 ? '-15vh' : '-40vh',
        opacity: opacity ? opacity : 1,
      }}
      src={img}
    />
    <div
      style={{
        background: 'linear-gradient(0deg, var(--main-bg-color) 0%, rgba(10, 10, 10, 0) 100%)',
        width: '100vw',
        height: '400px',
        position: 'absolute',
        bottom: 0,
        zIndex: 1000,
      }}
    />
    </div >
  )
}

export default ImgBgFade