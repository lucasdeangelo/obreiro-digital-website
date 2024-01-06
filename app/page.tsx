'use client'
import Image from 'next/image'
import MenuSuperior from './components/menu-superior/menu-superior'
import Hero from './components/hero/hero'
import Missao from './components/missao/missao'
import Recursos from './components/recursos/recursos'
import Planos from './components/planos/planos'
import Social from './components/social/social'
import Footer from './components/footer/footer'

export default function Home() {
  return (
    <main>
      <div>
        <MenuSuperior/>
        <Hero/>
        <Missao/>
        <Recursos/>
        <Planos/>
        <Social/>
        <Footer/>        
      </div>
    </main>
  )
}
