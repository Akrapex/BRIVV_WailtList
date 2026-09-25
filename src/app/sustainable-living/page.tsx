import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

export default function SustainableLivingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="w-full grow min-h-175 md:min-h-212.5 bg-white">
        <iframe
          src="https://akrapex-sustainable-living-telmsq.subscribepage.io"
          title="Akrapex Sustainable Living"
          className="w-full h-full min-h-175 md:min-h-212.5 border-0 bg-white"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          loading="lazy"
        />
      </main>
      <Footer />
    </div>
  );
}
