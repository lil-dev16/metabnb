import React from 'react'

const MetaNfts = () => {
  return (
    <div className='bg-wallet-gradient mt-[3rem]'>
        <div className='container mx-auto  grid md:grid-cols-2 gap-[3rem] py-[13rem] '>
            <div className='text-white grid gap-8 w-fit sm:w-[25rem]'>
                <h1 className='text-4xl '>Metabnb NFTs</h1>
                <p >Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                <button className=' bg-white rounded-md h-[48px] text-purple w-[8rem]'>Learn More</button>
            </div>
                {/* <div className=' hidden md:block relative w-[300px] mx-auto lg:ml-auto'>
                    <img src="img9.png" alt="" className='absolute mt-[-100px] w-[200px] md:w-[300px]'/>
                    <img src="img7.png" alt="" className='absolute ml-[-170px] w-[200px] md:w-[300px]'/>
                    <img src="img8.png" alt="" className='absolute mt-[84px] w-[200px] md:w-[300px] ml-[21px]'/>
                </div> */}
              <img src="trpics.png"/>
        </div>
    </div>
  )
}

export default MetaNfts