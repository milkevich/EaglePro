import React, { useState } from 'react';
import { HiOutlineUpload } from "react-icons/hi";
import Checkbox from '@mui/material/Checkbox';
import Close from '@mui/icons-material/Close';

const Input = ({ pattern, maxLength, onChange, value, type, placeholder, def, checkbox, select, onClick, name, borderRadius }) => {
    const [uploadedFile, setUploadedFile] = useState(null);

    const inputStyles = {
        padding: "20px",
        borderRadius: borderRadius ? borderRadius : "var(--border-radius)",
        backgroundColor: "var(--main-bg-color)",
        color: "var(--main-color)",
        cursor: "text",
        outline: "none",
        border: "1px solid var(--border-color)",
        boxSizing: "border-box",
        width: '100%'
    };

    const selectStyles = {
        borderRadius: "var(--border-radius)",
        color: "var(--main-color)",
        cursor: "pointer",
        border: "1px solid var(--border-color)",
        padding: "20px 20px",
        position: "relative",
        top: "2px",
        outline: "none",
        backgroundColor: "var(--main-bg-color)",
        width: '100%'
    }

    return (
        <>
            {def &&
                <>
                    <input name={name} autoComplete='on' maxLength={maxLength} pattern={pattern} style={inputStyles} placeholder={placeholder} onChange={onChange} value={value} type={type} />
                </>
            }
            {checkbox && 
            <>
                <Checkbox
                    sx={{
                        marginTop: "2px",
                        color: 'var(--main-bg-color)', // default checkbox color
                        '&.Mui-checked': {
                            color: 'var(--main-bg-color)', // checked color
                            '& .MuiSvgIcon-root': {
                                color: 'var(--main-color)', // icon color when checked
                            }
                        },
                        '& .MuiSvgIcon-root': {
                            backgroundColor: 'var(--main-bg-color)', // checkbox background color
                            borderRadius: '4px', // optional: for rounded corners
                            border: `1px solid var(--border-color)`, // border color
                        }
                    }}
                    checked={value}  
                    onChange={onChange}
                    onClick={onClick}
                    uncheckedIcon={<Close />} 
                    size='medium'
                />
            </>
            }
            {select && 
            <>
            <select defaultValue={"Без опыта"} style={selectStyles} name="Choose one of the options" id="EXP" value={value} onChange={onChange}>
                <option value="Без опыта">No experience</option>
                <option value="Меньше 3х месяцев">1-2 years</option>
                <option value="3 месяца или больше">2-4 years</option>
                <option value="Более чем 6 месяцев">5+ years</option>
            </select>
            </>
            }
        </>
    );
};

export default Input;
