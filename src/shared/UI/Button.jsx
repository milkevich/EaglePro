import React from 'react';

const Button = ({ secondary, children, special, singular, onClick, value, width, borderRadius, disabled }) => {
    const buttonStyles = {
        padding: singular ? "0px" : "10px 30px",
        borderRadius: borderRadius ? borderRadius : "var(--border-radius)",
        backgroundColor: secondary ? "var(--main-bg-color)" : "var(--btn-bg-color)",
        color: "var(--main-color)",
        cursor: "pointer",
        outline: "none",
        border: secondary ? "1px solid var(--border-color)" : "1px solid var(--btn-bg-color)",
        fontWeight: special ? 800 : 400,
        height: singular && "27px",
        width: singular && "27px",
        marginBottom: "5px",
        boxSizing: "border-box",
        width: width,
    };

    return (
        <button disabled={disabled} onClick={onClick} value={value} style={buttonStyles}>{children}</button>
    );
};

export default Button;
