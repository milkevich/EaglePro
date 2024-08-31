import React, { useState, useEffect, useContext } from 'react';
import ImgBgFade from '../components/ImgBgFade';
import foodImg from '../assets/bilaldesigner-attachments/food.png';
import { HeaderContext } from '../contexts/HeaderContext';
import Review from '../components/Review';
import { useNavigate } from 'react-router-dom';

const Gourmet = () => {
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
  
  const { position } = useContext(HeaderContext);
  const navigate = useNavigate()

  const marginMeasurment = () => {
    return window.innerHeight / 100 * 40 > 800 ? '-700px' : '-40vh';
  };

  return (
    <>
      <ImgBgFade img={foodImg} />
      <div style={{ maxWidth: '1470px', margin: 'auto' }}>
      <div style={{ maxWidth: '450px', marginTop: isSmallScreen ? '-200px' : '-250px', marginLeft: isSmallScreen ? '20px' : '40px', zIndex: 10000, position: "relative", marginBottom: isSmallScreen ? '150px' : '200px', opacity: position.top < -1 ? 0 : 1, transition: 'ease-in-out 0.3s all' }}>
          <h1 style={{ fontSize: isSmallScreen ? '32px' : '54px', margin: 0, }}>EaglePro - Gourmet</h1>
          <p style={{ marginTop: '10px', opacity: 0.65, fontSize: isSmallScreen ? '16px' : '18px', padding: '0px 20px 0px 0px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, veniam minima, fuga tenetur sint</p>
        </div>

        <div
          style={{
            padding: isSmallScreen ? '0px 20px' : '0px 40px',
            position: 'relative',
            marginTop: position.top < -1 ? marginMeasurment() : '-120px',
            zIndex: 10000,
            transition: 'ease-in-out 0.3s all',
          }}
        >
          <div style={{width: '100%', height: '400px', backgroundColor: 'var(--main-bg-color)', borderRadius: '20px', border: '1px solid var(--border-color)', marginBottom: '20px', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
            <p style={{color: 'var(--sec-color)'}}>some container (navigating to order)</p>
            <button style={{padding: '10px 40px', backgroundColor: 'var(--btn-bg-color)', border: 'none', outline: 'none', borderRadius: '10px', color: 'var(--main-color)', cursor: 'pointer'}} onClick={() => {
              navigate('/gourmet/order')
            }}>Order</button>
          </div>
          <h1 style={{ margin: 0, fontSize: isSmallScreen ? '24px' : '' }}>Trusted Perspectives</h1>
          <p style={{ color: 'var(--sec-color)', margin: 0, marginBottom: '30px', fontSize: isSmallScreen ? '14px' : '' }}>Lorem ipsum dolor sit amet consectetur, adipis.</p>
          <Review />
        </div>
      </div>
    </>
  );
};

export default Gourmet;
