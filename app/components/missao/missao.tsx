import React from 'react'
import Image from 'next/image'
import check from '@/public/icons/check.svg'

const Missao: React.FC = () => {
  return (
    <main id="missao">
        <div className='flex flex-col md:flex-row pb-[5vh] px-[8vh] md:px-[21vh] md:py-[20vh]'>
            <div className='mt-[10vh]'>
                <h2 className='text1 text-black text-5xl md:text-left'>Nossa Missão</h2>
                
                <p className='text2 text-black text-2xl leading-7 mt-5 md:mt-5 lg:mt-5 xl:mt-5'>
                    Temos como missão entregar recursos
                    <br className='md:visible' />
                    e eficiência na gestão de igrejas,
                    <br className='md:visible' />
                    queremos elevar o <span className='text-azul'>nível da obra</span>.
                </p>

                <p className='text2 text-black text-2xl leading-7 mt-10 md:mt-10 lg:mt-10 xl:mt-10'>
                    Assinar o Obreiro Digital não é apenas
                    <br className='md:visible' />
                    adquirir um sistema bonito, será
                    <br className='md:visible' />
                    <span className='text-azul'>capacitar</span> Pastores e Obreiros para
                    <br className='md:visible' />
                    trabalharem na obra do Senhor da
                    <br className='md:visible' />
                    melhor maneira possível.
                </p>                
            </div>

            <div className='mt-10 md:ml-[50vh]'>
                <div className='bg-white shadow-xl rounded-xl py-5 px-14 h-[12vh] md:h-[16vh]'>
                    <div className="flex">
                        <Image src={check} width={30} height={30} alt=''/>
                        <h3 className='text1 text-black text-2xl ml-3'>Experiência do Usuário</h3>
                    </div>

                    <p className='text2 text-black text-lg leading-tight mt-3 ml-10 invisible md:visible'>Garantiremos a melhor experiência do usuário<br/>para que seja fácil para qualquer pessoa<br/>independente do nível técnico.</p>
                </div>

                <div className='bg-white shadow-xl rounded-xl py-5 px-14 mt-8 h-[12vh] md:h-[16vh]'>
                    <div className="flex">
                        <Image src={check} width={30} height={30} alt=''/>
                        <h3 className='text1 text-black text-2xl ml-3'>Alfabetização Digital</h3>
                    </div>

                    <p className='text2 text-black text-lg leading-tight mt-2 ml-10 invisible md:visible'>Sabemos que existem pessoas sem acesso e<br/>conhecimento de tecnologia, por isso, daremos<br/>todo o suporte e acompanhamento necessários.</p>
                </div>

                <div className='bg-white shadow-xl rounded-xl h-[12vh] md:h-[16vh] py-5 px-14 mt-8'>
                    <div className="flex">
                        <Image src={check} width={30} height={30} alt=''/>
                        <h3 className='text1 text-black text-2xl ml-3'>Eficiência e Agilidade</h3>
                    </div>

                    <p className='text2 text-black text-lg leading-tight mt-2 ml-10 invisible md:visible'>O Obreiro Digital trará a segurança de que a<br/>obra do Senhor está eficiente e ágil para<br/>Pastores e Líderes de Igreja. </p>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Missao;