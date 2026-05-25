import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10 pt-10 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold italic tracking-tighter">LUX<span className="text-orange-500">DRIVE</span></h2>
            <p className="text-gray-400 text-sm leading-relaxed">
                Providing the finest selection of luxury and exotic vehicles for the most discerning collectors.
            </p>
            </div>

            <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
                <li className="hover:text-orange-500 cursor-pointer transition-colors">
                    Our Inventory
                </li>
                <li className="hover:text-orange-500 cursor-pointer transition-colors">
                    <Link href='/about'>About Us</Link>
                </li>
                <li className="hover:text-orange-500 cursor-pointer transition-colors">
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
            </div>

            <div>
            <h3 className="text-lg font-semibold mb-6">Showroom Hours</h3>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
                <li className="flex justify-between"><span>Mon - Fri</span> <span>09:00 - 20:00</span></li>
                <li className="flex justify-between font-bold text-white"><span>Sat - Sun</span> <span>10:00 - 18:00</span></li>
            </ul>
            </div>

            <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <div className="flex flex-col gap-4">
                <input type="email" placeholder="Email Address" className="bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-md focus:outline-none focus:border-orange-500 transition-colors" />
                <button className="bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition-colors">Subscribe</button>
            </div>
            </div>

        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t-2 border-white/20 text-center text-gray-500 text-xs">
            &copy; 2026 Luxury Drive Showroom. All Rights Reserved.
        </div>
    </footer>
  )
}

export default Footer