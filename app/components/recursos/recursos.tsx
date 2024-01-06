import React from 'react'
import Image from 'next/image'
import mockupRecursos from '@/public/images/mockup_recursos.png'

const Recursos: React.FC = () => {
  return (
    <main id="recursos">
        <div className='bg-azul px-[25vh] py-[18vh]'>
            <div>
                <h2 className='text1 text-white text-5xl text-center'>Recursos</h2>
                <p className='text2 text-white text-2xl text-center mt-3'>Principais recursos e funcionalidades<br/>do Obreiro Digital:</p>
            </div>

            <div className='flex mt-14'>
                <div>
                    <div className='mt-12'>
                        <h3 className='text1 text-white text-3xl'>Gerencie Membros</h3>
                        <p className='text2 text-white text-xl leading-6 mt-3'>Gerencie todos os dados<br/>e informações de todos os<br/>membros da sua igreja.</p>
                    </div>

                    <div className='mt-32'>
                        <h3 className='text1 text-white text-3xl'>Controle finanças</h3>
                        <p className='text2 text-white text-xl leading-6 mt-3'>Controle os gastos, veja o<br/>saldo, doações, dízimos e<br/>todas as transações.</p>
                    </div>
                </div>

                <Image src={mockupRecursos} width={850} height={550} alt=''/>

                <div>
                    <div className='mt-12'>
                        <h3 className='text1 text-white text-3xl'>Faça eventos</h3>
                        <p className='text2 text-white text-xl leading-6 mt-3'>Cadastre os eventos que<br/>vão acontecer dentro e fora<br/>da sua igreja.</p>
                    </div>

                    <div className='mt-32'>
                        <h3 className='text1 text-white text-3xl'>Receba Visitantes</h3>
                        <p className='text2 text-white text-xl leading-6 mt-3'>Tenha controle de todos os<br/>visitantes e convidados.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 className='text1 text-white text-3xl text-center'>Pedidos Integrados</h3>
                <p className='text2 text-white text-xl leading-6 mt-3 text-center'>Gere pedidos e demandas para<br/>o funcionamento do dia-a-dia<br/>da obra do Senhor.</p>
            </div>
        </div>
    </main>
  )
}

export default Recursos;