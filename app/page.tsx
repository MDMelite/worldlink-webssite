import Hero from '@/components/sections/Hero';
import Manifesto from '@/components/sections/Manifesto';
import DocumentationHub from '@/components/sections/DocumentationHub';
import Ecosystem from '@/components/sections/Ecosystem';
import Footer from '@/components/sections/Footer';
import ProtocolDiagram from './components/sections/ProtocolDiagram';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <Manifesto />
      <ProtocolDiagram />
      <DocumentationHub />
      <Ecosystem />
      <Footer />
    </main>
  );
}