import Testimonials from "@/templates/Testimonials";
import Hero from "@/templates/Hero";
import Navbar from "@/templates/Navbar";
import WriteTestimonial from "@/templates/WriteTestimonial";
import Features from "@/templates/Features";
import Footer from "@/templates/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Features />
      <Testimonials />
      <WriteTestimonial />
      <Footer />
    </>
  );
}
