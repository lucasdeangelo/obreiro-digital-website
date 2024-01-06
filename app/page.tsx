'use client'
import Image from 'next/image'
import MenuSuperior from './components/menu-superior/menu-superior'
import Hero from './components/hero/hero'

export default function Home() {
  return (
    <main>
      <div>
        <MenuSuperior/>
        <Hero/>
      </div>
    </main>
  )
}
