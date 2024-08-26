import Link from 'next/link';
import React from 'react';
import logo from '@/assets/logo.svg'
import Image from 'next/image';
import ThemeButton from '../ThemeButton/ThemeButton';

const Navbar = () => {

    const navItems = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'About',
            link: '/about'
        },
        {
            title: 'Services',
            link: '/services'
        },
        {
            title: 'Blogs',
            link: '/blogs'
        },
        {
            title: 'Contact',
            link: '/contact'
        },
    ]


    return (
        <nav className=' bg-base-100'>

            <div className="container mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="min-h-screen flex flex-col items-center justify-center gap-6 text-white bg-slate-800 bg-opacity-90 menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                navItems?.map(items =>
                                    <Link href={items.link}>{items.title}</Link>
                                )
                            }
                        </ul>
                    </div>
                    <Link href={'/'}>
                        <Image
                            src={logo}
                            alt='logo'
                            width={80}
                            height={60}>
                        </Image>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center justify-center gap-4">
                        {
                            navItems?.map(items =>
                                <Link 
                                key={items.link}
                                href={items.link}

                                >
                                    {items.title}
                                </Link>
                            )
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <ThemeButton
                    name={'Appointment'}
                    outlined={ true }
                    ></ThemeButton>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;