import React, { useContext, useEffect, useState } from 'react'
import ImgBgFade from '../components/ImgBgFade'
import foodImg from '../assets/bilaldesigner-attachments/food.png'
import { HeaderContext } from '../contexts/HeaderContext'
import Review from '../components/Review'
import Input from '../shared/UI/Input'


const Invest = () => {
  const { position } = useContext(HeaderContext)
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isSmallScreen2, setIsSmallScreen2] = useState(false);
  const [isSmallScreen3, setIsSmallScreen3] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 850);
      setIsSmallScreen2(window.innerWidth <= 600);
      setIsSmallScreen3(window.innerWidth <= 500);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ padding: isSmallScreen2 ? '0px 20px' : '0px 40px', maxWidth: '1400px', margin: 'auto'}}>
      <div style={{ marginTop: position.top < -1 || isSmallScreen ? '150px' : '300px', transition: 'ease-in-out 0.3s all', marginBottom: '100px' }}>
        <div style={{ maxWidth: '85%', zIndex: 10000, position: "relative" }}>
          <h1 style={{ fontSize: isSmallScreen2 ? '32px' : '54px', margin: 0 }}>EaglePro Invest</h1>
          <p style={{ marginTop: '10px', opacity: 0.65 }}>Наша компания предоставляет уникальную возможность инвестирования вместе с нами, как для водителей, так и инвесторов/фондов. Мы предлагаем надежные решения преумножения вашего капитала со скоростью не сравнимой ни с одним банком. Инвестиции могут начинаться даже с минимальной суммы в $10,000.
          </p>
        </div>
        <div style={{ backgroundColor: 'var(--main-bg-color)', border: '1px solid var(--border-color)', padding: '10px 25px 20px 25px', borderRadius: 20, width: 'calc(100% - 50px)', marginTop: '50px' }}>
          <div style={{display: isSmallScreen3 ? 'block' : 'flex', flexDirection: 'row', gap: '20px', paddingTop: '10px'}}>
          <div style={{width: isSmallScreen3 ? '100%' : '50%'}}>
            <p style={{margin: 0, marginBottom: '10px'}}>Name <span style={{color: '#bd2626', fontWeight: '900'}}>*</span></p>
            <Input def={true} placeholder='Ex. John Doe' />
          </div>
          <div style={{width: isSmallScreen3 ? '100%' : '50%', marginTop: isSmallScreen3 ? '20px' : ''}}>
            <p style={{margin: 0, marginBottom: '10px'}}>Contact via <span style={{color: '#bd2626', fontWeight: '900'}}>*</span></p>
            <Input def={true} placeholder='Ex. +1 234 567 8910' />
          </div>
          </div>
          <div style={{width: '100%', marginTop: '20px'}}>
            <p style={{margin: 0, marginBottom: '10px'}}>Message</p>
            <textarea style={{padding: '15px 15px', maxWidth: 'calc(100% - 30px)', minWidth: 'calc(100% - 30px)', maxHeight: '60px', minHeight: '60px', outline: 'none', border: '1px solid var(--border-color)', borderRadius: '10px', backgroundColor: 'var(--main-bg-color)', color: 'var(--main-color)'}} placeholder='Leave a message for us' id=""></textarea>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'end', justifyContent: 'space-between'}}>
            <p style={{color: 'var(--sec-color)', marginBottom: '7px'}}>Lorem ipsum dolor sit amet, consectet.</p>
          <button style={{ padding: '10px 40px', height: '40px', outline: 'none', border: 'none', borderRadius: '10px', backgroundColor: 'var(--btn-bg-color)', color: 'var(--main-color)', fontWeight: '900', cursor: 'pointer', marginTop: '20px' }}>Submit</button>
          </div>
          </div>
      </div>
      <h1 style={{margin: 0, marginTop: '-70px', fontSize: isSmallScreen2 ? '24px' : ''}}>Trusted Perspectives</h1>
      <p style={{color: 'var(--sec-color)', margin: 0, marginBottom: '30px'}}>Lorem ipsum dolor sit amet consectetur.</p>
      <Review />
    </div>
  )
}

export default Invest