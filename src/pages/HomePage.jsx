
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>IT Freelancer - Professional Software Development & Data Analysis Services</title>
        <meta 
          name="description" 
          content="Expert IT freelancer specializing in software development, web applications, and data analysis. Transform your ideas into powerful digital solutions with 5+ years of experience." 
        />
      </Helmet>

      <div className="min-h-screen bg-white" style={{ scrollBehavior: 'smooth' }}>
        <Header />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
