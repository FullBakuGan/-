import { useState } from 'react'
import Header from '../components/Header'
import './App.css'
import Advantages from './Advantages'
import FAQ from './FAQ'
import HeroSection from './HeroSection'
import Reviews from './Reviews'
import HowItWorks from './HowItWorks'


export default function App() {
  return (
    <>
      <div>
        <Header />
          <main>
            <Advantages />
            <HeroSection />
            <Reviews />
            <HowItWorks />
            <FAQ />
        </main>
      </div>
    </>
  )
};