import React from 'react'
import FooterComp from './FooterComp'

const Footer = () => {
  return (
    <div className='bg-black'>
        <div className='mx-auto container text-white flex flex-col md:flex-row justify-between py-[3rem]'>
            <div>
                <img src="Group.svg" alt="metaNfts" className='mb-[5rem]'/>
                <div className='mb-[2rem] flex items-center justify-between w-[6rem]'>
                    <img src="facebook.png" alt="" />
                    <img src="ig.png" alt="" />
                    <img src="twitter.png" alt="" />
                </div>
                <p className='text-white'>2022 Metabnb</p>
            </div>
            <FooterComp 
                head="Community"
                one="NFT"
                two="Tokens"
                three="Landlords"
                four="Discord"
            />
            <FooterComp 
                head="Places"
                one="Castle"
                two="Farms"
                three="Beach"
                four="Learn More"
            />
            <FooterComp 
                head="About Us"
                one="Road Map"
                two="Creators"
                three="Career"
                four="Contact Us"
            />
        </div>
    </div>
  )
}

export default Footer