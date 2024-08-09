import React from 'react'
import logoImg from '../assets/bilaldesigner-attachments/eaglepro files 2.png'
import { IoArrowUpOutline } from "react-icons/io5";

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    return (
        <div style={{ outline: '1px solid var(--border-color)', padding: '20px 20px', marginTop: '60px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", maxWidth: 'calc(100% - 80px)', marginLeft: '40px', borderBottom: '1px solid var(--btn-bg-color)', paddingBottom: "40px" }}>
                <div>
                    <p style={{ color: 'var(--sec-color)', fontSize: '18px' }}>Contact</p>
                    <div>
                        <a href="/Home" >+1 345 2423 2342</a>
                        <br />
                        <a href="/Express">sdndsjfnsdjfnsdj@sdf.com</a>
                    </div>
                </div>
                <div>
                    <p style={{ color: 'var(--sec-color)', fontSize: '18px' }}>Navigate</p>
                    <div>
                        <a href="/Home">EaglePro - Home</a>
                        <br />
                        <a href="/Express">EaglePro - Express</a>
                    </div>
                </div>
                <div>
                    <p style={{ color: 'var(--sec-color)', fontSize: '18px', opacity: 0 }}>Navigate</p>
                    <div>
                        <a href="/Trailers">EaglePro - Trailers</a>
                        <br />
                        <a href="/Gourmet">EaglePro - Gourmet</a>
                    </div>
                </div>
                <div>
                    <p style={{ color: 'var(--sec-color)', fontSize: '18px', opacity: 0 }}>Navigate</p>
                    <div>
                        <a href="/Invest">EaglePro - Invest</a>
                        <br />
                        <a href="/Brokers">EaglePro - Brokers</a>
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: "space-between", maxWidth: 'calc(100% - 80px)', marginLeft: '40px', paddingTop: '20px'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                <img style={{maxWidth: '40px', marginRight: '20px'}} src={logoImg} alt="" />
                <div>
                <p style={{padding: 0, margin: 0}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p style={{padding: 0, margin: 0, color: 'var(--sec-color)'}}>Lorem ipsum dolor sit.</p>
                </div>
                </div>
                <div onClick={scrollToTop} style={{display: 'flex', alignItems: 'center', cursor: "pointer"}}>
                    <p>
                    Scroll to Top 
                    </p>
                    <IoArrowUpOutline style={{color: 'var(--main-color)', padding: '9px', backgroundColor: 'var(--btn-bg-color)', borderRadius: '10px', marginLeft: '20px'}}/>
                </div>
            </div>
        </div>
    )
}

export default Footer