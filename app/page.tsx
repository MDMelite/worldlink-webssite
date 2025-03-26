// app/page.tsx
import Hero from '@/components/sections/Hero';
import Manifesto from '@/components/sections/Manifesto';
import DocumentationHub from '@/components/sections/DocumentationHub';
import Ecosystem from '@/components/sections/Ecosystem';
import Footer from '@/components/sections/Footer';
import ProtocolDiagram from './components/sections/ProtocolDiagram';
import GetIntoProtocol from '@/components/sections/GetIntoProtocol';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <Manifesto />
      <ProtocolDiagram />
      <GetIntoProtocol />
      <DocumentationHub />
      <Ecosystem />
      <Footer />
    </main>
  );
}