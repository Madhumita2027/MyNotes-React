import logo from '../assets/logo.png';


function Header() {
  

    return (
        <>
            <div className='bg-yellow-400 h-20 w-full shadow-sm shadow-white flex'>
                <img src={logo} alt='logo' className='h-20 w-15 mx-6'/>
                <h1 className='text-black mt-6 mb-6 font-bold text-xl'>My Notes</h1>
            </div>
        </>
    )
}

export default Header