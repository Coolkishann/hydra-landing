import React from 'react'
import Navbar from './Navbar'
import HeroSection from './herosection'
import ProductsSection from './productsection'
import Feature from './feature'
import Faq from './faq'
import Footer from './footer'
import Roadmap from './roadmap'

const page = () => {
  return (
    <>
    
<Navbar/>
<HeroSection/>
<ProductsSection/>
<Feature/>
<Roadmap/>
<Faq/>
<Footer/>
    </>
)
}

export default page