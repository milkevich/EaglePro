import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import centralD from '../assets/bilaldesigner-attachments/centrald.png'

const Review = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isSmallScreen2, setIsSmallScreen2] = useState(false);
    const [isSmallScreen3, setIsSmallScreen3] = useState(false);
    const [isSmallScreen4, setIsSmallScreen4] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 600);
            setIsSmallScreen2(window.innerWidth <= 670);
            setIsSmallScreen3(window.innerWidth <= 500);
            setIsSmallScreen4(window.innerWidth <= 1340);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const reviews = [
        {
            name: "Rebel Yell Transport 2002",
            date: "August 28",
            review: "Good company to work with. Went above and beyond to make sure vehicle were loaded on time, due to customer leaving town next morning",
            star: 5,
        },
        {
            name: "Nissan of Cool Springs",
            date: "April 13",
            review: "EXCELLENT CARRIER",
            star: 5,
        },
        {
            name: "Car Smart",
            date: "August 27",
            review: "Thanks for the great service. Appreciate the smooth pickup and delivery! A++ Recommend!",
            star: 5,
        },
        {
            name: "Car Shipping Direct",
            date: "August 13",
            review: "EXCELLENT COMMUNICATION AND RIGHT ON TIME!!!",
            star: 5,
        },
        {
            name: "Auction XM",
            date: "May 7",
            review: "Excellent carrier to work with! Highly recommend",
            star: 5,
        },
        {
            name: "Golden I Transport LLC",
            date: "July 31",
            review: "The communication was great and the customer loved the service, we will definetely use again!",
            star: 5,
        },
        {
            name: "AAA Car Go Plus Inc",
            date: "April 26",
            review: "Great company thanks for the job",
            star: 5,
        },
        {
            name: "USA Auto Shipping LLC",
            date: "July 26",
            review: "We are very satisfied with your work and business with us. We are looking forward to working with you in the near future.",
            star: 5,
        },
        {
            name: "AJ Auto Sales",
            date: "June 16",
            review: "GREAT SERVICE HIGHLY RECOMMEND 💯",
            star: 5,
        },
        {
            name: "Safeeds Transport Inc",
            date: "January 2",
            review: "Good company with a strong focus on customer service, will use again",
            star: 5,
        },
    ];

    return (
        <div style={{ overflow: 'hidden', width: '100%', position: 'relative', marginTop: '30px' }}>
            <div style={{ display: isSmallScreen4 ? 'block' : 'flex', gap: '10px', alignItems: 'start' }}>
                {!isSmallScreen &&
                    <div style={{ height: '70px', overflow: 'hidden', marginTop: '10px', paddingRight: '20px' }}>
                        <h1 style={{ margin: 0, padding: 0, fontSize: isSmallScreen ? '24px' : '32px', marginTop: '-10px' }}>Trusted Perspectives</h1>
                        <p style={{ color: 'var(--sec-color)', margin: 0, padding: 0, fontSize: isSmallScreen ? '14px' : '16px', marginTop: '-5px' }}>{isSmallScreen2 ? 'Lorem ipsum dolor sit amet consectetur' : 'Lorem ipsum dolor sit amet consectetur, adipisicing'}</p>
                    </div>
                }
                <div style={{ display: 'flex', alignItems: 'center', paddingLeft: isSmallScreen4 ? '0px' : '20px', borderLeft: isSmallScreen4 ? 'none' : '1px solid var(--border-color)', height: '70px', overflow: 'hidden' }}>
                    <img src={centralD} style={{ width: '45px' }} alt="Central Dispatch Logo" />
                    <div style={{ marginLeft: '15px' }}>
                        <h3 style={{ margin: 0, fontSize: '26px', fontWeight: '400' }}>Central Dispatch</h3>
                        <p style={{ margin: 0, marginLeft: '0px', color: 'var(--sec-color)', marginTop: '-5px' }}>by Cox Automotive</p>
                    </div>
                </div>
            </div>
            <div style={{ width: 'calc(100% - 2px)', display: isSmallScreen4 ? 'block' : 'flex', justifyContent: 'space-between', marginBottom: '40px', marginTop: '20px', border: '1px solid var(--border-color)', alignItems: 'center', borderRadius: '20px', }}>
                <div style={{ width: '100%', textAlign: 'center', paddingRight: '20px', borderRight: '1px solid var(--border-color)' }}>
                    <h4 style={{ fontSize: '16px', color: 'var(--sec-color)' }}>Overall Ratings Average</h4>
                    <h3 style={{ fontSize: '24px' }}>4.9 out of 5.0</h3>
                    <Rating size='large' max={5} name="read-only" defaultValue={5} value={5} readOnly />
                    <p style={{ color: 'var(--sec-color)', marginTop: 0 }}>697 Reviews</p>
                </div>
                <div style={{ width: '100%', padding: '20px 0px', marginLeft: isSmallScreen4 ? '-10px' : '-20px' }}>
                    <h4 style={{ fontSize: '16px', color: 'var(--sec-color)', textAlign: 'center', margin: 0, marginLeft: isSmallScreen3 ? '20px' : '' }}>Average Detail Ratings</h4>
                    <div style={{ display: isSmallScreen3 ? 'block' : 'flex', justifyContent: 'space-between', marginLeft: isSmallScreen3 ? '20px' : '' }}>
                        <div style={{ width: '100%', textAlign: 'center' }}>
                            <p>Timeliness</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', maxWidth: '45px', margin: 'auto', marginTop: '-30px' }}>
                                <p>4.9</p>
                                <Rating size='small' max={1} name="read-only" defaultValue={1} value={1} readOnly />
                            </div>
                        </div>
                        <div style={{ width: '100%', textAlign: 'center' }}>
                            <p>Communication</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', maxWidth: '45px', margin: 'auto', marginTop: '-30px' }}>
                                <p>4.9</p>
                                <Rating size='small' max={1} name="read-only" defaultValue={1} value={1} readOnly />
                            </div>
                        </div>
                        <div style={{ width: '100%', textAlign: 'center' }}>
                            <p>Documentation</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', maxWidth: '45px', margin: 'auto', marginTop: '-30px' }}>
                                <p>4.9</p>
                                <Rating size='small' max={1} name="read-only" defaultValue={1} value={1} readOnly />
                            </div>
                        </div>
                    </div>
                    <div style={{ height: '1px', width: 'calc(100% - 120px)', backgroundColor: 'var(--border-color)', marginLeft: '70px' }} />
                    <div style={{ marginLeft: isSmallScreen3 ? '40px' : '70px' }}>
                        <p style={{ display: 'flex', gap: '20px' }}><strong>98%</strong> Payment terms met</p>
                        <p style={{ display: 'flex', gap: '20px' }}><strong>97%</strong> Would work with again</p>
                        <p style={{ display: 'flex', gap: '20px' }}><strong>99%</strong> {isSmallScreen3 ? 'Delivered in expected condition' : 'Vehicle delivered in expected condition'}</p>
                    </div>
                </div>
            </div>
            <div style={{
                display: 'flex',
                gap: '20px',
                animation: 'scroll 40s linear infinite'
            }}>
                {[...reviews, ...reviews].map((review, index) => (
                    <div key={index} style={{ minWidth: '350px', backgroundColor: 'var(--main-bg-color)', border: '1px solid var(--border-color)', padding: '10px 30px 10px 30px', borderRadius: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '-10px', marginBottom: '-15px' }}>
                            <h4>{review.name}</h4>
                            <p style={{ color: 'var(--sec-color)' }}>{review.date}</p>
                        </div>
                        <Rating size='small' max={5} name="read-only" defaultValue={review.star} value={review.star} readOnly />
                        <p style={{ maxHeight: '50px', textOverflow: 'ellipsis', overflow: 'hidden' }}>{review.review}</p>
                    </div>
                ))}
            </div>
            <style>
                {`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-4315px); }
                    }
                `}
            </style>
        </div>
    );
};

export default Review;
