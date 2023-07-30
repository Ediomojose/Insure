import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Grid from './components/Grid'
import CallToAction from './components/CallToAction'

function App() {

  return (
    <>
    <NavBar/>
    <HeroSection/>
    <Grid/>
    <CallToAction/>
    </>
  )
}

export default App
