import React, { useEffect, useState } from 'react'
import logoImg from '../assets/bilaldesigner-attachments/eaglepro files 2.png'
import { IoArrowUpOutline } from "react-icons/io5";

const Footer = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isSmallScreen2, setIsSmallScreen2] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 850);
            setIsSmallScreen2(window.innerWidth <= 600)
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div style={{ borderTop: '1px solid var(--border-color)', padding: !isSmallScreen2 ? '20px 20px' : '0px 5px 15px 5px', marginTop: '60px' }}>
            <div style={{ maxWidth: '1470px', margin: 'auto' }}>
                <div style={{ display: !isSmallScreen2 ? 'flex' : 'block', flexDirection: 'row', justifyContent: "space-between", maxWidth: !isSmallScreen2 ? 'calc(100% - 80px)' : 'calc(100% - 20px)', marginLeft: !isSmallScreen2 ? '40px' : '15px', borderBottom: '1px solid var(--btn-bg-color)', paddingBottom: "40px" }}>
                    <div>
                        <p style={{ color: 'var(--sec-color)', fontSize: '18px' }}>Contact</p>
                        <div>
                            <a href="tel:+14454485170" >+1 345 2423 2342</a>
                            <br />
                            <a href="mailto:service@eagleproalliance.com">service@eagleproalliance.com</a>
                        </div>
                    </div>
                    {!isSmallScreen2 && 
                    <>
                        <div>
                        <p style={{ color: 'var(--sec-color)', fontSize: '18px' }}>Navigate</p>
                        <div>
                            <a href="/EaglePro/express">{!isSmallScreen && 'EaglePro - '}Express</a>
                            <br />
                            <a href="/EaglePro/mechanics">{!isSmallScreen && 'EaglePro - '}Mechanics</a>
                        </div>
                    </div>
                    <div>
                        <p style={{ color: 'var(--sec-color)', fontSize: '18px', opacity: 0 }}>Navigate</p>
                        <div>
                            <a href="/EaglePro/trailers">{!isSmallScreen && 'EaglePro - '}Trailers</a>
                            <br />
                            <a href="/EaglePro/gourmet">{!isSmallScreen && 'EaglePro - '}Gourmet</a>
                        </div>
                    </div>
                    <div>
                        <p style={{ color: 'var(--sec-color)', fontSize: '18px', opacity: 0 }}>Navigate</p>
                        <div>
                            <a href="/EaglePro/invest">{!isSmallScreen && 'EaglePro - '}Invest</a>
                            <br />
                            <a href="/EaglePro/brokers">{!isSmallScreen && 'EaglePro - '}Brokers</a>
                        </div>
                    </div>
                    </>
                    }
                    {isSmallScreen2 &&
                        <div style={{ display: isSmallScreen2 && 'flex', flexDirection: isSmallScreen2 && 'row', justifyContent: isSmallScreen2 && "space-between", width: '100%' }}>
                            <div>
                                <p style={{ color: 'var(--sec-color)', fontSize: '18px' }}>Navigate</p>
                                <div>
                                    <a href="/EaglePro/express">{!isSmallScreen && 'EaglePro - '}Express</a>
                                    <br />
                                    <a href="/EaglePro/mechanics">{!isSmallScreen && 'EaglePro - '}Mechanics</a>
                                </div>
                            </div>
                            <div>
                                <p style={{ color: 'var(--sec-color)', fontSize: '18px', opacity: 0 }}>Navigate</p>
                                <div>
                                    <a href="/EaglePro/trailers">{!isSmallScreen && 'EaglePro - '}Trailers</a>
                                    <br />
                                    <a href="/EaglePro/gourmet">{!isSmallScreen && 'EaglePro - '}Gourmet</a>
                                </div>
                            </div>
                            <div>
                                <p style={{ color: 'var(--sec-color)', fontSize: '18px', opacity: 0 }}>Navigate</p>
                                <div>
                                    <a href="/EaglePro/invest">{!isSmallScreen && 'EaglePro - '}Invest</a>
                                    <br />
                                    <a href="/EaglePro/brokers">{!isSmallScreen && 'EaglePro - '}Brokers</a>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", maxWidth: !isSmallScreen2 ? 'calc(100% - 80px)' : 'calc(100% - 30px)', marginLeft: !isSmallScreen2 ? '40px' : '15px', paddingTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img style={{ maxWidth: '40px', marginRight: '20px' }} src={logoImg} alt="" />
                        <div>
                            <p style={{ padding: 0, margin: 0 }}>Lorem ipsum dolor{!isSmallScreen && ' consectetur adipisicing elit.'}</p>
                            <p style={{ padding: 0, margin: 0, color: 'var(--sec-color)' }}>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                    <div onClick={scrollToTop} style={{ display: 'flex', alignItems: 'center', cursor: "pointer" }}>
                        <p style={{ display: isSmallScreen2 ? 'none' : 'block' }}>
                            Scroll to Top
                        </p>
                        <IoArrowUpOutline style={{ color: 'var(--main-color)', padding: '9px', backgroundColor: 'var(--btn-bg-color)', borderRadius: '10px', marginLeft: '20px' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer