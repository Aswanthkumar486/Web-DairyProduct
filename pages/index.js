import React from 'react'
import data from '../data/data.json'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Products from '@/components/Products'
import Teams from '@/components/Teams'
import Testimonals from '@/components/Testimonals'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'

export default function Home({ navData, heroData,galleryData, aboutData, servicesData, productsData, teamData, testimonalData, contactData, footerData }) {
  return (
    <>
      <Navbar data={navData} />
      <Hero data={heroData} />
      <About data={aboutData} />
      <Services data={servicesData} />
      <Products data={productsData} />
      <Gallery data={galleryData} />
      <Teams data={teamData} />
      <Testimonals data={testimonalData} />
      <Contact data={contactData} />
      <Footer data={footerData} />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      navData: data.navbar,
      heroData: data.hero,
      aboutData: data.about,
      servicesData: data.services,
      productsData: data.products,
      teamData: data.team,
      testimonalData: data.testimonials,
      contactData: data.contact,
      footerData: data.footer,
      galleryData:data.gallery
    }
  }
}
