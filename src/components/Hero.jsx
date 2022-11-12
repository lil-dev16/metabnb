import React from 'react'

const Hero = () => {
  return (
    <div className='container mx-auto grid grid-cols-2 gap-14 mt-[60px] justify-between'>
        <div className='grid gap-1'>
            <h1 className='text-4xl'>Rent a <span className='text-purple'>Place</span> away from <span className='text-purple'>Home</span> in the <span className='text-purple'>Metaverse</span></h1>
            <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
            <div className=''>
            <input type="text" className=' input border-2 p-3 py-2 w-[250px] rounded-l-md outline-0' placeholder='Search for location'/><button className='p-2.5 px-14 bg-wallet-gradient rounded-r-md cursor-pointer text-white'>Search</button>  
            </div>
        </div>
        <div className='grid grid-cols-2 gap-2'>
            <div className='mt-10 grid gap-2'>
                <img src="image-3.png" alt="" />
                <img src="image-4.png" alt="" />
            </div>
            <div className='mt-[-29px]'>
                <img src="image-5.png" alt="" />
                <img src="image-6.png" alt="" className='mt-2'/>
            </div>
        </div>
    </div>
  )
}

export default Hero