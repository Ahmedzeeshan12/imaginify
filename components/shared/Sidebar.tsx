"use client"
import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

const Sidebar = () => {
  const pathname = usePathname()
  return (
    <aside
      className="hidden h-screen w-72 bg-white p-5 shadow-md shadow-purple-200/50 lg:flex"
    >
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="flex items-center gap-2 md:py-2">
          <Image
            src="/assets/images/smart.png"
            alt="logo main"
            width={180}
            height={28}
          />
        </Link>
        <nav className="h-full flex-col justify-between md:flex md:gap-4" >
          <SignedIn>
            <ul className="hidden w-full flex-col items-start gap-2 md:flex">
              {
                navLinks.slice(0,6).map((link)=>{
                  const isActive = link.route === pathname
                  return(
                    <li key={link.route} className={`sidebar-nav_element group
                    ${isActive ? 'bg-purple-gradient ' : 'text-gray-700'}`}>
                     <Link className='sidebar-link' href={link.route}>
                      <Image
                      src={link.icon}
                      alt='icon'
                      width={24}
                      height={24}
                      className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                     
                     </Link>
                    </li>
                  )
                })
              }
              </ul>

              <ul className='sidebar-nav_elements'>
              {
                navLinks.slice(6).map((link)=>{
                  const isActive = link.route === pathname
                  return(
                    <li key={link.route} className={`sidebar-nav_element group
                    ${isActive ? 'bg-purple-gradient ' : 'text-gray-700'}`}>
                     <Link className='sidebar-link' href={link.route}>
                      <Image
                      src={link.icon}
                      alt='icon'
                      width={24}
                      height={24}
                      className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                     
                     </Link>
                    </li>
                  )
                })
              }
            
            
             <li className='flex items-center justify-center cursor-pointer gap-2 p-2'>
              <UserButton afterSignOutUrl='/' showName/>

             </li>
                        
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className='button bg-purple-gradient bg-cover'>
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar


                    