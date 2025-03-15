
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Security from "@/components/Security";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>IndigoNotes - Privacy-First Note Taking</title>
        <meta name="description" content="Secure, private notes with end-to-end encryption. Not even we can read your content." />
      </Helmet>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Features />
          <Security />
          <Testimonials />
          <Pricing />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
