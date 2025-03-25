import Link from 'next/link';

interface RoleCard {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const roles: RoleCard[] = [
  {
    title: 'Agent Builders',
    description: 'Create AI agents that leverage WorldLink for seamless integration with the broader ecosystem.',
    icon: '🤖',
    color: 'bg-blue-500',
  },
  {
    title: 'Tool Integrators',
    description: 'Connect existing tools and services to the WorldLink network, extending agent capabilities.',
    icon: '🔧',
    color: 'bg-green-500',
  },
  {
    title: 'Runtime Engineers',
    description: 'Build execution environments that support WorldLink-compatible agents and services.',
    icon: '⚙️',
    color: 'bg-purple-500',
  },
  {
    title: 'Protocol Core Contributors',
    description: 'Help evolve the protocol specification and reference implementations.',
    icon: '📡',
    color: 'bg-red-500',
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Build With Us
        </h2>
        
        <p className="text-xl text-gray-400 max-w-3xl mx-auto text-center mb-16">
          WorldLink is modular by design — and so is the team building it.
        </p>
        
        {/* Roles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {roles.map((role, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-lg p-6 flex flex-col h-full transition-transform hover:translate-y-[-4px]"
            >
              <div className="flex items-center mb-4">
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${role.color} mr-4`}>
                  <span className="text-2xl">{role.icon}</span>
                </div>
                <h3 className="text-xl font-semibold">{role.title}</h3>
              </div>
              
              <p className="text-gray-400 flex-grow">
                {role.description}
              </p>
              
              <div className="mt-6 flex space-x-2">
                {Array.from({ length: 3 + index % 2 }).map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs text-gray-400">
                    {['🌐', '🔍', '💡', '🛠️', '📊'][i % 5]}
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs text-gray-400">
                  +{(index + 2) * 3}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Get involved */}
        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Join the Network</h3>
          
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Whether you're building AI agents, integrating tools, or exploring new possibilities,
            WorldLink Protocol provides the foundation for collaborative intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#" 
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-md transition-colors duration-300 font-medium"
            >
              Submit a Module
            </Link>
            <Link 
              href="#" 
              className="px-8 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-md transition-colors duration-300 font-medium"
            >
              Join the Network
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}