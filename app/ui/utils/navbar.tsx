'use client';
import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const links = [
    { name: 'Investors', href: '#Investors' },
    { name: 'Our Story', href: '#Our-Story' },
    { name: 'Services', href: '#Services' },
    { name: 'Contact', href: '#Contact' },

  ];
  const toggleModal = () => {
    setIsOpen(!isOpen);
};

  return (
    <nav className='w-80% bg-inherit'>
      {/* mobile nav */}
      <div className="block sm:hidden ">
        <div className='flex justify-between mt-5 w-[80%] mx-auto'>
          {/* logo */}
          <div className='flex' onClick={toggleModal}>
            <div className='w-10 h-10'>
              <img src="images/burger.svg" alt="logo" className="w-10 h-10" />
            </div>
            </div>
          {/* hamburger */}
          <div className='flex'>
            <div className='w-10 h-10'>
              <img src="images/navLogo.svg" alt="logo" className="w-10 h-10" />
              </div>
            </div>

        </div>
      </div>
      {/* modal */}
      {isOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50'>
          <div className='w-80% bg-white h-full backdrop-filter backdrop-blur-lg bg-opacity-15'>
            <div className='flex justify-end'>
              <div className='w-fit h-fit mr-3' onClick={toggleModal}>
                <p className='text-white text-3xl mt-7'>X</p>
              </div>
            </div>
            <div className='flex flex-col space-y-5 ml-2'>
              {links.map((link) => (
                <Link key={link.name} href={link.href}
                onClick={toggleModal}
                  className={clsx(
                    'text-white font-bold rounded',
                    {
                      'bg-sky-100 text-blue-600': pathname === link.href,
                    }
                  )}
                >
                  {link.name}
                </Link>
              ))}
              {/* #Investor-Sign-In link */}
              <Link href='#Investor-Sign-In'
    className='text-white font-bold rounded'
    onClick={toggleModal}
>
    Investor Sign In
</Link>
            </div>
          </div>
        </div>
      )}
      {/* desktp nav */}
      <div className="hidden sm:block">
        <div className='flex justify-between w-[90%] mx-auto mt-5'>
          <div>
            <div className='flex flex-row space-x-3'>
<div>
  <img src="images/navLogo.svg" alt="logo" className="w-10 h-10" />
</div>
<div className='my-auto'>
  <img src="images/navText.svg" className='' alt="logo" />
</div>
            </div>
          </div>
          <div>
        {links.map((link) => (
          <Link key={link.name} href={link.href}
              className={clsx(
                'ml-4  text-white font-bold rounded',
                {
                  'bg-sky-100 text-blue-600': pathname === link.href,
                }
              )}
            >
              {link.name}
            
          </Link>

        ))}
        {/* #Investor-Sign-In link */}
        <Link href='#Investor-Sign-In'
          className={clsx(
            'ml-4 bg-white text-[#191AFE] font-bold rounded-sm p-4',
            {
              'bg-sky-100 text-blue-600': pathname === '#Investor-Sign-In',
            }
          )}
        >
          Investor Sign In
        </Link>
        </div>
        </div>
      </div>
      
    </nav>
  );
}