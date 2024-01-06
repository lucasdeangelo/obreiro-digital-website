'use client'
import Image from 'next/image'
import MenuSuperior from './components/menu-superior/menu-superior'
import Hero from './components/hero/hero'
import Missao from './components/missao/missao'
import Recursos from './components/recursos/recursos'

export default function Home() {
  return (
    <main>
      <div>
        <MenuSuperior/>
        <Hero/>
        <Missao/>
        <Recursos/>
      </div>
    </main>
  )
}
