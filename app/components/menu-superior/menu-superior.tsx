import React from 'react'
import Image from 'next/image'
import logo from '@/public/images/logo.svg'
import Link from 'next/link'

export default function MenuSuperior() {
  return (
    <main>
      <div className='bg-azul flex py-2 px-14 sticky'>
        <div>
          <Image src={logo} width={200} height={200} alt=''/>
        </div>
        <div className='text-white flex text1 text-2xl justify-center text-center mt-4'>
          <Link href={''} className='ml-[85dvh] h-8'>Início</Link>
          <Link href={''} className='ml-[8dvh] h-8'>Missão</Link>
          <Link href={''} className='ml-[8dvh] h-8'>Recursos</Link>
          <Link href={''} className='ml-[8dvh] h-8'>Planos</Link>
          <div className='bg-white hover:bg-slate-200 text-azul h-[4vh] w-[17vh] flex text-center justify-center rounded-lg ml-[8dvh] text2 text-xl'>
            <Link href={''} className='mt-1'>Assine Agora</Link>            
          </div>
        </div>
      </div>
    </main>
  )
}
