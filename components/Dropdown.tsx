'use client'
import React, { useState, useRef, useEffect } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

type DropdownProps = {
    title: string;
    options: string[];
    selectedValue: string | null;
    onSelect: (value: string) => void;
    variants?: string;
}

const Dropdown = ({ title, options, selectedValue, onSelect, variants }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className='w-full' ref={dropdownRef}>
            <div className="relative w-full inline-block text-left">
                <button
                    type="button"
                    className={`${variants} w-full text-left text-sm tracking-wide text-neutral-300 hover:text-white flex items-center gap-2 transition-colors duration-200 focus:outline-none`}
                    onClick={toggleDropdown}
                >
                    <span className="truncate">
                        {selectedValue ? selectedValue : title}
                    </span>
                    <MdKeyboardArrowDown className={`text-2xl ml-2 text-neutral-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-orange-500' : ''}`} />                  
                </button>

                {isOpen && (
                    <div className="origin-top-left absolute left-0 mt-4 w-56 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800 p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <ul role="menu" className="space-y-0.5">
                            {options.map((option, index) => {
                                const isCurrent = selectedValue === option;
                                return (
                                    <li key={index}>
                                        <button
                                            type="button"
                                            className={`w-full text-left block px-4 py-2.5 text-xs uppercase tracking-wider rounded-lg transition-all duration-200
                                                ${isCurrent 
                                                    ? 'bg-orange-500/10 text-orange-500 font-semibold' 
                                                    : 'text-neutral-400 hover:bg-neutral-900 hover:text-white'}`}
                                            onClick={() => {
                                                onSelect(option);
                                                setIsOpen(false);
                                                {isCurrent && onSelect('')}
                                            }}
                                        >
                                            {option}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Dropdown;