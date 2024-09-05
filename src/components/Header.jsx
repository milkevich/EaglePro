import React, { useState, useEffect, useRef, useContext } from 'react';
import s from '../shared/Styles/Header.module.scss';
import logo from '../assets/bilaldesigner-attachments/eaglepro files 2.png';
import { TbWorld } from "react-icons/tb";
import { useNavigate, useParams } from 'react-router-dom';
import { HeaderContext } from '../contexts/HeaderContext';
import { IoMenu } from "react-icons/io5";
import { CgCloseO } from "react-icons/cg";
import ru from '../assets/bilaldesigner-attachments/ru.png'
import en from '../assets/bilaldesigner-attachments/en.png'


const Header = () => {
  const { position, setPosition } = useContext(HeaderContext);
  const [logoAnim, setLogoAnim] = useState(false)
  const [logoAnim2, setLogoAnim2] = useState(false)
  const [btnsAnim, setBtnsAnim] = useState(false)
  const [headerAnim, setHeaderAnim] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isSmallScreen2, setIsSmallScreen2] = useState(false);
  const [isSmallScreen3, setIsSmallScreen3] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [menuAnim, setMenuAnim] = useState(false);
  const [langOpened, setLangOpened] = useState(false);
  const [langOpenedAnim, setLangOpenedAnim] = useState(false);
  const headerRef = useRef(null);
  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 850);
      setIsSmallScreen2(window.innerWidth <= 600);
      setIsSmallScreen3(window.innerWidth <= 1050);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


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
    if (position.top < -1 || isSmallScreen) {
      setTimeout(() => {
        setLogoAnim2(true)
      }, 500);
      setTimeout(() => {
        setBtnsAnim(true)
      }, 400);
      setLogoAnim(true)
      setTimeout(() => {
        setHeaderAnim(true)
      }, 200);
    } else if (position.top > -1) {
      setTimeout(() => {
        setLogoAnim(false)
      }, 300);
      setLogoAnim2(false)
      setHeaderAnim(false)
      setBtnsAnim(false)
    }
  })

  const isActive = (path) => location.pathname === path;

  const openMenu = () => {
    if (menuOpened) {
      setMenuOpened(false);
      setTimeout(() => {
        setMenuAnim(false);
        document.documentElement.style.overflow = 'auto';
      }, 300);
    } else {
      setMenuAnim(true);
      setTimeout(() => {
        setMenuOpened(true);
        document.documentElement.style.overflow = 'hidden';
      }, 300);
    }
  };

  const openLangToggle = () => {
    if(langOpened) {
      setLangOpenedAnim(false)
      setTimeout(() => {
        setLangOpened(false)
      }, 300);
    } else {
      setLangOpened(true)
      setTimeout(() => {
        setLangOpenedAnim(true)
      }, 10);
    }
  }
  

  return (
    <>

        <div style={{ zIndex: 100000000000, position: 'fixed', top: 0, left: 0, height: '100vh', width: '100vw', backgroundColor: 'var(--main-bg-color)', opacity: menuOpened ? 1 : 0, pointerEvents:  menuOpened ? '' : 'none', transition: 'ease-in-out 0.3s all'}}>
          <div>
          <button style={{ width: '44px', height: '44px', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--btn-bg-color)', border: 'none', outline: 'none', borderRadius: 15, cursor: 'pointer', position: 'absolute', right: isSmallScreen2 ? '40px' : '60px', top: 35 }} className={s.burgerMenu} onClick={openMenu}><CgCloseO color='var(--main-color)' style={{ marginTop: '3px' }} size={22} /></button>
          <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', height: '100vh'}}>
              <a href="/EaglePro/express" style={{ textDecoration: isActive('/EaglePro/express') ? 'underline' : 'none' }}>Express</a>
              <a href="/EaglePro/careers" style={{ textDecoration: isActive('/EaglePro/careers') ? 'underline' : 'none' }}>Careers</a>
              <a href="/EaglePro/mechanics" style={{ textDecoration: isActive('/EaglePro/mechanics') ? 'underline' : 'none' }}>Mechanics</a>
              <a href="/EaglePro/trailers" style={{ textDecoration: isActive('/EaglePro/trailers') ? 'underline' : 'none' }}>Trailers</a>
              <a href="/EaglePro/gourmet" style={{ textDecoration: isActive('/EaglePro/gourmet') ? 'underline' : 'none' }}>Gourmet</a>
              <a href="/EaglePro/invest" style={{ textDecoration: isActive('/EaglePro/invest') ? 'underline' : 'none' }}>Invest</a>
              <a href="/EaglePro/brokers" style={{ textDecoration: isActive('/EaglePro/brokers') ? 'underline' : 'none' }}>Brokers</a>
            </div>
          </div>
        </div>
      
      <div ref={headerRef} style={{ width: '1px', height: '1px' }} />
      <div style={{ width: '100vw', height: '100px', position: 'fixed', background: 'linear-gradient(180deg, var(--main-bg-color) 0%, rgba(10, 10, 10, 0) 100%)', zIndex: 100000, top: 0, left: 0, opacity: position.top < -1 || isSmallScreen ? 1 : 0, transition: 'ease-in-out 0.5s all' }} />
      <div style={{ position: 'fixed', width: '100%', backgroundColor: position.top < -1 || isSmallScreen ? 'transparent' : 'var(--main-bg-color)', transition: '0.3s ease-in-out all', zIndex: 1000000000, borderBottom: position.top < -1 || isSmallScreen ? '1px solid transparent' : '1px solid var(--border-color)' }}>
        <div style={{ margin: 'auto', maxWidth: '1470px' }}>
          <div style={{ opacity: logoAnim ? 0 : 1, transition: 'ease-in-out 0.1s all' }} className={s.logoContainer}>
            <img onClick={() => {
                    navigate('/EaglePro/express')
                  }}
                className={s.logo} src={logo} alt="Logo" />
          </div>
          <div className={position.top < -1 || isSmallScreen ? s.headerContainerSticky : s.headerContainer}>
            <div style={{ border: headerAnim ? '1px solid var(--border-color)' : '1px solid transparent', transition: 'ease-in-out 0.3s all' }} className={position.top < -1 ? s.headerContentSticky : s.headerContent}>
              <div className={s.headerButtonsContainer}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img onClick={() => {
                    navigate('/EaglePro/express')
                  }} style={{ width: '44px', opacity: logoAnim2 ? 1 : 0, position: 'absolute', transition: 'ease-in-out 0.3s all', cursor: 'pointer' }} src={logo} alt="Logo" />
                  <div style={{ marginLeft: btnsAnim ? '70px' : 0, transition: 'ease-in-out 0.3s all', zIndex: 10000 }} className={s.buttonsLeft}>
                    <a href="/EaglePro/express" style={{ textDecoration: isActive('/EaglePro/express') ? 'underline' : 'none' }}>Express</a>
                    <a href="/EaglePro/careers" style={{ textDecoration: isActive('/EaglePro/careers') ? 'underline' : 'none' }}>Careers</a>
                    <a href="/EaglePro/mechanics" style={{ textDecoration: isActive('/EaglePro/mechanics') ? 'underline' : 'none' }}>Mechanics</a>
                    <a href="/EaglePro/trailers" style={{ textDecoration: isActive('/EaglePro/trailers') ? 'underline' : 'none' }}>Trailers</a>
                    <a href="/EaglePro/gourmet" style={{ textDecoration: isActive('/EaglePro/gourmet') ? 'underline' : 'none' }}>Gourmet</a>
                    <a href="/EaglePro/invest" style={{ textDecoration: isActive('/EaglePro/invest') ? 'underline' : 'none' }}>Invest</a>
                    <a href="/EaglePro/brokers" style={{ textDecoration: isActive('/EaglePro/brokers') ? 'underline' : 'none' }}>Brokers</a>
                  </div>
                </div>
                <div className={s.buttonsRight}>
                  <button onClick={() => {
                    navigate('/EaglePro/careers')
                  }} style={{ width: '149px', height: '44px', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--btn-bg-color)', border: 'none', outline: 'none', borderRadius: 15, color: 'var(--main-color)', fontWeight: 900, cursor: 'pointer' }} className={s.applyBtn}>Apply</button>
                  <button style={{ width: '44px', height: '44px', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--btn-bg-color)', border: 'none', outline: 'none', borderRadius: 15, cursor: 'pointer' }} onClick={openLangToggle}><TbWorld color='var(--main-color)' style={{ marginTop: '3px' }} size={22} /></button>
                  {langOpened &&
                    <div style={{position: 'fixed', marginTop: '70px', backgroundColor: 'var(--main-bg-color)', width: '150px', padding: langOpenedAnim ? '10px' : '0px 10px', display: 'flex', flexDirection: 'column', borderRadius: '20px', border: '1px solid var(--border-color)', gap: '10px', marginLeft: isSmallScreen3 ? isSmallScreen ? '-40px' : '-130px' : '45px', overflow: 'hidden', maxHeight: langOpenedAnim ? '100px' : '0px', transition: 'ease-in-out 0.3s all', opacity: langOpenedAnim ? 1 : 0}}>
                      <button className={s.langBtn}><img src={ru} style={{maxWidth: '25px'}}/> Русский</button>
                      <button className={s.langBtn}><img src={en} style={{maxWidth: '25px'}}/> English</button>
                    </div>
                  }
                  <button style={{ width: '44px', height: '44px', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--btn-bg-color)', border: 'none', outline: 'none', borderRadius: 15, cursor: 'pointer' }} className={s.burgerMenu} onClick={openMenu}><IoMenu color='var(--main-color)' style={{ marginTop: '3px' }} size={22} /></button>
                  <div style={{position: 'absolute', width: menuAnim ? '100vw' : '1px', height: menuAnim ? '100vw' : '1px', backgroundColor: menuAnim ? 'var(--main-bg-color)' : 'var(--btn-bg-color)', right: isSmallScreen2 ? '55px' : '75px', transition: 'ease-in-out 0.3s all', display: isSmallScreen ? 'block' : 'none', scale: menuAnim ? '5' : '1', borderRadius: '100%'}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
