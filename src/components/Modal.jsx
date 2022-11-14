import React, { useState } from 'react'

const Modal = (props) => {
    // const [hidden, setHidden] = useState(props.isHidden)
    // console.log(hidden);
    const open = props.isHidden ? 'fixed w-full bg-grey mt-0 m-0 modal' : 'hidden';
  return (
    <div className={open}>
        <div className='flex justify-center items-center h-full'>

        <div className='bg-white p-[1rem] px-0 pt-0 rounded-md w-[24rem]'>
            <h1 className='p-[15px] font-bold text-[24px] line-[29px]'>Connect Wallet</h1>
            <hr />
            <div className='px-[20px]'>
                <p className='text-[16px] mt-6 mb-3'>Choose your preferred Wallet</p>
                <div>
                    <h1 className='border p-[10px] mb-2 rounded-md'>Metamask</h1>
                </div>
                <div>
                    <h1 className='border p-[10px] rounded-md'>WalletConnect</h1>
                </div>
                <button onClick={()=> props.changeVal()}>close</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Modal