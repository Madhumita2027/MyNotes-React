import { useState } from 'react'


function Header() {
  

    return (
        <>
            <div className='bg-yellow-400 h-20 w-full flex'>
                <img src='https://play-lh.googleusercontent.com/36szRvmqeewn6fxpx9V88zhpPU3c84Im9zjAFPZl-cReiztnAD6cn0jSnWBGsNNdPsU' alt='logo' className='h-20 w-15 mx-6'/>
                <h1 className='text-black mt-6 mb-6 font-bold text-xl'>My Notes</h1>
            </div>
        </>
    )
}

export default Header