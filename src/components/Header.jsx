import React, { useState, useEffect, useRef, useContext } from 'react';
import s from '../shared/Styles/Header.module.scss';
import logo from '../assets/bilaldesigner-attachments/eaglepro files 2.png';
import { TbWorld } from "react-icons/tb";
import { useNavigate, useParams } from 'react-router-dom';
import { HeaderContext } from '../contexts/HeaderContext';

const Header = () => {
  const { position, setPosition } = useContext(HeaderContext);
  const [logoAnim, setLogoAnim] = useState(false)
  const [logoAnim2, setLogoAnim2] = useState(false)
  const [btnsAnim, setBtnsAnim] = useState(false)
  const [headerAnim, setHeaderAnim] = useState(false)
  const headerRef = useRef(null);
  const navigate = useNavigate()
  

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
    if (position.top < -1) {
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
    } else if(position.top > -1) {
      setTimeout(() => {
        setLogoAnim(false)
      }, 300);
      setLogoAnim2(false)
      setHeaderAnim(false)
      setBtnsAnim(false)
    }
  })

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div ref={headerRef} style={{ width: '1px', height: '1px' }} />
      <div style={{ width: '100vw', height: '100px', position: 'fixed', background: 'linear-gradient(180deg, var(--main-bg-color) 0%, rgba(10, 10, 10, 0) 100%)', zIndex: 100000, top: 0, left: 0, opacity: position.top < -1 ? 1 : 0, transition: 'ease-in-out 0.5s all'}} />
      <div style={{position: 'fixed', width: '100%', backgroundColor: position.top < -1 ? 'transparent' : 'var(--main-bg-color)', transition: '0.3s ease-in-out all', zIndex: 1000000000}}>
      <div style={{opacity: logoAnim ? 0 : 1, transition: 'ease-in-out 0.1s all'}} className={s.logoContainer}>
        <img className={s.logo} src={logo} alt="Logo" />
      </div>
      <div className={ position.top < -1 ? s.headerContainerSticky : s.headerContainer}>
        <div style={{border: headerAnim ? '1px solid var(--border-color)' : '1px solid transparent', transition: 'ease-in-out 0.3s all'}} className={position.top < -1 ? s.headerContentSticky : s.headerContent}>
          <div className={s.headerButtonsContainer}>
            <div style={{display: 'flex', alignItems: 'center'}}>
          <img style={{width: '44px', opacity: logoAnim2 ? 1 : 0, position: 'absolute', transition: 'ease-in-out 0.3s all'}} src={logo} alt="Logo" />
            <div style={{marginLeft: btnsAnim ? '70px' : 0, transition: 'ease-in-out 0.3s all', zIndex: 10000}} className={s.buttonsLeft}>
              <a href="/Home" style={{ textDecoration: isActive('/Home') ? 'underline' : 'none'}}>Home</a>
              <a href="/Express" style={{ textDecoration: isActive('/Express') ? 'underline' : 'none'}}>Express</a>
              <a href="/Trailers" style={{ textDecoration: isActive('/Trailers') ? 'underline' : 'none'}}>Trailers</a>
              <a href="/Gourmet" style={{ textDecoration: isActive('/Gourmet') ? 'underline' : 'none'}}>Gourmet</a>
              <a href="/Invest" style={{ textDecoration: isActive('/Invest') ? 'underline' : 'none'}}>Invest</a>
              <a href="/Brokers" style={{ textDecoration: isActive('/Brokers') ? 'underline' : 'none'}}>Brokers</a>
            </div>
            </div>
            <div className={s.buttonsRight}>
              <button onClick={() => {
                navigate('/Express')
              }} style={{ width: '149px', height: '44px', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--btn-bg-color)', border: 'none', outline: 'none', borderRadius: 15, color: 'var(--main-color)', fontWeight: 900, cursor: 'pointer' }}>Apply</button>
              <button style={{ width: '44px', height: '44px', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--btn-bg-color)', border: 'none', outline: 'none', borderRadius: 15, cursor: 'pointer' }}><TbWorld color='var(--main-color)' style={{ marginTop: '3px' }} size={22} /></button>
            </div>
          </div>
          </div>
          </div>
          </div>          
    </>
  );
};

export default Header;
