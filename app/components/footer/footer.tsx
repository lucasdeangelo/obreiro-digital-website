import React from 'react'
import Image from 'next/image'
import logo from '@/public/images/logo.svg'

export default function Footer() {
  return (
    <main>
      <div className='bg-azul flex px-[20vh] py-[2vh]'>
        <div className='flex'>
          <Image src={logo} width={180} height={150} alt=''/>
        </div>
        <div className='flex items-center ml-[70vh]'>
          <p className='text2 text-white text-xl'>© Copyright 2023. Ecle. Todos os direitos reservados.</p>
        </div>
      </div>
    </main>
  )
}
