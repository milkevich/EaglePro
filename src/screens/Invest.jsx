import React, { useContext } from 'react'
import ImgBgFade from '../components/ImgBgFade'
import foodImg from '../assets/bilaldesigner-attachments/food.png'
import { HeaderContext } from '../contexts/HeaderContext'
import Review from '../components/Review'
import Input from '../shared/UI/Input'


const Invest = () => {
  const { position } = useContext(HeaderContext)
  return (
    <div style={{ padding: '0px 40px', maxWidth: '1400px', margin: 'auto'}}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: position.top < -1 ? '150px' : '300px', transition: 'ease-in-out 0.3s all', marginBottom: '100px', marginLeft: '10px' }}>
        <div style={{ maxWidth: '550px', zIndex: 10000, position: "relative" }}>
          <h1 style={{ fontSize: '54px', margin: 0 }}>EaglePro Invest</h1>
          <p style={{ marginTop: '10px', opacity: 0.65 }}>Наша компания предоставляет уникальную возможность инвестирования вместе с нами, как для водителей, так и инвесторов/фондов. Мы предлагаем надежные решения преумножения вашего капитала со скоростью не сравнимой ни с одним банком. Инвестиции могут начинаться даже с минимальной суммы в $10,000.
          </p>
        </div>
        <div style={{ backgroundColor: 'var(--main-bg-color)', border: '1px solid var(--border-color)', padding: '10px 25px', borderRadius: 20, width: '500px', height: '305px' }}>
          <div style={{display: 'flex', flexDirection: 'row', gap: '20px', paddingTop: '10px'}}>
          <div style={{width: '50%'}}>
            <p style={{margin: 0, marginBottom: '10px'}}>Name</p>
            <Input def={true} placeholder='Ex. John Doe' />
          </div>
          <div style={{width: '50%'}}>
            <p style={{margin: 0, marginBottom: '10px'}}>Contact via</p>
            <Input def={true} placeholder='Ex. +1 234 567 8910' />
          </div>
          </div>
          <div style={{width: '100%', marginTop: '20px'}}>
            <p style={{margin: 0, marginBottom: '10px'}}>Message</p>
            <textarea style={{padding: '15px 15px', maxWidth: 'calc(100% - 30px)', minWidth: 'calc(100% - 30px)', maxHeight: '60px', minHeight: '60px', outline: 'none', border: '1px solid var(--border-color)', borderRadius: '10px', backgroundColor: 'var(--btn-bg-color)', color: 'var(--main-color)'}} placeholder='Leave a message for us' id=""></textarea>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'end', justifyContent: 'space-between'}}>
            <p style={{color: 'var(--sec-color)', marginBottom: '7px'}}>Lorem ipsum dolor sit amet, consectet.</p>
          <button style={{ padding: '10px 40px', height: '40px', outline: 'none', border: 'none', borderRadius: '10px', backgroundColor: 'var(--btn-bg-color)', color: 'var(--main-color)', fontWeight: '900', cursor: 'pointer', marginTop: '20px' }}>Submit</button>
          </div>
          </div>
      </div>

      <Review />
    </div>
  )
}

export default Invest