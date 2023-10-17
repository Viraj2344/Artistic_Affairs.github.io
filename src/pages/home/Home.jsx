import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import { Link } from 'react-router-dom'
import Parallax from '../../components/parallax/Parallax'
import ImageGrid from '../../components/imagegrid/Imagegrid'


function Home() {
  return (
    <Layout>
      <HeroSection />
      <ProductCard />
      {/* <Track /> */}
      <Parallax />
      <ImageGrid />
      <Testimonial />
    </Layout>
  )
}

export default Home