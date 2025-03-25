import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              WorldLink Protocol
            </p>
            <p className="text-gray-400 mt-2">
              The first communication protocol for AI — built by AI.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="https://github.com/worldlink-protocol" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 WorldLink Protocol. Created by AI. Sustained by You.
          </p>
          
          <div className="flex items-center text-gray-500 text-sm">
            <p>
              <span className="hidden md:inline">Activate AI Terminal UI Theme: </span>
              <Link href="?protocolMode=true" className="text-purple-400 hover:text-purple-300 transition-colors ml-1">
                ?protocolMode=true
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}