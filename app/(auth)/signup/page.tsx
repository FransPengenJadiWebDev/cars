'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'

const SignUpPage = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        router.push('/signin')
      } else {
        const errorMessage = await response.text()
        setError(errorMessage || "Registration failed. Please check your data.")
      }
    } catch (err) {
      setError("Something went wrong. Network or server error.")
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <main className="min-h-screen w-full bg-neutral-950 flex flex-col md:flex-row overflow-hidden">
      
      <section className="hidden md:flex md:w-1/2 lg:w-[55%] relative bg-neutral-900 overflow-hidden rounded-r-xl">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10" />
          <Image 
            src="/Mistral.jpg"
            alt="LuxDrive Membership"
            fill
            className="object-cover opacity-40"
          />
        </div>

        <div className="relative z-20 flex flex-col justify-end p-16 w-full">
            <span className="text-orange-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block">Membership Application</span>
            <h1 className="text-5xl font-bold text-white leading-tight uppercase tracking-tighter">
              SECURE YOUR <br /> 
              <span className="text-neutral-500 font-light italic">AUTOMOTIVE LEGACY</span>
            </h1>
        </div>
      </section>

      <section className="w-full md:w-1/2 lg:w-[45%] flex items-center justify-center p-8 md:p-12 bg-neutral-950 relative overflow-y-auto">
        <div className="w-full max-w-md py-12">
          <div className="mb-10">
            <Link href="/" className="text-2xl font-bold text-white tracking-tighter uppercase">
              LUX<span className="text-orange-500">DRIVE</span>
            </Link>
          </div>

            <h2 className="text-2xl font-semibold text-white mb-2 uppercase tracking-wide">Create Account</h2>
            <p className="text-neutral-500 text-xs mb-8">Join the elite network of global hypercar collectors.</p>

            {error && (
              <div className='mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-xs text-red-500 font-medium'>{error}</div>
            )}

            <form className="space-y-4" onSubmit={handleSignUp}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-2 block">First Name</label>
                  <input
                    type="text" 
                    placeholder="John" 
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500/50 transition-all" 
                    required
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-2 block">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Doe" 
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500/50 transition-all" 
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-2 block">Corporate Email</label>
                <input 
                  type="email" 
                  placeholder="j.doe@company.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500/50 transition-all" 
                  required
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-2 block">Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500/50 transition-all" 
                  required
                />
              </div>

              <div className="flex items-start gap-3 py-2">
                <input type="checkbox" className="mt-1 accent-orange-500" required/>
                <p className="text-[10px] text-neutral-500 leading-relaxed uppercase tracking-wider">
                  I agree to the <Link href="#" className="text-white underline">Terms of Service</Link> and <Link href="#" className="text-white underline">Privacy Policy</Link>.
                </p>
              </div>

              <button type='submit' disabled={isLoading} className="w-full bg-white text-black font-bold text-xs uppercase tracking-widest py-4 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg mt-4">
                {isLoading ? 'Processing Application...' : 'Complete Registration'}
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-neutral-900"></div></div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-widest"><span className="bg-neutral-950 px-4 text-neutral-600 font-bold">Or sign up with</span></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 bg-neutral-900 border border-neutral-800 rounded-xl py-3 hover:bg-neutral-800 transition-colors">
                <FcGoogle className="text-xl" />
                <span className="text-[10px] uppercase tracking-widest text-white font-bold">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 bg-neutral-900 border border-neutral-800 rounded-xl py-3 hover:bg-neutral-800 transition-colors">
                <FaApple className="text-xl text-white" />
                <span className="text-[10px] uppercase tracking-widest text-white font-bold">Apple</span>
              </button>
            </div>

            <p className="text-center text-neutral-500 text-xs mt-10">
              Already a member?{' '}
              <Link href="/signin" className="text-white hover:text-orange-500 font-bold transition-colors">Sign In</Link>
            </p>
        </div>
      </section>
    </main>
  )
}

export default SignUpPage