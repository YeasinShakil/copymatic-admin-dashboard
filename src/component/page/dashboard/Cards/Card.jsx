import { LayoutGroup } from 'framer-motion';
import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './card.css';
 

// parent card
const Card = (props) => {
    const [expanded, setExpanded] = useState(false);
    return (
            <LayoutGroup>
                {
                    expanded ? (
                        'expanded'
                    ): (
                        <CompactCard param={props}></CompactCard>
                    )
                }
            </LayoutGroup>
    );
};

// Compact Card

function CompactCard({param}) {
    const Png = param.png;
    return(
        <div className=' flex flex-1 h-[7rem] rounded-[0.7rem] text-white relative cursor-pointer hover:shadow-none' style={{background: `${param.color.backGround}`, boxShadow:`${param.color.boxShadow}`}}>
            <div className='radialBar'>
                <CircularProgressbar
                value={param.barValue}
                text={`${param.barValue}%`}
                />
            </div>
            <div>
                <Png/>
                <span>${param.value}</span>
                <span>Last 24 hours</span>
            </div>
        </div>
    )
}
export default Card;