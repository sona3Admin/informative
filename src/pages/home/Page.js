import React from 'react'
import useApi from '../../components/Loading/LoadingApi'
import Welcome from './sections/Welcome'
import About from './sections/About'
import Services from './sections/Services'
import Pricing from './sections/Pricing'
import News from './sections/News'
import Faqs from './sections/Faqs'
import Carousel from './sections/Carousel'
import EndBanner from './sections/EndBanner'

export default function Home() {
useApi(600)
  return (
    <div>
        <Welcome/>
        <About/>
        <Services/>
        <Pricing/>
        <News/>
        <Faqs/>
        <Carousel/>
        <EndBanner color={"#88050D"}/>
    </div>
  )
}
