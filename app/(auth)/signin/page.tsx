'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'

const SignInPage = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleCredentialsLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    setIsLoading(false)

    if (res?.error) {
      setError("Invalid corporate credentials. Please try again.")
    } else {
      router.push('/')
      router.refresh()
    }
  }

  return (
    <main className="h-screen w-full bg-neutral-950 flex flex-col md:flex-row overflow-hidden">
      
      <section className="hidden md:flex md:w-1/2 lg:w-[60%] relative bg-neutral-900 overflow-hidden rounded-r-xl">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10" />
          <Image 
            src="/Revuelto.jpg"
            alt="LuxDrive Atmosphere"
            fill
            className="object-cover opacity-50 grayscale-[20%]"
          />
        </div>

        <div className="relative z-20 flex flex-col justify-end p-16 w-full">
          
            <span className="text-orange-500 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
              The Collection Awaits
            </span>
            <h1 className="text-5xl font-bold text-white leading-tight uppercase tracking-tighter">
              ACCESS YOUR <br /> 
              <span className="text-neutral-500 font-light italic">PRIVATE ATELIER</span>
            </h1>
            <p className="text-neutral-400 mt-6 max-w-md text-sm leading-relaxed">
              Log in to manage your vehicle allocations, view private market analytics, and connect with your dedicated acquisition specialist.
            </p>
        </div>
      </section>

      <section className="w-full md:w-1/2 lg:w-[40%] flex items-center justify-center p-8 md:p-16 bg-neutral-950 relative">

        <div className="w-full max-w-md">
          <div className="mb-12">
            <Link href="/" className="text-2xl font-bold text-white tracking-tighter uppercase">
              LUX<span className="text-orange-500">DRIVE</span>
            </Link>
          </div>

            <h2 className="text-2xl font-semibold text-white mb-2 uppercase tracking-wide">Welcome Back</h2>
            <p className="text-neutral-500 text-xs mb-8">Please enter your credentials to access your account.</p>

            <form className="space-y-5" onSubmit={handleCredentialsLogin}>
              {error && <p className='text-xs text-red-500 font-semibold'>{error}</p>}
              <div>
                <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-2 block">
                  Corporate Email
                </label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@gmail.com"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-orange-500/50 transition-all"
                  required
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold block">
                    Password
                  </label>
                  <Link href="#" className="text-[10px] text-orange-500 hover:text-orange-400 uppercase tracking-widest font-bold transition-colors">
                    Forgot?
                  </Link>
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-orange-500/50 transition-all"
                  required
                />
              </div>

              <button
                type='submit'
                disabled={isLoading}
                className="w-full bg-white text-black font-bold text-xs uppercase tracking-widest py-4 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg shadow-black/20 mt-4">
                {isLoading ? 'Verifying...' : 'Sign In'}
              </button>
            </form>

            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-900"></div>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-widest">
                <span className="bg-neutral-950 px-4 text-neutral-600 font-bold">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 bg-neutral-900 border border-neutral-800 rounded-xl py-3 hover:bg-neutral-800 transition-colors group">
                <FcGoogle className="text-xl" />
                <span className="text-[10px] uppercase tracking-widest text-white font-bold">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 bg-neutral-900 border border-neutral-800 rounded-xl py-3 hover:bg-neutral-800 transition-colors group">
                <FaApple className="text-xl text-white" />
                <span className="text-[10px] uppercase tracking-widest text-white font-bold">Apple</span>
              </button>
            </div>

            <p className="text-center text-neutral-500 text-xs mt-10">
              Don't have an account?{' '}
              <Link href="/signup" className="text-white hover:text-orange-500 font-bold transition-colors">
                Apply for Access
              </Link>
            </p>
        </div>
      </section>

    </main>
  )
}

export default SignInPage