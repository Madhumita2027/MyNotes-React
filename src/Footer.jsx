import React from 'react';


function Footer() {

    const year = new Date().getFullYear()

    return ( 
        <div className="flex flex-col h-screen justify-end">
            <footer>
                <p className='bg-gray-700 text-center py-0.5'> copyright &copy; {year} </p>
            </footer>
        </div>
     );
}

export default Footer;