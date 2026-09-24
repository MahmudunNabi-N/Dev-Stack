import Logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <nav className='sticky top-0 z-50 flex justify-between items-center mx-auto max-w-[1280px] px-6 py-10 sm:py-12 lg:grid-cols-2 lg:gap-8 lg:py-20 bg-white'>
            <img src={Logo} alt="Logo" />
         <ul className='flex gap-10 items-center'>
            <li><a href="/">Home</a></li>
            <li><a href="/">Technologies </a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
         </ul>
        <div className='flex gap-5'>

         <button className="btn btn-active btn-secondary bg-white text-black">Login</button>
         <button className="btn btn-active btn-secondary">Signup</button>
        </div>


        </nav>
    );
};

export default Nav;