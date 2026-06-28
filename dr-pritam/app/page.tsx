import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Specializations from "./components/Specializations";
import Services from "./components/Services";
import Stats from "./components/Stats";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import Appointment from "./components/Appointment";
import Blog from "./components/Blog";
import Location from "./components/Location";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Specializations />
        <Services />
        <Stats />
        <WhyChoose />
        <Testimonials />
        <Appointment />
        <Blog />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
