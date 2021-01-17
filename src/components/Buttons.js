import React from 'react';


const Buttons = ({imp, text, link}) => {
    return (
        <div className={`button ${imp == 'Secondary' ? 'button__white':''}`}>
            <a href={link}>
                {text}
            </a>
        </div>
    );
};

export default Buttons;