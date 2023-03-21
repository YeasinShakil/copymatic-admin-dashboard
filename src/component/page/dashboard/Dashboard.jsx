import React, { useContext } from 'react';
import { FaHandSparkles, FaMicroblog, FaPhotoVideo, FaCartArrowDown } from 'react-icons/fa'
import { BsArrowRightShort, BsQrCodeScan, BsMeta } from 'react-icons/bs'
import { GrArticle } from 'react-icons/gr'
import { TbWriting, TbSocial } from 'react-icons/tb';
import { ImParagraphLeft } from 'react-icons/im';
import { SiWritedotas } from 'react-icons/si';
import { FcAbout, FcFaq } from 'react-icons/fc';
import noteContext from '../../../Context/noteContext';

const Dashboard = () => {
    const open = useContext(noteContext);
    const wordsGenerate = [
        { titel: 'Words Generated', description: '95210 words' },
        { titel: 'Items Generated', description: '1361 items' },
        { titel: 'Time Saved', description: '381 hours' },
        { titel: 'Tools Used', description: '4/81' }
    ]
    const popularTools = [
        {
            title: 'Article Generator',
            description: 'Turn a title and an outline into a fully SEO- optimized and long article with this Ai editor',
            icon: <div className='
            bg-red-600/50  h-8 w-8 border flex justify-center items-center rounded-full' >
                < GrArticle />
            </div>,
        },
        {
            title: 'Blog Post Writer',
            description: 'Write blog article in a minutes with the most advanced Ai writing assistant',
            icon: <div className='
            bg-yellow-600/50  h-8 w-8 border flex justify-center items-center rounded-full' >
                < FaMicroblog />
            </div>,
        },
        {
            title: 'Content Rewriter',
            description: 'Turn a title and an outline into a fully SEO- optimized and long article with this Ai editor',
            icon: <div className='
            bg-green-600/50  h-8 w-8 border flex justify-center items-center rounded-full' >
                < TbWriting />
            </div>,
        },
        {
            title: 'Paragraph Generator',
            description: 'Turn a title and an outline into a fully SEO- optimized and long article with this Ai editor',
            icon:
                <div className='
            bg-purple-600/50  h-8 w-8 border flex justify-center items-center rounded-full' >
                    < ImParagraphLeft />
                </div>,
        },
        {
            title: 'Image Generator',
            description: 'Turn a title and an outline into a fully SEO- optimized and long article with this Ai editor',
            icon: <div className='
            bg-blue-600/50  h-8 w-8 border flex justify-center items-center rounded-full' >
                < FaPhotoVideo />
            </div>,
        },
        {
            title: 'Product Description',
            description: 'Turn a title and an outline into a fully SEO- optimized and long article with this Ai editor',
            icon: <div className='
            bg-red-600/50  h-8 w-8 border flex justify-center items-center rounded-full' >
                < BsQrCodeScan />
            </div>,
        },
        {
            title: 'Sentence Rewriter',
            description: 'Turn a title and an outline into a fully SEO- optimized and long article with this Ai editor',
            icon: <div className='
            bg-orange-600/50  h-8 w-8 border flex justify-center items-center rounded-full' >
                < SiWritedotas />
            </div>,
        },
        {
            title: 'Ecommerce Product Description',
            description: 'Turn a title and an outline into a fully SEO- optimized and long article with this Ai editor',
            icon: <div className='
            bg-emerald-600/50  h-8 w-8 border flex justify-center items-center rounded-full' >
                < FaCartArrowDown />
            </div>,
        },
        {
            title: 'Social Media Post(Business)',
            description: 'Turn a title and an outline into a fully SEO- optimized and long article with this Ai editor',
            icon: <div className='
            bg-violet-600/50  h-8 w-8 border flex justify-center items-center rounded-full' >
                < TbSocial />
            </div>,
        },
        {
            title: 'Meta Descriptions',
            description: 'Turn a title and an outline into a fully SEO- optimized and long article with this Ai editor',
            icon: <div className='
            bg-fuchsia-600/50  h-8 w-8 border flex justify-center items-center rounded-full' >
                < BsMeta />
            </div>,
        },
        {
            title: 'About Us',
            description: 'Turn a title and an outline into a fully SEO- optimized and long article with this Ai editor',
            icon: <div className='
            bg-rose-600/50  h-8 w-8 border flex justify-center items-center rounded-full' >
                < FcAbout />
            </div>,
        },
        {
            title: 'FAQ Answers',
            description: 'Turn a title and an outline into a fully SEO- optimized and long article with this Ai editor',
            icon: <div className='
            bg-purple-600/50  h-8 w-8 border flex justify-center items-center rounded-full' >
                < FcFaq />
            </div>,
        },
    ]
    return (
        <div className={`flex flex-col absolute top-12 ${open.open ? 'left-[18%]' : 'left-[7%]'} mt-4`}>

            <p className=' flex items-center text-2xl font-bold mb-4 text-gray-700'><span className='mr-2'><FaHandSparkles /></span>  Hey, let's create something amazing today!</p>
            <div className=' grid grid-cols-4 gap-8 mt-2 '>
                {wordsGenerate.map((value, i) => (
                    <div className={`${open.open ? 'w-[250px]' : 'w-[285px]'} bg-white px-4 py-2 rounded-sm`}>
                        <h2 className=' text-gray-500 text-sm'>{value.titel}</h2>
                        <h2 className=' text-lg font-bold text-gray-700'>{value.description}</h2>
                    </div>
                ))}
            </div>

            <div className=' mt-8 flex justify-between'>
                <div>
                    <p className=' text-xl text-gray-700 font-bold'>Most Popular Tools</p>
                    <p className='text-gray-500'>These are the most popular tools and a good place to start. Give them a try!</p>
                </div>
                <div className=''>
                    <button className='flex items-center bg-white px-3 py-1 rounded-md border text-gray-700'>All Tools <BsArrowRightShort /></button>
                </div>
            </div>
            <div className=' grid grid-cols-4 mt-4 gap-8'>
                {popularTools.map((value, i) => (
                    <div className={`${open.open ? 'w-[250px]' : 'w-[285px]'} bg-white px-4 py-2 rounded-sm cursor-pointer`}>
                        <div>
                            <p className=''>{value.icon}</p>
                        </div>
                        <p className='font-bold text-gray-900 py-1'>{value.title}</p>
                        <p className='text-gray-500 py-1'>{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;