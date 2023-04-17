import React from 'react'
import Header from '../components/Header'
import Feature from '../components/Feature'
import Contact from '../components/Contact'
import NavBar from '../components/NavBar'
import Partenaires from '../components/Partenaires'

function Home() {
  return (
    <main>
      <NavBar/>
      <Header/>
      <Partenaires/>
      <Feature/>
      <Contact/>
    </main>
  )
}

export default Home