import Logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <nav className='flex justify-between items-center container mx-auto py-10'>
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