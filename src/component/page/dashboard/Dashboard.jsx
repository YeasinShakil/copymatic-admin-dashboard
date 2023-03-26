import React, { useContext } from 'react';
import { FaHandSparkles, FaMicroblog, FaPhotoVideo, FaCartArrowDown } from 'react-icons/fa'
import { BsArrowRightShort, BsQrCodeScan, BsMeta } from 'react-icons/bs'
import { GrArticle } from 'react-icons/gr'
import { TbWriting, TbSocial } from 'react-icons/tb';
import { ImParagraphLeft } from 'react-icons/im';
import { SiWritedotas } from 'react-icons/si';
import { FcAbout, FcFaq } from 'react-icons/fc';
import noteContext from '../../../Context/noteContext';
import Cards from './Cards/Cards';

const Dashboard = () => {
    const open = useContext(noteContext);
    
    
    return (
        <div className={`flex flex-col absolute top-12 ${open.open ? 'left-[18%]' : 'left-[7%]'} mt-4`}>

           <h1 className=' font-bold text-xl'>Dashboard</h1>
           <Cards></Cards>
        </div>
    );
};

export default Dashboard;