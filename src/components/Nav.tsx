import { useState } from "react";
import Logo from "../assets/logo-text.png";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white">
            <div className="mx-auto flex h-16 w-full max-w-300 items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-10">

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex cursor-pointer flex-col gap-1.5 lg:hidden"
                    aria-label="Toggle menu"
                >
                    <span className="h-0.5 w-5 bg-slate-500"></span>
                    <span className="h-0.5 w-5 bg-slate-500"></span>
                    <span className="h-0.5 w-5 bg-slate-500"></span>
                </button>

                {/* Logo */}
                <a href="/" className="shrink-0">
                    <img
                        src={Logo}
                        alt="Dev Stack"
                        className="w-23.75 sm:w-26.25"
                    />
                </a>

                {/* Desktop Navigation */}
                <ul className="hidden items-center gap-8 text-sm text-slate-700 lg:flex">
                    <li>
                        <a
                            href="/"
                            className="transition hover:text-pink-500"
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            href="#technologies"
                            className="transition hover:text-pink-500"
                        >
                            Technologies
                        </a>
                    </li>

                    <li>
                        <a
                            href="#projects"
                            className="transition hover:text-pink-500"
                        >
                            Projects
                        </a>
                    </li>

                    <li>
                        <a
                            href="#about"
                            className="transition hover:text-pink-500"
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            href="#contact"
                            className="transition hover:text-pink-500"
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Desktop Buttons */}
                <div className="hidden items-center gap-4 lg:flex">
                    <button className="cursor-pointer rounded-md border border-pink-500 bg-white px-5 py-2 text-sm font-medium text-slate-800 transition hover:bg-pink-50">
                        Login
                    </button>

                    <button className="cursor-pointer rounded-md bg-pink-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-pink-600">
                        Signup
                    </button>
                </div>

                {/* Mobile Buttons */}
                <div className="flex items-center gap-2 lg:hidden">
                    <button className="cursor-pointer px-2 text-xs font-medium text-pink-500">
                        Sign In
                    </button>

                    <button className="cursor-pointer rounded-full bg-pink-500 px-3 py-1.5 text-[10px] font-medium text-white">
                        Sign Up
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
                    <ul className="flex flex-col gap-4 text-sm text-slate-700">

                        <li>
                            <a
                                href="/"
                                onClick={() => setMenuOpen(false)}
                                className="block hover:text-pink-500"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="#technologies"
                                onClick={() => setMenuOpen(false)}
                                className="block hover:text-pink-500"
                            >
                                Technologies
                            </a>
                        </li>

                        <li>
                            <a
                                href="#projects"
                                onClick={() => setMenuOpen(false)}
                                className="block hover:text-pink-500"
                            >
                                Projects
                            </a>
                        </li>

                        <li>
                            <a
                                href="#about"
                                onClick={() => setMenuOpen(false)}
                                className="block hover:text-pink-500"
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contact"
                                onClick={() => setMenuOpen(false)}
                                className="block hover:text-pink-500"
                            >
                                Contact
                            </a>
                        </li>

                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;