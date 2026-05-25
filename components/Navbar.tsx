'use client'

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { MdMenu, MdPerson } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false);
  const { data: session, status} = useSession()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const navBg = isHome ? (isScrolled ? 'bg-black border-0 shadow-lg shadow-orange-400/10' : 'bg-transparent') : 'bg-black border-0 shadow-lg shadow-orange-400/10';

  return (
    <>
      <nav className={`z-20 fixed top-0 text-white flex w-full justify-between lg:px-20 py-4 px-10 ${navBg}`}>
        <div className='flex-1 flex justify-start'>
          <Link href='/' className='font-bold text-[20px]'>
            <h1 className="text-2xl font-bold italic tracking-tighter">LUX<span className="text-orange-500">DRIVE</span></h1>
          </Link>
        </div>
        <ul className='lg:flex items-center gap-10 text-[16px] flex-1 justify-center hidden '>
          <li className="hover:text-orange-500 transition-all duration-300 uppercase tracking-wider">
            <Link href='/blog'>Blog</Link>
          </li>
          <li className="hover:text-orange-500 transition-all duration-300 uppercase tracking-wider">
            <Link href='/news'>News</Link>
          </li>
          <li className="hover:text-orange-500 transition-all duration-300 uppercase tracking-wider">
            <Link href='/about'>About</Link>
          </li>
          <li className="hover:text-orange-500 transition-all duration-300 uppercase tracking-wider">
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
        <div className='flex-1 lg:flex hidden justify-end'>
          {status === "authenticated" ? (
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-orange-500">[ {session.user?.name} ]</span>
              <button onClick={() => signOut()} className="flex flex-row items-center gap-1 text-xs uppercase tracking-wider text-neutral-400 hover:text-white">
                <PiSignOutBold/>
                <span>Sign Out</span>
              </button>
            </div>
          ) : (
            <Link href="/signin" className='flex flex-row gap-3 uppercase text-xs tracking-wider items-center cursor-pointer hover:text-orange-500'>
              <MdPerson className=''/>
              <span>Sign In</span>
            </Link>
          )}
        </div>

        <MdMenu 
          className={`lg:hidden flex items-center text-[37px] cursor-pointer ${isOpen? 'hidden' : ''}`}
          onClick={() => setIsOpen(true)} 
        />
        <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)}/>
      </nav>

    </>
  )
}

export default Navbar