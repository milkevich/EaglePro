import React, { useContext, useEffect, useState } from 'react';
import truckImg from '../assets/bilaldesigner-attachments/truck.png';
import { HeaderContext } from '../contexts/HeaderContext';
import Input from '../shared/UI/Input';
import Footer from '../components/Footer';
import { FaRegCalendar } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import Review from '../components/Review';
import ImgBgFade from '../components/ImgBgFade';

const Express = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isSmallScreen2, setIsSmallScreen2] = useState(false);
  const [isSmallScreen3, setIsSmallScreen3] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
      setIsSmallScreen2(window.innerWidth <= 670);
      setIsSmallScreen3(window.innerWidth <= 450);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { position } = useContext(HeaderContext);

  return (
    <div style={{minHeight: 'calc(90vh)'}}>
      <ImgBgFade img={truckImg} />
      <div style={{ maxWidth: '1470px', margin: 'auto' }}>
        <div style={{ maxWidth: '450px', marginTop: isSmallScreen ? '-150px' : '-250px', marginLeft: isSmallScreen ? '20px' : '40px', zIndex: 10000, position: "relative", marginBottom: isSmallScreen2 ? '100px' : '200px', opacity: position.top < -1 ? 0 : 1, transition: 'ease-in-out 0.3s all' }}>
          <h1 style={{ fontSize: isSmallScreen ? '32px' : '54px', margin: 0}}>EaglePro - Express</h1>
          <p style={{ marginTop: '10px', opacity: 0.65, fontSize: isSmallScreen ? '16px' : '18px', padding: '0px 20px 0px 0px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, veniam minima, fuga tenetur sint</p>
        </div>
        <div style={{ padding: isSmallScreen ? '0px 20px' : '0px 40px', position: 'relative', marginTop: position.top < -1 ? isSmallScreen2 ? '-250px' : '-350px' : '0px', zIndex: 10000, transition: 'ease-in-out 0.3s all' }}>

          <div style={{ backgroundColor: 'var(--main-bg-color)', border: '1px solid var(--border-color)', padding: '10px 25px', borderRadius: 20, marginTop: '20px' }}>
            <h3 style={{margin: 0, marginTop: '5px'}}>Apply to EaglePro</h3>
            <p style={{margin: 0, color: 'var(--sec-color)'}}>Lorem ipsum dolor sit amet consectetur.</p>
            <div style={{ display: isSmallScreen ? 'block' : 'flex', justifyContent: 'stretch', gap: '20px', width: 'calc(100% - 20px)' }}>
              <div style={{ width: isSmallScreen ? 'calc(100% + 20px)' : '100%' }}>
                <p style={{color: 'var(--sec-color)', marginBottom: '5px'}}>First Name</p>
                <Input def={true} placeholder='Ex. John' />
              </div>
              <div style={{ width: isSmallScreen ? 'calc(100% + 20px)' : '100%' }}>
                <p style={{color: 'var(--sec-color)', marginBottom: '5px'}}>Last Name</p>
                <Input def={true} placeholder='Ex. Doe' />
              </div>
              <div style={{width: '100%', position: 'relative'}}>
                <p style={{color: 'var(--sec-color)', marginBottom: '5px'}}>Date of birth</p>
                <input type="date" style={{ padding: 19, outline: 'none', backgroundColor: "var(--main-bg-color)", color: "var(--main-color)", border: "1px solid var(--border-color)", borderRadius: 10, width: 'calc(100% - 20px)'}} />
                <FaRegCalendar color='var(--sec-color)' size={14} style={{ position: 'absolute', pointerEvents: 'none', right: 0, bottom: 23}} />
              </div>
            </div>
            <div style={{ display: isSmallScreen3 ? 'block' : 'flex', justifyContent: 'stretch', gap: '20px' }}>
              <div style={{ width: isSmallScreen3 ? '100%' : '50%' }}>
                <p style={{color: 'var(--sec-color)', marginBottom: '5px'}}>Working experience</p>
                <Input select={true} placeholder='Ex. John' />
                <IoIosArrowDown color='var(--sec-color)' style={{ backgroundColor: 'var(--main-bg-color)', paddingRight: '15px', position: 'absolute', marginTop: '20px', marginLeft: '-35px', pointerEvents: 'none', paddingTop: 5, paddingBottom: 5, zIndex: 1000 }} />
              </div>
              <div style={{ width: isSmallScreen3 ? '100%' : '50%' }}>
                <p style={{color: 'var(--sec-color)', marginBottom: '5px'}}>Previous Companies</p>
                <Input def={true} placeholder='Ex. EaglePro' />
              </div>
            </div>
            <div style={{ display: isSmallScreen2 ? 'block' : 'flex', justifyContent: 'space-between', gap: '20px', marginTop: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-10px' }}>
                <Input checkbox={true} />
                <p style={{ marginLeft: '20px' }}>Do you have a CDL?</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginLeft: isSmallScreen2 ? '-10px' : '0' }}>
                <Input checkbox={true} />
                <p style={{ marginLeft: '20px' }}>Do you have a SSN?</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', marginLeft: isSmallScreen2 ? '-10px' : '0'  }}>
                <Input checkbox={true} />
                <p style={{ marginLeft: '20px' }}>Do you have a Company?</p>
              </div>

            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ color: 'var(--sec-color)' }}>Lorem ipsum dolor sit amet. {!isSmallScreen2 && 'Porro eligendi atque ratione vero voluptas optio mollitia'}</p>
              <button style={{ padding: '10px 40px', height: '40px', outline: 'none', border: 'none', borderRadius: '10px', backgroundColor: 'var(--btn-bg-color)', color: 'var(--main-color)', fontWeight: '900', cursor: 'pointer' }}>Submit</button>
            </div>
          </div>
          <h1 style={{ margin: 0, padding: 0, marginTop: '40px', fontSize: isSmallScreen ? '24px' : '32px' }}>Trusted Perspectives</h1>
          <p style={{ color: 'var(--sec-color)', margin: 0, padding: 0, marginBottom: '40px', fontSize: isSmallScreen ? '14px' :  '16px' }}>{isSmallScreen2 ? 'Lorem ipsum dolor sit amet consectetur' : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit'}</p>
          <Review />
        </div>
      </div>
    </div>
  );
};

export default Express;