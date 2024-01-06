import React from 'react'
import Image from 'next/image'
import check from '@/public/icons/check.svg'

export default function Missao() {
  return (
    <main>
        <div className='flex px-[21vh] py-[10vh]'>
            <div className='mt-[10vh]'>
                <h2 className='text1 text-black text-5xl'>Nossa Missão</h2>
                
                <p className='text2 text-black text-2xl leading-7 mt-5'>Temos como missão entregar recursos<br/>e eficiência na gestão de igrejas,<br/>queremos elevar o <span className='text-azul'>nível da obra</span>.</p>

                <p className='text2 text-black text-2xl leading-7 mt-10'>Assinar o Obreiro Digital não é apenas<br/>adquirir um sistema bonito, será<br/><span className='text-azul'>capacitar</span> Pastores e Obreiros para<br/>trabalharem na obra do Senhor da<br/>melhor maneira possível.</p>                
            </div>

            <div className='ml-[50vh]'>
                <div className='bg-white shadow-xl rounded-xl py-5 px-14'>
                    <div className="flex">
                        <Image src={check} width={30} height={30} alt=''/>
                        <h3 className='text1 text-black text-2xl ml-3'>Experiência do Usuário</h3>
                    </div>

                    <p className='text2 text-black text-lg leading-tight mt-3 ml-10'>Garantiremos a melhor experiência do usuário<br/>para que seja fácil para qualquer pessoa<br/>independente do nível técnico.</p>
                </div>

                <div className='bg-white shadow-xl rounded-xl py-5 px-14 mt-8'>
                    <div className="flex">
                        <Image src={check} width={30} height={30} alt=''/>
                        <h3 className='text1 text-black text-2xl ml-3'>Alfabetização Digital</h3>
                    </div>

                    <p className='text2 text-black text-lg leading-tight mt-2 ml-10'>Sabemos que existem pessoas sem acesso e<br/>conhecimento de tecnologia, por isso, daremos<br/>todo o suporte e acompanhamento necessários.</p>
                </div>

                <div className='bg-white shadow-xl rounded-xl py-5 px-14 mt-8'>
                    <div className="flex">
                        <Image src={check} width={30} height={30} alt=''/>
                        <h3 className='text1 text-black text-2xl ml-3'>Eficiência e Agilidade</h3>
                    </div>

                    <p className='text2 text-black text-lg leading-tight mt-2 ml-10'>O Obreiro Digital trará a segurança de que a<br/>obra do Senhor está eficiente e ágil para<br/>Pastores e Líderes de Igreja. </p>
                </div>
            </div>
        </div>
    </main>
  )
}
