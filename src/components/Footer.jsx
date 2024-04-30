import React from 'react';


function Footer() {

    const year = new Date().getFullYear()

    return ( 
        <div className="fixed text-center w-full bottom-0">
            <footer>
                <p className='bg-gray-700 text-center py-0.5'> copyright &copy; Madhumita {year} </p>
            </footer>
        </div>
     );
}

export default Footer;