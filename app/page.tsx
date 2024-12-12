import CTA from "@/templates/CTA";
import Features from "@/templates/Features";
import Footer from "@/templates/Footer";
import Hero from "@/templates/Hero";
import Navbar from "@/templates/Navbar";
import Pricing from "@/templates/Pricing";
import Testimonials from "@/templates/Testimonials";

export default function Home() {
  return (
    <main className='min-h-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
