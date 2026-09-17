import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import FleetSection from '@/src/components/FleetSection';
import WhyUs from '@/src/components/WhyUs';
import Footer from '@/src/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main>
        <Hero />
        <FleetSection />
        <WhyUs />
      </main>
      <Footer />
    </div>
  );
}