import React from 'react';


function Footer() {

    const year = new Date().getFullYear()

    return ( 
        <>
            <footer className='mt-44'>
                <p className='bg-gray-700 text-center py-0.5'> copyright &copy; {year} </p>
            </footer>
        </>
     );
}

export default Footer;