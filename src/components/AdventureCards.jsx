import React from 'react'

const AdventureCards = (props) => {
  return (
    <div className='border-2 w-fit p-3 rounded-2xl flex flex-col m-auto'>
        <img src={props.img} alt="" width="260px" height="265px"/>
        <div className='flex justify-between text-[12px]'>
            <p>Desert King</p>
            <p className='font-bold'>IMBT per night</p>
        </div>
        <div className='flex justify-between text-[12px]'>
            <p>2345km away</p>
            <p>available for 2weeks stay</p>
        </div>
        <div className='flex space-x-2'>
            <img src="star.png" alt="" />
            <img src="star.png" alt="" />
            <img src="star.png" alt="" />
            <img src="star.png" alt="" />
            <img src="star.png" alt="" />
        </div>
    </div>
  )
}

export default AdventureCards