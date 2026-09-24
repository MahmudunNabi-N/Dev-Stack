import Logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white" >
            <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
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
            </div>


        </nav>
    );
};

export default Nav;