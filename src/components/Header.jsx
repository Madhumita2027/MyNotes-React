import logo from '../assets/logo.png';


function Header() {
  

    return (
        <>
            <div className='bg-yellow-400 h-16 w-full shadow-sm shadow-white flex'>
                <img src={logo} alt='logo' className='h-16 w-16 mx-8'/>
                <h1 className='text-black mt-4 font-bold text-xl'>My Notes</h1>
            </div>
        </>
    )
}

export default Header