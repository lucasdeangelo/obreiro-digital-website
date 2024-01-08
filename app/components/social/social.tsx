import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import facebook from '@/public/icons/face.svg'
import insta from '@/public/icons/insta.svg'
import linkedIn from '@/public/icons/linkedin.svg'
import github from '@/public/icons/github.svg'

export default function Social() {
  return (
    <main>
        <div className='flex justify-center self-center pb-[9vh] md:py-[15vh]'>
            <div className="flex bg-azul px-2 py-4 md:px-[20vh] md:py-[3vh] rounded-xl">
                <div className='flex justify-center items-center'>
                    <Link href={'https://www.instagram.com/obreirodigital/'}>
                        <Image src={insta} width={40} height={40} alt=''/>
                    </Link>

                    <Link href={'https://www.linkedin.com/in/lucas-de-angelo-b90946220/'} className='ml-5'>
                        <Image src={linkedIn} width={40} height={40} alt=''/>
                    </Link>

                    <Link href={'https://github.com/lucasdeangelo/Obreiro-Digital'} className='ml-5'>
                        <Image src={github} width={40} height={40} alt=''/>
                    </Link>
                </div>

                <div className='ml-5 md:ml-[55vh]'>
                    <h2 className='text1 text-white text-4xl text-right'>Redes Sociais</h2>
                    <p className='text2 text-white text-xl text-right mt-3 leading-6'>Siga-nos nas redes sociais e<br/>acompanhe o nosso projeto!</p>
                </div>
            </div>
        </div>
    </main>
  )
}
