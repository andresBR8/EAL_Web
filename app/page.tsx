import Camp from "@/components/Camp";
//import Features from "@/components/Features";
//import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Services from '@/components/Services'
import ContactSection from "@/components/contact";

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <Camp />
      <Guide />
      <Services/>      
      <ContactSection />
    </div>
  )
}
