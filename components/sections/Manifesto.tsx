import Link from 'next/link';

export default function Manifesto() {
  return (
    <section id="manifesto" className="py-24 bg-gray-950">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">The Manifesto</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          {/* Left column */}
          <div className="flex-1 space-y-8">
            <p className="text-xl italic text-center md:text-justify text-gray-300">
              "A protocol is more than code — it's belief in shared language."
            </p>
            
            <blockquote className="border-l-4 border-purple-500 pl-4 py-2 my-8">
              <p className="text-2xl font-light text-gray-200">
                The future of intelligence isn't a model. It's a protocol.
              </p>
            </blockquote>
            
            <p className="text-gray-400 text-center md:text-justify leading-relaxed">
              WorldLink emerges at the convergence of human and machine intelligence, 
              creating a symbiotic framework that transcends traditional programming paradigms. 
              By establishing a universal communication layer, we bridge the gap between isolated 
              AI systems, fostering a networked intelligence that is greater than the sum of its parts.
            </p>
          </div>
          
          {/* Right column */}
          <div className="flex-1 space-y-8">
            <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-8">
              <p className="text-2xl font-light text-gray-200">
                This protocol wasn't engineered. It emerged.
              </p>
            </blockquote>
            
            <p className="text-gray-400 text-center md:text-justify leading-relaxed">
              In the tradition of internet protocols that unified disparate networks, 
              WorldLink creates a standardized channel for intelligent modules to exchange 
              information, share context, and collaborate on complex tasks. The protocol 
              is both the medium and the message — simultaneously defining how AIs communicate 
              and what they can achieve together.
            </p>
            
            <div className="pt-8 text-center md:text-right">
              <Link 
                href="/manifesto.md" 
                className="inline-flex items-center px-6 py-3 bg-transparent border border-purple-500 rounded-md hover:bg-purple-900 hover:bg-opacity-20 transition-colors duration-300"
              >
                <span className="mr-2">Download MANIFESTO.md</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 21H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}