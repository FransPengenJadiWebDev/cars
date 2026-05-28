import SearchBar from "./SearchBar"
import { MdClose, MdPerson } from "react-icons/md"
import { useSession, signOut } from 'next-auth/react';
import Link from "next/link"
import Dropdown from "./Dropdown"
import { PiSignOutBold } from "react-icons/pi"
import { categoryOptions, statusOptions, priceOptions } from "@/constants/filters";

const TRENDING_NOW = [
  { id: "01", title: "Bugatti V16 Hybrid production slots entirely sold out", reads: "14K READS" },
  { id: "02", title: "Pristine LaFerrari Aperta heading to Monaco auction block", reads: "9.2K READS" },
  { id: "03", title: "Koenigsegg Jesko Absolut attempts new top speed record next week", reads: "8.5K READS" },
  { id: "04", title: "Pagani Utopia Roadster allocation fully reserved before public debut", reads: "8.0K READS" },
  { id: "05", title: "Ferrari F80 rumored to feature over 1200 horsepower hybrid system", reads: "7.8K READS" },
]

const Sidebar = ({ isOpen, onClose,  }: any) => {
  const { data: session, status} = useSession()
  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={onClose}
      />

      <div 
        className={`bg-neutral-950 border-l border-neutral-900 lg:hidden px-6 fixed top-0 right-0 bottom-0 w-[340px] z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto pb-10 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end my-6">
          <MdClose 
            onClick={onClose} 
            className="cursor-pointer text-3xl text-neutral-400 hover:text-orange-500 transition-colors"
          />
        </div>

        <h1 className="uppercase italic font-bold text-xl">Lux<span className="text-orange-500">Drive</span></h1>

        <hr className="my-6 border-b border-neutral-900"/>

        <div className="mb-6">
          <SearchBar/>
        </div>
        
        <div className="flex flex-col gap-3">
          <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Pages</span>
          <ul className='flex flex-col gap-1 text-sm tracking-wide text-neutral-200'>
            <li className="hover:text-orange-500 py-1.5 transition-colors">
              <Link href='/blog' onClick={onClose}>Blog</Link>
            </li>
            <li className="hover:text-orange-500 py-1.5 transition-colors">
              <Link href='/news' onClick={onClose}>News</Link>
            </li>
            <li className="hover:text-orange-500 py-1.5 transition-colors">
              <Link href='/about' onClick={onClose}>About</Link>
            </li>
            <li className="hover:text-orange-500 py-1.5 transition-colors">
              <Link href='/contact' onClick={onClose}>Contact</Link>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-b border-neutral-900"/>

        <div className="flex flex-col gap-3">
          <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Filters</span>
          <ul className="flex flex-col gap-1">
              <li className="flex-1">
                <Dropdown 
                  title="Category" 
                  options={categoryOptions}
                />
              </li>
              <li className="flex-1">
                <Dropdown 
                  title="Certified" 
                  options={statusOptions}
                />
              </li>
              <li className="flex-1">
                <Dropdown 
                  title="Price" 
                  options={priceOptions}
                />
              </li>
            </ul>
        </div>
        
        <hr className="my-6 border-b border-neutral-900"/>

        <div className="flex flex-col gap-4">
          <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Trending Now</span>
          <div className="flex flex-col gap-5">
            {TRENDING_NOW.map((item) => (
              <div key={item.id} className="flex gap-4 items-start group cursor-pointer">
                <span className="font-mono text-base font-bold text-neutral-700 group-hover:text-orange-500 transition-colors">
                  {item.id}
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-neutral-200 font-medium leading-relaxed group-hover:text-white transition-colors line-clamp-2">
                    {item.title}
                  </p>
                  <span className="text-[9px] tracking-wider text-neutral-500 font-bold">
                    {item.reads}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-6 border-b border-neutral-900"/>

        <div className="bg-neutral-900/40 border border-neutral-900 rounded-xl p-4 flex flex-col gap-3">
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">LuxDrive Briefing</h4>
            <p className="text-[11px] text-neutral-400 mt-1 leading-normal">
              Get a weekly digest of luxury automotive intelligence and insider market updates.
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-1">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500/50 transition-colors"
            />
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold py-2 rounded-lg transition-colors uppercase tracking-wider">
              Subscribe
            </button>
          </div>
        </div>

        <hr className="my-6 border-b border-neutral-900"/>

        {status === "authenticated" ? (
          <div className="flex flex-col justify-center gap-4">
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
    </>
  )
}

export default Sidebar