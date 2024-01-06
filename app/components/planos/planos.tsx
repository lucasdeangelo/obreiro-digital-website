import React from 'react'
import Image from 'next/image'
import congregacao from '@/public/icons/congregacao.svg'
import tabernaculo from '@/public/icons/tabernaculo.svg'
import templo from '@/public/icons/templo.svg'
import seta from '@/public/icons/seta.svg'
import setaWhite from '@/public/icons/seta-white.svg'

export default function Planos() {
  return (
    <main>
        <div className='py-[10vh] flex flex-col justify-center'>
          <h2 className='text1 text-black text-5xl text-center mb-12'>Planos de Assinatura</h2>

          <div className='flex justify-center'>
            <div className='bg-white shadow-xl rounded-xl px-14 h-[58vh] flex flex-col text-center justify-center'>
              <Image className='flex justify-center self-center' src={congregacao} width={80} height={80} alt=''/>

              <h4 className='text3 text-black mt-2'>Congregação</h4>

              <h3 className='text1 text-black text-2xl'>Mensal</h3>

              <h2 className='text1 text-black text-5xl mt-3'>R$39,90</h2>

              <div className='flex mt-8'>
                <Image src={seta} width={30} height={30} alt=''/>
                
                <p className='text2 text-black text-xl ml-3'>Usuários ilimitados</p>
              </div>

              <div className='flex mt-6'>
                <Image src={seta} width={30} height={30} alt=''/>

                <p className='text2 text-black text-xl ml-3'>Suporte 24/7</p>
              </div>

              <div className='flex mt-3'>
                <Image src={seta} width={30} height={30} alt=''/>

                <p className='text2 text-black text-left text-xl ml-3'>Todos os recursos<br/>disponíveis sem restrições</p>
              </div>

              <button className='bg-azul hover:bg-blue-700 text-white py-1 w-[17vh] flex text-center justify-center self-center rounded-lg text2 text-lg mt-20'>Assine Agora</button>
            </div>

            <div className='bg-azul shadow-xl rounded-xl px-24 h-[58vh] ml-10 flex flex-col text-center justify-center'>
              <Image className='flex justify-center self-center' src={tabernaculo} width={85} height={85} alt=''/>

              <h4 className='text3 text-white mt-2'>Tabernáculo</h4>

              <h3 className='text1 text-white text-2xl'>Semestral</h3>

              <h2 className='text1 text-white text-5xl mt-3'>R$199,90</h2>

              <div className='flex mt-8'>
                <Image src={setaWhite} width={30} height={30} alt=''/>
                
                <p className='text2 text-white text-xl ml-3'>Usuários ilimitados</p>
              </div>

              <div className='flex mt-6'>
                <Image src={setaWhite} width={30} height={30} alt=''/>

                <p className='text2 text-white text-xl ml-3'>Suporte 24/7</p>
              </div>

              <div className='flex mt-3'>
                <Image src={setaWhite} width={30} height={30} alt=''/>

                <p className='text2 text-white text-left text-xl ml-3'>Acesso antecipado a<br/>novidades no sistema</p>
              </div>

              <button className='bg-white hover:bg-slate-200 text-azul py-1 w-[17vh] flex text-center justify-center self-center rounded-lg text2 text-lg mt-20'>Assine Agora</button>
            </div>

            <div className='bg-white shadow-xl rounded-xl px-20 h-[58vh] ml-10 flex flex-col text-center justify-center'>
              <Image className='flex justify-center self-center' src={templo} width={80} height={80} alt=''/>

              <h4 className='text3 text-black mt-2'>Templo</h4>

              <h3 className='text1 text-black text-2xl'>Anual</h3>

              <h2 className='text1 text-black text-5xl mt-3'>R$450,00</h2>

              <div className='flex mt-8'>
                <Image src={seta} width={30} height={30} alt=''/>
                
                <p className='text2 text-black text-xl ml-3'>Usuários ilimitados</p>
              </div>

              <div className='flex mt-6'>
                <Image src={seta} width={30} height={30} alt=''/>

                <p className='text2 text-black text-xl ml-3'>Suporte 24/7</p>
              </div>

              <div className='flex mt-3'>
                <Image src={seta} width={30} height={30} alt=''/>

                <p className='text2 text-black text-left text-xl leading-6 ml-3'>Acesso antecipado a<br/>novidades no sistema</p>
              </div>

              <button className='bg-azul hover:bg-blue-700 text-white py-1 w-[17vh] flex text-center justify-center self-center rounded-lg text2 text-lg mt-20'>Assine Agora</button>
            </div>
          </div>
        </div>
    </main>
  )
}
