import React, { useContext } from 'react'
import ImgBgFade from '../components/ImgBgFade'
import foodImg from '../assets/bilaldesigner-attachments/food.png'
import { HeaderContext } from '../contexts/HeaderContext'
import Review from '../components/Review'

const Gourmet = () => {
  const { position } = useContext(HeaderContext)

  return (
    <div>
      <ImgBgFade img={foodImg}/>
      <div style={{maxWidth: '1470px', margin: 'auto'}}>
      <div style={{ maxWidth: '550px', marginTop: '-250px', marginLeft: '40px', zIndex: 10000, position: "relative", marginBottom: '200px', opacity: position.top < -1 ? 0 : 1, transition: 'ease-in-out 0.3s all' }}>
        <h1 style={{ fontSize: '54px', margin: 0 }}>EaglePro Gourmet</h1>
        <p style={{ marginTop: '10px', opacity: 0.65 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, veniam minima, fuga tenetur sint</p>
      </div>
      <div style={{ padding: '0px 40px', position: 'relative', marginTop: position.top < -1 ? '-350px' : '0px', zIndex: 10000, transition: 'ease-in-out 0.3s all' }}>
      <div style={{ backgroundColor: 'var(--main-bg-color)', border: '1px solid var(--border-color)', padding: '10px 25px', borderRadius: 20, marginTop: '20px', marginBottom: '40px', minHeight: '300px' }}>
          
      </div>        
      <Review/>
      </div>
      </div>
    </div>
  )
}

export default Gourmet