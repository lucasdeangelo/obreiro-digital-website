import React, { useState } from 'react';
import Image from 'next/image';
import logo from '@/public/images/logo.svg';
import logotipo from '@/public/images/logotipo-white.svg';
import hamburguer from '@/public/icons/hamburguer.svg'
import x from '@/public/icons/x.svg'
import Link from 'next/link';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const MenuSuperior: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      {/* Desktop Menu */}
      <div className='hidden md:flex bg-azul py-2 px-14 fixed top-0 z-50'>
        <div>
          <ScrollLink to="hero" smooth={true} className='cursor-pointer'> 
            <Image src={logo} width={200} height={200} alt=''/>
          </ScrollLink>
        </div>
        <div className='text-white flex text1 text-2xl justify-center text-center mt-4'>
          <ScrollLink to="hero" smooth={true} className='ml-[85dvh] h-8 cursor-pointer'>Início</ScrollLink>
          <ScrollLink to="missao" smooth={true} className='ml-[8dvh] h-8 cursor-pointer'>Missão</ScrollLink>
          <ScrollLink to="recursos" smooth={true} className='ml-[8dvh] h-8 cursor-pointer'>Recursos</ScrollLink>
          <ScrollLink to="planos" smooth={true} className='ml-[8dvh] h-8 cursor-pointer'>Planos</ScrollLink>
          <div className='bg-white hover:bg-slate-200 text-azul h-[4vh] w-[17vh] flex text-center justify-center rounded-lg ml-[8dvh] text2 text-xl'>
            <Link href={''} className='mt-1'>Assine Agora</Link>            
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className='bg-azul py-2 px-4 md:fixed md:top-0 md:z-50 md:hidden'>
        <div className='flex justify-between items-center'>
          <ScrollLink to="hero" smooth={true} className='cursor-pointer'> 
            <Image src={logotipo} width={60} height={60} alt=''/>
          </ScrollLink>
          <button onClick={toggleMenu} className='text-white text-xl focus:outline-none'>
            {isOpen ? (
                <Image src={x} width={40} height={40} alt='' />
              ) : (
                <Image src={hamburguer} width={50} height={50} alt='' />
              )}
          </button>
        </div>

        {isOpen && (
          <div className='mt-4 text-white text-left'>
            <div className='mb-2'>
              <ScrollLink to="hero" smooth={true} onClick={toggleMenu} className='block cursor-pointer text3 text-2xl'>Início</ScrollLink>
            </div>
            <div className='mb-2'>
              <ScrollLink to="missao" smooth={true} onClick={toggleMenu} className='block cursor-pointer text3 text-2xl'>Missão</ScrollLink>
            </div>
            <div className='mb-2'>
              <ScrollLink to="recursos" smooth={true} onClick={toggleMenu} className='block cursor-pointer text3 text-2xl'>Recursos</ScrollLink>
            </div>
            <div className='mb-2'>
              <ScrollLink to="planos" smooth={true} onClick={toggleMenu} className='block cursor-pointer text3 text-2xl'>Planos</ScrollLink>
            </div>
            <div className='bg-white hover:bg-slate-200 text-azul h-[4vh] w-[17vh] flex text-center justify-center rounded-lg text2 text-xl'>
              <Link href={''} onClick={toggleMenu} className='block cursor-pointer mt-0.5'>Assine Agora</Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default MenuSuperior;
