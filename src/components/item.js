import Header from "./Header";
import React from 'react';
import Button from './Buttons'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './item.css'

const Item = ({title,desc,desclink,backgroundimg,leftBtnText,leftBtnLink
    ,rightBtnText,rightBtnLink,twoButtons,first}) => {
    return (
        <div className="item" style={{
            backgroundImage: `url(${backgroundimg})`
        }}>
            <div className="item__container">
                <div className="item__text">
                    <p>{title}</p>
                    <div className="item__desc">
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="item__lowerthird">
                    <div className="item__buttons">
                        <Button imp='Primary' text={leftBtnText} link = {leftBtnLink}/>
                        {twoButtons && (
                            <Button imp = 'Secondary' text = {rightBtnText} link = {rightBtnLink}/>   
                        )} 
                    </div>
                    <div className="item__expand">
                        <ExpandMoreIcon/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;