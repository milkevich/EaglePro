import React, { useEffect, useState } from 'react';
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaRegIdCard } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const WhyUs = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isSmallScreen2, setIsSmallScreen2] = useState(false);
    const [expandedItem, setExpandedItem] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 505);
            setIsSmallScreen2(window.innerWidth <= 606);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleToggle = (index) => {
        setExpandedItem(expandedItem === index ? null : index);
    };

    return (
        <>
            {!isSmallScreen ?
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', marginBottom: '60px', marginTop: '30px' }}>
                    <h3 style={{ fontSize: isSmallScreen2 ? '24px' : '32px', margin: 0 }}>Why EaglePro?</h3>
                    <p style={{ margin: 0, color: 'var(--sec-color)' }}>Lorem ipsum dolor sit amet consectetur elit.</p>
                    <div style={{
                        display: 'grid',
                        width: '100%',
                        marginTop: '30px',
                        gap: '65px',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        alignContent: 'space-between',
                        flexGrow: 1
                    }}>
                        {[...Array(10)].map((_, index) => (
                            <div key={index} style={{ maxWidth: '200px', paddingRight: '20px' }}>
                                <div style={{
                                    width: '100px',
                                    height: '100px',
                                    backgroundColor: 'var(--main-bg-color)',
                                    borderRadius: '100px',
                                    border: '1px solid var(--border-color)',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    display: 'flex'
                                }}>
                                    {index % 3 === 0 ? <FaScrewdriverWrench size={28} /> : index % 3 === 1 ? <RiCustomerService2Fill size={32} /> : <FaRegIdCard size={32} />}
                                </div>
                                <h3 style={{ margin: 0, marginBottom: '5px', marginTop: '10px' }}>Lorem</h3>
                                <p style={{ color: 'var(--sec-color)', margin: 0 }}>Lorem ipsum dolor sit amet consectetur </p>
                            </div>
                        ))}
                    </div>
                </div>
                :
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', marginBottom: '30px', marginTop: '30px' }}>
                    <h3 style={{ fontSize: isSmallScreen2 ? '24px' : '32px', margin: 0 }}>Why EaglePro?</h3>
                    <p style={{ margin: 0, color: 'var(--sec-color)' }}>Lorem ipsum dolor sit amet elit.</p>
                    <div style={{
                        display: 'flex',
                        width: '100%',
                        marginTop: '30px',
                        gap: '15px',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}>
                        {[...Array(10)].map((_, index) => (
                            <div
                                key={index}
                                onClick={() => handleToggle(index)}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    border: '1px solid var(--border-color)',
                                    padding: '15px 20px',
                                    borderRadius: '20px',
                                    cursor: 'pointer',
                                    transition: 'max-height 0.3s ease-in-out, padding 0.3s ease-in-out',
                                    maxHeight: expandedItem === index ? '300px' : '52px',
                                    overflow: 'hidden'
                                }}
                            >
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                        <div style={{
                                            width: '50px',
                                            height: '50px',
                                            backgroundColor: 'var(--main-bg-color)',
                                            borderRadius: '100px',
                                            border: '1px solid var(--border-color)',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            display: 'flex'
                                        }}>
                                            {index % 3 === 0 ? <FaScrewdriverWrench size={16} /> : index % 3 === 1 ? <RiCustomerService2Fill size={16} /> : <FaRegIdCard size={16} />}
                                        </div>
                                        <div style={{ marginTop: '-10px' }}>
                                            <h3 style={{ margin: 0, marginBottom: '5px', marginTop: '8px' }}>Lorem</h3>
                                            <p style={{ color: 'var(--sec-color)', margin: 0, marginTop: '-10px' }}>Lorem ipsum dolor sit amet </p>
                                        </div>
                                    </div>
                                    <div style={{
                                        width: '35px',
                                        height: '35px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '10px',
                                        backgroundColor: 'var(--btn-bg-color)'
                                    }}>
                                        {expandedItem === index ? <IoIosArrowUp size={16} /> : <IoIosArrowDown size={16} />}
                                    </div>
                                </div>
                                <div
                                    style={{
                                        marginTop: '10px',
                                        width: '100%',
                                        color: 'var(--sec-color)',
                                        opacity: expandedItem === index ? 1 : 0,
                                        transition: 'opacity 0.3s ease-in-out'
                                    }}
                                >   
                                    <p style={{ margin: 0 }}>Expanded content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </>
    );
}

export default WhyUs;
