'use client'

import {useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { MdSearch } from "react-icons/md";

const SearchBarA = () => {

  const router = useRouter()
  const searchParams = useSearchParams()
  const [inputValue, setInputValue] = useState(searchParams.get("search") || "")

  useEffect(() => {
    setInputValue(searchParams.get("search") || "")
  }, [searchParams])

  const handleSearch = (value: string) => {
    
    setInputValue(value)
    const params = new URLSearchParams(searchParams.toString())
    if (value) {
      params.set("search", value)
    } else {
      params.delete("search")
    }
    router.push(`/?${params.toString()}`, {scroll: false})
  }

  return (
    <div className= 'flex gap-3 items-center rounded-4xl px-3 py-2 text-sm lg:text-[16px] bg-orange-500'>
    <MdSearch className=" pointer-events-none"/>
    <input 
      type="text" 
      placeholder='Search' 
      value={inputValue} 
      onChange={(e) => handleSearch(e.target.value)} 
      className="relative outline-none text-white placeholder:text-white"
    />
    </div>
  )
}

export default function SearchBar() {
  return (
    <Suspense fallback={<div className="opacity-50">Loading Search...</div>}>
      <SearchBarA/>
    </Suspense>
  )
}