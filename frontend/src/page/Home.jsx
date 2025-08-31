import React from 'react'
import Layout from '../component/Layout/Layout';
import HeroSection from '../component/HeroSection'
import Contact from '../component/Contact';
import AboutSection from '../component/AboutSection';

const  Home = () => {
  return (
    <Layout>
       <HeroSection/>
       <Contact/>
       <AboutSection/>
    </Layout>
  )
}

export default  Home;
