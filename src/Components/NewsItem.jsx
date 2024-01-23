import React from 'react';
import '../App.css';
import deafultNews from "../assets/defaultImg.jpg";
import './NewsItem.css'

const NewsItem = (props) => {
    const {title, description, imgUrl, newsUrl, author, date, source} = props;
  return (
    <div className='w-full card customFont flex flex-col relative h-fit max-sm:gap-y-2 gap-y-4 bg-cardBg rounded-lg text-white '>
      <span className='absolute bg-blueBg text-slate-100 -top-3 rounded-md px-2 font-serif -right-3'><small>{source}</small></span>
      <img src={imgUrl ? imgUrl: deafultNews} className='w-full h-[200px] rounded-t-lg object-cover' alt="News Item" loading='lazy' />
      <div className='flex justify-between h-[70%] flex-col max-sm:gap-y-3 gap-y-5 p-4'>
        <div className='flex flex-col max-sm:gap-y-2 gap-y-5'>
            <h1 className='text-xl max-sm:text-base tracking-wide font-semibold'>{title.length > 100 ? title.substring(0, 100) : title}</h1>
            <p className=' text-slate-300 max-sm:text-sm'>{ description ? description.length > 150 ? description.substring(0, 150) : description : <div className=''>"No description found"</div>}</p>
        </div>
        <div className='flex flex-col max-sm:gap-y-2 gap-y-5'>
            <p><small className=' text-slate-200 max-phone:text-xs'>By {author} at { new Date(date).toGMTString() }</small></p>
            <a href={newsUrl} target='_blank' rel='noreferrer' className='bg-blueBg text-white w-fit px-5 py-2 cursor-pointer  rounded-lg hover:bg-blue-500 max-sm:text-sm transition-all duration-300 ease-in-out max-sm:mx-auto'>Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
