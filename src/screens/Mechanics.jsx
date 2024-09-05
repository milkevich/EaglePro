import React, { useContext, useEffect, useState } from 'react'
import mechanicsImg from '../assets/bilaldesigner-attachments/mechanics.png'
import ImgBgFade from '../components/ImgBgFade'
import { HeaderContext } from '../contexts/HeaderContext'
import Review from '../components/Review'
import ramLogo from '../assets/bilaldesigner-attachments/ramlogo.png'
import fordLogo from '../assets/bilaldesigner-attachments/fordlogo.png'
import { FaRegCalendar } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import Input from '../shared/UI/Input'
import s from '../shared/Styles/Mechanics.module.scss'
import centralLogo from '../assets/bilaldesigner-attachments/centrald.png'
import { FaPhone } from "react-icons/fa6";

const Mechanics = () => {
  const { position } = useContext(HeaderContext)
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isSmallScreen2, setIsSmallScreen2] = useState(false);
  const [isSmallScreen3, setIsSmallScreen3] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1000);
      setIsSmallScreen2(window.innerWidth <= 515)
      setIsSmallScreen3(window.innerWidth <= 420)
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={s.container}>
      <ImgBgFade img={mechanicsImg} />
      <div className={s.contentWrapper}>
        <div
          className={s.header}
          style={{ opacity: position.top < -1 ? 0 : 1 }}
        >
          <h1 className={s.title}>EaglePro Mechanics</h1>
          <p className={s.description}>Наш сервисный центр обслуживает траки, которые не принадлежат нашей компании. Мы рады предложить высокий уровень сервиса и профессионализма независимо от сотрудничества с нами.</p>
          <a href='tel:+14454485170' style={{padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', backgroundColor: 'var(--btn-bg-color)', outline: 'none', border: 'none', borderRadius: '10px', color: 'var(--main-color)', maxWidth: '200px'}}><FaPhone/> + 1 (123) 456 7890</a>
        </div>
        <div
          className={s.pricesWrapper}
          style={{ marginTop: position.top < -1 ? '-350px' : '-135px' }}
        >
          <div className={s.pricesHeader} style={{ opacity: position.top < -1 ? 1 : 0 }}>
            <h1 className={s.pricesTitle}>Prices</h1>
            <p className={s.pricesDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit, aliquid quibusdam.</p>
          </div>
          <div className={s.pricesList}>
            <div className={s.card}>
              <div className={s.cardHeader}>
                <h3 className={s.cardTitle}>Dodge RAM 3500</h3>
                <img src={ramLogo} className={s.cardLogo} />
              </div>
              <div className={s.cardRow}>
                <p>- Oil change</p>
                <p className={s.cardPrice}>$180</p>
              </div>
              <div className={s.cardRow}>
                <p>- Full kit change</p>
                <p className={s.cardPrice}>$380</p>
              </div>
              <div className={s.cardRow}>
                <p>- Axile oil change</p>
                <p className={s.cardPrice}>$180</p>
              </div>
              <div className={s.cardRow}>
                <p>- Front break pads</p>
                <p className={s.cardPrice}>$180</p>
              </div>
              <div className={s.cardRow}>
                <p>- Rear braker pads</p>
                <p className={s.cardPrice}>$200</p>
              </div>
              <div className={s.cardRow}>
                <p>- Tire TBB</p>
                <p className={s.cardPrice}>$200</p>
              </div>
            </div>
            <div className={s.card}>
              <div className={s.cardHeader}>
                <h3 className={s.cardTitle}>Ford F-350</h3>
                <img src={fordLogo} style={{ width: '55px' }} className={s.cardLogo} />
              </div>
              <div className={s.cardRow}>
                <p>- Oil change</p>
                <p className={s.cardPrice}>$200</p>
              </div>
              <div className={s.cardRow}>
                <p>- Full kit change</p>
                <p className={s.cardPrice}>$400</p>
              </div>
              <div className={s.cardRow}>
                <p>- Axile oil change</p>
                <p className={s.cardPrice}>$180</p>
              </div>
              <div className={s.cardRow}>
                <p>- Front break pads</p>
                <p className={s.cardPrice}>$180</p>
              </div>
              <div className={s.cardRow}>
                <p>- Rear braker pads</p>
                <p className={s.cardPrice}>$200</p>
              </div>
              <div className={s.cardRow}>
                <p>- Tire TBB</p>
                <p className={s.cardPrice}>$200</p>
              </div>
            </div>
            <div className={s.card}>
              <div className={s.cardHeader}>
                <h3 className={s.cardTitle}>Trailer</h3>
              </div>
              <div className={s.cardRow}>
                <p>- Change brake and bearing set 7K</p>
                <p className={s.cardPrice}>$200</p>
              </div>
              <div className={s.cardRow}>
                <p>- Change drum 7K</p>
                <p className={s.cardPrice}>$200</p>
              </div>
              <div className={s.cardRow}>
                <p>- Tire Copartner</p>
                <p className={s.cardPrice}>$200</p>
              </div>
              <div className={s.cardRow}>
                <p>- Change brake and bearing set 10K</p>
                <p className={s.cardPrice}>$300</p>
              </div>
              <div className={s.cardRow}>
                <p>- Change drum 10K</p>
                <p className={s.cardPrice}>$300</p>
              </div>
              <div className={s.cardRow}>
                <p>- Welding 1 hr</p>
                <p className={s.cardPrice}>$150</p>
              </div>
            </div>
          </div>
          <h1 className={s.locationTitle}>Where & When</h1>
          <p className={s.locationDescription}>Lorem ipsum dolor sit amet consectetur.</p>
          {!isSmallScreen &&
            <div className={s.locationWrapper}>
              <div>
                <p className={s.locationLabel}>Working hours</p>
                <p className={s.locationStatus}>Open</p>
              </div>
              <div>
                <p className={s.locationLabel}>Mon - Fri</p>
                <p>8:00 am - 8:00 pm</p>
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
          {isSmallScreen && !isSmallScreen2 &&
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
                  <p>8:00 am - 8:00 pm</p>
                  </div>
                <div style={{ marginTop: '40px' }}>
                  <p className={s.locationLabel}>In Construction</p>
                  <p>4 Larwin Rd, Cherry Hill, NJ</p>
                </div>
              </div>
              <div style={{ position: 'absolute', height: '1px', width: 'calc(100% - 50px)', backgroundColor: 'var(--border-color)', top: '90px' }} />
            </div>
          }
          {isSmallScreen2 &&
            <div style={{ display: 'block', justifyContent: 'space-between', position: 'relative', padding: '5px 25px', borderRadius: '20px', backgroundColor: 'var(--main-bg-color)', border: '1px solid var(--border-color)' }}>
              <div style={{display: isSmallScreen3 ? 'block' : 'flex', width: '100%', justifyContent: 'space-between'}}>
                <div>
                  <p className={s.locationLabel}>Working hours</p>
                  <p className={s.locationStatus}>Open</p>
                </div>
                <div>
                  <p className={s.locationLabel}>Mon - Fri</p>
                  <p>8:00 am - 8:00 pm</p>
                  </div>
              </div>
              <div style={{display: 'block', marginTop: isSmallScreen3 ? '40px' : ''}}>
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
          <h1 className={s.joinTitle}>Join the Team</h1>
          <p className={s.joinDescription}>Lorem ipsum dolor sit amet consectetur, adipis.</p>
          <div style={{ backgroundColor: 'var(--main-bg-color)', border: '1px solid var(--border-color)', padding: '10px 25px', borderRadius: 20, marginTop: '20px' }}>
            <h3 style={{margin: 0, marginTop: '5px'}}>Please fill out the fields below</h3>
            <p style={{margin: 0, color: 'var(--sec-color)'}}>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <div style={{ display: isSmallScreen ? 'block' : 'flex', justifyContent: 'stretch', gap: '20px', width: 'calc(100% - 20px)' }}>
              <div style={{ width: isSmallScreen ? 'calc(100% + 20px)' : '100%' }}>
                <p style={{color: 'var(--main-color)', marginBottom: '5px'}}>First Name</p>
                <Input def={true} placeholder='Ex. John' />
              </div>
              <div style={{ width: isSmallScreen ? 'calc(100% + 20px)' : '100%' }}>
                <p style={{color: 'var(--main-color)', marginBottom: '5px'}}>Last Name</p>
                <Input def={true} placeholder='Ex. Doe' />
              </div>
              <div style={{width: '100%', position: 'relative'}}>
                <p style={{color: 'var(--main-color)', marginBottom: '5px'}}>Date of birth</p>
                <input type="date" style={{ padding: '0px 19px', outline: 'none', backgroundColor: "var(--main-bg-color)", color: "var(--main-color)", border: "1px solid var(--border-color)", borderRadius: 10, width: 'calc(100% - 20px)', appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none', height: '56px'}} />
                <FaRegCalendar color='var(--sec-color)' size={14} style={{ position: 'absolute', pointerEvents: 'none', right: 0, bottom: 23}} />
              </div>
            </div>
            <div style={{ display: isSmallScreen ? 'block' : 'flex', justifyContent: 'stretch', gap: '20px' }}>
              <div style={{ width: isSmallScreen ? '100%' : 'calc(50% - 25px)' }}>
                <p style={{color: 'var(--main-color)', marginBottom: '5px'}}>Working experience</p>
                <Input select={true} placeholder='Ex. John' />
                <IoIosArrowDown color='var(--sec-color)' style={{ backgroundColor: 'var(--main-bg-color)', paddingRight: '15px', position: 'absolute', marginTop: '18px', marginLeft: '-35px', pointerEvents: 'none', paddingTop: 5, paddingBottom: 5, zIndex: 1000 }} />
              </div>
              <div style={{ width: isSmallScreen ? '100%' : 'calc(50% - 25px)' }}>
                <p style={{color: 'var(--main-color)', marginBottom: '5px'}}>Previous Companies</p>
                <Input def={true} placeholder='Ex. EaglePro' />
              </div>
              <div style={{ width: isSmallScreen ? '100%' : '50%'  }}>
                <p style={{color: 'var(--main-color)', marginBottom: '5px'}}>Contact Information</p>
                <Input def={true} placeholder='Ex. +1 123 456 7890' />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
            <p style={{ color: 'var(--sec-color)', display: isSmallScreen ? 'none' : 'block' }}>Lorem ipsum dolor sit amet. {!isSmallScreen2 && 'Porro eligendi atque ratione vero voluptas optio mollitia'}</p>
            <button style={{ padding: '10px 40px', height: '40px', outline: 'none', border: 'none', borderRadius: '10px', backgroundColor: 'var(--btn-bg-color)', color: 'var(--main-color)', fontWeight: '900', cursor: 'pointer', width: isSmallScreen ? '100%' : '', marginBottom: isSmallScreen ? '15px' : '', marginTop: isSmallScreen ? '15px' : '' }}>Submit</button>
            </div>
          </div>
          <Review />
        </div>
      </div>
    </div>
  )
}

export default Mechanics
