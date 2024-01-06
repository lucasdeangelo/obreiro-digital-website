import React from 'react'
import Image from 'next/image'
import logo from '@/public/images/logo.svg'
import Link from 'next/link'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const MenuSuperior: React.FC = () => {
  return (
    <main>
      <div className='bg-azul flex py-2 px-14 fixed top-0 z-50'>
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
    </main>
  )
}

export default MenuSuperior