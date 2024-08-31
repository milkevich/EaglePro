import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Review = () => {
    const reviews = [
        {
            name: "Sheila Hull",
            date: "June 3",
            review: "Nice people and a very trustworthy company. They always deliver on their promises.",
            star: 5,
        },
        {
            name: "Betty Reynolds",
            date: "April 13",
            review: "A great company to work with. The team is reliable and always goes the extra mile.",
            star: 5,
        },
        {
            name: "Christine Henderson",
            date: "July 1",
            review: "Good company with a strong commitment to customer satisfaction. I highly recommend.",
            star: 4,
        },
        {
            name: "David Briggs",
            date: "July 13",
            review: "Trustworthy and dependable. They handle everything with care and professionalism.",
            star: 4,
        },
        {
            name: "Diana Scott",
            date: "May 7",
            review: "Nice people and excellent service. They are always on time and very professional.",
            star: 5,
        },
        {
            name: "Mary Martin",
            date: "July 31",
            review: "Good company with a focus on quality service. The team is friendly and helpful.",
            star: 5,
        },
        {
            name: "James Galloway",
            date: "April 26",
            review: "Reliable and trustworthy company. I have always had a positive experience with them.",
            star: 4,
        },
        {
            name: "Gregory Johnson",
            date: "July 26",
            review: "Nice people who really care about their customers. I would recommend them to anyone.",
            star: 4,
        },
        {
            name: "Elizabeth Smith",
            date: "June 16",
            review: "Great service and a trustworthy team. They always deliver on time.",
            star: 4,
        },
        {
            name: "Judy Johnson",
            date: "January 2",
            review: "Good company with a strong focus on customer service. They are always reliable.",
            star: 4,
        },
    ];

    return (
        <div style={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
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
                        <p>{review.review}</p>
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
