import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Grid from './components/Grid'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <NavBar/>
    <HeroSection/>
    <Grid/>
    <CallToAction/>
    <Footer/>
    </>
  )
}

export default App
