import React, { useContext, useEffect, useState } from 'react'
import ImgBgFade from '../components/ImgBgFade'
import trucks from '../assets/bilaldesigner-attachments/trucks.avif'
import { HeaderContext } from '../contexts/HeaderContext';
import Review from '../components/Review';

const Home = () => {
  const { position } = useContext(HeaderContext);
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
  
  const marginMeasurment = () => {
    return window.innerHeight / 100 * 40 > 800 ? '-700px' : '-40vh';
  };

  return (
    <div>
      <ImgBgFade opacity={0.8} img={trucks} />
      <div style={{ maxWidth: '1470px', margin: 'auto' }}>
        <div style={{ maxWidth: '600px', marginTop: '-250px', marginLeft: isSmallScreen ? '20px' : '40px', zIndex: 10000, position: "relative", marginBottom: isSmallScreen ? '50px' : '200px', opacity: position.top < -1 ? 0 : 1, transition: 'ease-in-out 0.3s all' }}>
          <h1 style={{ fontSize: '54px', margin: 0 }}>EaglePro</h1>
          <p style={{ marginTop: '10px', opacity: 0.65, maxWidth: '550px', marginRight: '20px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, veniam minima, fuga tenetur sint Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div style={{ padding: isSmallScreen ? '0px 20px' : '0px 40px', position: 'relative', marginTop: position.top < -1 ? isSmallScreen ? '-250px' : marginMeasurment() : '0px', zIndex: 10000, transition: 'ease-in-out 0.3s all'}}>
          <div style={{width: '100%', height: '400px', backgroundColor: 'var(--main-bg-color)', borderRadius: '20px', border: '1px solid var(--border-color)'}}>

          </div>
          <h1 style={{ margin: 0, padding: 0, marginTop: '40px', fontSize: isSmallScreen ? '24px' : '' }}>Trusted Perspectives</h1>
          <p style={{ color: 'var(--sec-color)', margin: 0, padding: 0, marginBottom: '40px' }}>Lorem ipsum dolor sit amet consectetur.</p>
          <Review />
        </div>
      </div>
    </div>
  )
}

export default Home