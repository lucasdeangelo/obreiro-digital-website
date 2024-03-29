import React from 'react'
import Image from 'next/image'
import mockupHero from '@/public/images/mockup_hero.png'

const Hero: React.FC = () => {
  return (
    <main id="hero">
        <div className='flex flex-col md:flex-row bg-azul px-[8vh] md:px-[21vh] md:py-[26.5vh]'>
          <div className='mt-8'>
            <h1 className='text1 text-white text-4xl md:text-5xl md:leading-tight'>Da Secretaria ao Púlpito:<br/>Simplifique com o<br/>Obreiro Digital!</h1>
            <p className='text2 text-white text-2xl mt-4 md:mt-2'>Gerencie membros, eventos,<br/>estoque, visitantes e finanças<br/>em um só lugar.</p>
            <button className='bg-white hover:bg-slate-200 text-azul py-1 w-[17vh] flex text-center justify-center rounded-lg text2 text-lg mt-4'>Assine Agora</button>
          </div>
          
          <Image className='md:ml-12 invisible md:visible' src={mockupHero} width={850} height={550} alt=''/>
        </div>
    </main>
  )
}

export default Hero;