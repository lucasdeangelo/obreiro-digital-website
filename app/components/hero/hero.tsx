import React from 'react'
import Image from 'next/image'
import mockupHero from '@/public/images/mockup_hero.png'

export default function Hero() {
  return (
    <main>
        <div className='flex bg-azul px-[22vh] py-[21.7vh]'>
            <div className='mt-8'>
                <h1 className='text1 text-white text-5xl leading-tight'>Da Secretaria ao Púlpito:<br/>Simplifique com o<br/>Obreiro Digital!</h1>
                <p className='text2 text-white text-2xl mt-2'>Gerencie membros, eventos e<br/>finanças em um só lugar.</p>
                <button className='bg-white hover:bg-slate-300 text-azul py-1 w-[15vh] flex text-center justify-center rounded-lg text2 text-lg mt-4'>Assine Já</button>
            </div>
            <Image className='ml-12' src={mockupHero} width={850} height={550} alt=''/>
        </div>
    </main>
  )
}
