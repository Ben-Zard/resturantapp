import {useState} from 'react'
import Navbar from '../Components/Navbar'
import About from '../Components/About'
import Hero from '../Components/Hero'
import CTA from '../Components/CTA'


type Props = {}

const Home = (props: Props) => {

  return (
    <> 
    <div className=''> 
    <Navbar/>
    <Hero/>
    <About/>
    <CTA/> 
    </div>
      </>
  )
}

export default Home