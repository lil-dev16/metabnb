import React, { useState } from 'react'

const Modal = (props) => {
    // const [hidden, setHidden] = useState(props.isHidden)
    // console.log(hidden);
    const open = props.isHidden ? 'fixed w-full bg-grey mt-0 m-0 modal' : 'hidden';
  return (
    <div className={open}>
        <div className='flex justify-center items-center h-full'>

        <div className='bg-white p-[1rem] px-0 pt-0 rounded-md w-[24rem]'>
            <div className='flex items-center justify-between pr-[20px]'>
                <h1 className='p-[15px] font-bold text-[24px] line-[29px]'>Connect Wallet</h1>
                <img src="x.png" alt="" onClick={()=> props.changeVal()} className="cursor-pointer"/>
            </div>
            <hr />
            <div className='px-[20px]'>
                <p className='text-[16px] mt-6 mb-3'>Choose your preferred Wallet</p>
                <div className='border p-[10px] mb-2 rounded-md flex justify-between items-center cursor-pointer' onClick={()=> props.changeVal()}>
                    <div className='flex items-center ' >
                        <img src="meta.png" alt="" />
                        <h1 className=''>Metamask</h1>
                    </div>
                    <img src="arr.png" alt="" />
                </div>
                <div className='border p-[10px] rounded-md flex justify-between items-center cursor-pointer' onClick={()=> props.changeVal()}>
                    <div className='flex items-center'>
                        <img src="connect.png" alt="" />
                        <h1 className=''>WalletConnect</h1>
                    </div>
                    <img src="arr.png" alt="" />
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Modal