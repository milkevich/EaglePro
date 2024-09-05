import React, { useContext, useEffect, useState } from 'react'
import ImgBgFade from '../components/ImgBgFade'
import trucks from '../assets/bilaldesigner-attachments/trucks.avif'
import { HeaderContext } from '../contexts/HeaderContext';
import Review from '../components/Review';
import roadImg from '../assets/bilaldesigner-attachments/roadIl.png'
import growthImg from '../assets/bilaldesigner-attachments/arrow-growing-up--statistics--zig-zag--net-growth.png'
import truckImg from '../assets/bilaldesigner-attachments/simple-truck-transport.png'
import trustImg from '../assets/bilaldesigner-attachments/two-people-shaking-hands-.png'
import s from '../shared/Styles/Mechanics.module.scss'
import WhyUs from '../components/WhyUs';

const Home = () => {
  const { position } = useContext(HeaderContext);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isSmallScreen2, setIsSmallScreen2] = useState(false);
  const [isSmallScreen3, setIsSmallScreen3] = useState(false);
  const [isSmallScreen4, setIsSmallScreen4] = useState(false);
  const [isSmallScreen5, setIsSmallScreen5] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
      setIsSmallScreen2(window.innerWidth <= 1000)
      setIsSmallScreen3(window.innerWidth <= 515)
      setIsSmallScreen4(window.innerWidth <= 1370)
      setIsSmallScreen5(window.innerWidth <= 700)
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
        <div style={{ padding: isSmallScreen ? '0px 20px' : '0px 40px', position: 'relative', marginTop: position.top < -1 ? isSmallScreen ? '-250px' : marginMeasurment() : '0px', zIndex: 10000, transition: 'ease-in-out 0.3s all' }}>
          {isSmallScreen4 ?
            <div style={{ width: isSmallScreen5 ? 'calc(100% - 40px)' : '100%', display: 'block', gap: '20px', marginBottom: '40px' }}>
              <div style={{ display: isSmallScreen5 ? 'block' : 'flex', gap: '20px' }}>
                <div style={{ width: '100%', height: '100px', backgroundColor: 'var(--main-bg-color)', color: 'var(--main-color)', borderRadius: '20px', padding: '10px 20px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', gap: '20px', overflow: 'hidden', }}>
                  <div style={{ width: '100%' }}>
                    <p style={{ color: 'var(--sec-color)', margin: 0 }}>Net Growth</p>
                    <p style={{ fontSize: '48px', margin: 0, fontWeight: '600' }}>+47%</p>
                  </div>
                  <img style={{ width: '100px', marginTop: '40px', marginRight: '60px', scale: '3', marginLeft: '20px' }} src={growthImg} alt="" />
                </div>
                <div style={{ width: '100%', height: '100px', backgroundColor: 'var(--main-bg-color)', color: 'var(--main-color)', borderRadius: '20px', padding: '10px 20px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', gap: '20px', overflow: 'hidden', marginTop: isSmallScreen5 ? '20px' : ''}}>
                  <div style={{ width: '100%' }}>
                    <p style={{ color: 'var(--sec-color)', margin: 0 }}>Trusted Companies</p>
                    <p style={{ fontSize: '48px', margin: 0, fontWeight: '600' }}>150+</p>
                  </div>
                  <img style={{ maxWidth: '100%', marginTop: '80px', scale: '9', marginRight: '50px' }} src={trustImg} alt="" />
                </div>
              </div>
              <div style={{ display: isSmallScreen5 ? 'block' : 'flex', gap: '20px', marginTop: '20px' }}>
                <div style={{ width: '100%', height: '100px', backgroundColor: 'var(--main-bg-color)', color: 'var(--main-color)', borderRadius: '20px', padding: '10px 20px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', gap: '20px', overflow: 'hidden', }}>
                  <div style={{ width: '100%' }}>
                    <p style={{ color: 'var(--sec-color)', margin: 0 }}>Delivered vehicles</p>
                    <p style={{ fontSize: '48px', margin: 0, fontWeight: '600' }}>136K+</p>
                  </div>
                  <img style={{ maxWidth: '100%', scale: '3', marginTop: '40px', marginRight: '20px' }} src={truckImg} alt="" />
                  </div>
                <div style={{ width: '100%', height: '100px', backgroundColor: 'var(--main-bg-color)', color: 'var(--main-color)', borderRadius: '20px', padding: '10px 20px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', gap: '20px', overflow: 'hidden', marginTop: isSmallScreen5 ? '20px' : '' }}>
                  <div style={{ width: '100%' }}>
                    <p style={{ color: 'var(--sec-color)', margin: 0 }}>Miles driven</p>
                    <p style={{ fontSize: '48px', margin: 0, fontWeight: '600' }}>1.5M+</p>
                  </div>
                  <img style={{ maxWidth: '100%', marginTop: '30px', scale: '2.5', marginRight: '20px' }} src={roadImg} alt="" />
                </div>
              </div>
            </div>
            :
            <div style={{ width: '100%', display: 'flex', gap: '20px', marginBottom: '40px' }}>
              <div style={{ width: '100%', height: '100px', backgroundColor: 'var(--main-bg-color)', color: 'var(--main-color)', borderRadius: '20px', padding: '10px 20px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', gap: '20px', overflow: 'hidden', marginTop: '-40px' }}>
                <div style={{ width: '100%' }}>
                  <p style={{ color: 'var(--sec-color)', margin: 0 }}>Net Growth</p>
                  <p style={{ fontSize: '48px', margin: 0, fontWeight: '600' }}>+47%</p>
                </div>
                <img style={{ width: '100px', marginTop: '40px', marginRight: '60px', scale: '3', marginLeft: '20px' }} src={growthImg} alt="" />
              </div>
              <div style={{ width: '100%', height: '100px', backgroundColor: 'var(--main-bg-color)', color: 'var(--main-color)', borderRadius: '20px', padding: '10px 20px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', gap: '20px', overflow: 'hidden', marginTop: '-40px' }}>
                <div style={{ width: '100%' }}>
                  <p style={{ color: 'var(--sec-color)', margin: 0 }}>Trusted Companies</p>
                  <p style={{ fontSize: '48px', margin: 0, fontWeight: '600' }}>150+</p>
                </div>
                <img style={{ maxWidth: '100%', marginTop: '80px', scale: '9', marginRight: '50px' }} src={trustImg} alt="" />
              </div>
              <div style={{ width: '100%', height: '100px', backgroundColor: 'var(--main-bg-color)', color: 'var(--main-color)', borderRadius: '20px', padding: '10px 20px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', gap: '20px', overflow: 'hidden', marginTop: '-40px' }}>
                <div style={{ width: '100%' }}>
                  <p style={{ color: 'var(--sec-color)', margin: 0 }}>Delivered vehicles</p>
                  <p style={{ fontSize: '48px', margin: 0, fontWeight: '600' }}>136K+</p>
                </div>
                <img style={{ maxWidth: '100%', scale: '3', marginTop: '40px', marginRight: '20px' }} src={truckImg} alt="" />
              </div>
              <div style={{ width: '100%', height: '100px', backgroundColor: 'var(--main-bg-color)', color: 'var(--main-color)', borderRadius: '20px', padding: '10px 20px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', gap: '20px', overflow: 'hidden', marginTop: '-40px' }}>
                <div style={{ width: '100%' }}>
                  <p style={{ color: 'var(--sec-color)', margin: 0 }}>Miles driven</p>
                  <p style={{ fontSize: '48px', margin: 0, fontWeight: '600' }}>1.5M+</p>
                </div>
                <img style={{ maxWidth: '100%', marginTop: '30px', scale: '2.5', marginRight: '20px' }} src={roadImg} alt="" />
              </div>
            </div>
          }
          <div style={{ width: '100%', height: '300px', backgroundColor: 'var(--main-bg-color)', borderRadius: '20px', border: '1px solid var(--border-color)', marginBottom: '40px' }}>

          </div>
          <h1 className={s.locationTitle}>Where & When</h1>
          <p className={s.locationDescription}>Lorem ipsum dolor sit amet consectetur.</p>
          {!isSmallScreen2 &&
            <div className={s.locationWrapper}>
              <div>
                <p className={s.locationLabel}>Working hours</p>
                <p className={s.locationStatus}>Open</p>
              </div>
              <div>
                <p className={s.locationLabel}>Mon - Fri</p>
                <p>9:00 am - 6:00 pm</p>
                </div>
              <div>
                <p className={s.locationLabel}>Location</p>
                <p>419 Industrial Dr, North Wales, PA</p>
              </div>
              <div>
                <p className={s.locationLabel}>In Construction</p>
                <p>4 Larwin Rd, Cherry Hill, NJ</p>
              </div>
            </div>
          }
          {isSmallScreen2 && !isSmallScreen3 &&
            <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', padding: '5px 25px', borderRadius: '20px', backgroundColor: 'var(--main-bg-color)', border: '1px solid var(--border-color)' }}>
              <div>
                <div>
                  <p className={s.locationLabel}>Working hours</p>
                  <p className={s.locationStatus}>Open</p>
                </div>
                <div style={{ marginTop: '40px' }}>
                  <p className={s.locationLabel}>Location</p>
                  <p>419 Industrial Dr, North Wales, PA</p>
                </div>
              </div>
              <div>
                <div>
                  <p className={s.locationLabel}>Mon - Fri</p>
                  <p>9:00 am - 6:00 pm</p>
                </div>
                <div style={{ marginTop: '40px' }}>
                  <p className={s.locationLabel}>In Construction</p>
                  <p>4 Larwin Rd, Cherry Hill, NJ</p>
                </div>
              </div>
              <div style={{ position: 'absolute', height: '1px', width: 'calc(100% - 50px)', backgroundColor: 'var(--border-color)', top: '90px' }} />
            </div>
          }
          {isSmallScreen3 &&
            <div style={{ display: 'block', justifyContent: 'space-between', position: 'relative', padding: '5px 25px', borderRadius: '20px', backgroundColor: 'var(--main-bg-color)', border: '1px solid var(--border-color)' }}>
              <div style={{ display: isSmallScreen3 ? 'block' : 'flex', width: '100%', justifyContent: 'space-between' }}>
                <div>
                  <p className={s.locationLabel}>Working hours</p>
                  <p className={s.locationStatus}>Open</p>
                </div>
                <div>
                  <p className={s.locationLabel}>Mon - Fri</p>
                  <p>9:00 am - 6:00 pm</p>
                </div>
              </div>
              <div style={{ display: 'block', marginTop: isSmallScreen3 ? '40px' : '' }}>
                <div>
                  <p className={s.locationLabel}>Location</p>
                  <p>419 Industrial Dr, North Wales, PA</p>
                </div>
                <div>
                  <p className={s.locationLabel}>In Construction</p>
                  <p>4 Larwin Rd, Cherry Hill, NJ</p>
                </div>
              </div>
              <div style={{ position: 'absolute', height: '1px', width: 'calc(100% - 50px)', backgroundColor: 'var(--border-color)', top: isSmallScreen3 ? '155px' : '90px' }} />
            </div>
          }
          <WhyUs/>
          <Review />
        </div>
      </div>
    </div>
  )
}

export default Home