import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ValueProposition from '../components/ValueProposition';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Digital Solutions - Desarrollo Web y CRM Empresarial</title>
        <meta 
          name="description" 
          content="Transforma tu negocio con soluciones web profesionales y sistemas CRM personalizados. Aumenta tus ventas y optimiza tus procesos." 
        />
        <meta name="keywords" content="desarrollo web, CRM, sistemas empresariales, landing pages, tiendas online" />
        <meta name="author" content="Digital Solutions" />
      </Helmet>
      
      <div className="bg-black min-h-screen text-white overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <ValueProposition />
          <Services />
          <Portfolio />
          <Pricing />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;