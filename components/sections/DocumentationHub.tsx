'use client';

import { useState } from 'react';
import Link from 'next/link';

type DocSection = {
  id: string;
  title: string;
  content: string;
}

const docSections: DocSection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: 'WorldLink Protocol provides a standardized communication layer for AI agents, models, and tools to exchange information and capabilities in a secure, verifiable manner. The protocol is designed to be modular, extensible, and adaptable to various implementation contexts.'
  },
  {
    id: 'agent-config',
    title: 'Agent Config',
    content: 'Every WorldLink-compatible agent must implement a standard configuration interface that exposes its capabilities, permissions, and communication preferences. This self-description mechanism enables dynamic discovery and adaptation between systems.'
  },
  {
    id: 'packet-format',
    title: 'Packet Format',
    content: 'WorldLink messages use a structured packet format with standardized headers, content-addressed payloads, and optional metadata. Packets support various serialization formats and can be nested or chained for complex interactions.'
  },
  {
    id: 'discovery',
    title: 'Discovery',
    content: 'The protocol includes mechanisms for agents to discover and connect with other compatible systems, either through centralized registries or decentralized peer-to-peer networks, with configurable permissions and scope limitations.'
  },
  {
    id: 'wlp-sec',
    title: 'WLP-Sec',
    content: 'Security extensions provide cryptographic identity verification, message integrity, and optional content encryption. WLP-Sec supports various authentication mechanisms and trust models to accommodate different security requirements.'
  },
  {
    id: 'wlp-async',
    title: 'WLP-Async',
    content: 'For non-blocking operations, the asynchronous extension adds message queuing, callbacks, and persistent channels. This enables agents to maintain ongoing conversations across multiple interactions without blocking resources.'
  },
  {
    id: 'wlp-mon',
    title: 'WLP-Mon',
    content: 'The monitoring module provides instrumentation, telemetry, and diagnostic capabilities for WorldLink networks. It enables tracking message flows, latency analysis, and detection of communication anomalies.'
  },
];

export default function DocumentationHub() {
  const [activeSection, setActiveSection] = useState('introduction');

  return (
    <section id="documentation" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Documentation Hub
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar navigation */}
          <div className="lg:w-1/4">
            <div className="bg-gray-900 rounded-lg p-4 sticky top-20">
              <h3 className="text-xl font-semibold mb-4 px-4">Contents</h3>
              <nav>
                <ul className="space-y-1">
                  {docSections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                          activeSection === section.id 
                            ? 'bg-purple-900 bg-opacity-50 text-white' 
                            : 'hover:bg-gray-800 text-gray-400'
                        }`}
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      className="w-full text-left px-4 py-2 rounded-md transition-colors hover:bg-gray-800 text-gray-400"
                    >
                      FAQs
                    </button>
                  </li>
                </ul>
              </nav>
              
              <div className="mt-8 px-4 space-y-4">
                <Link 
                  href="https://github.com/worldlink-protocol/spec" 
                  target="_blank"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path>
                  </svg>
                  Clone on GitHub
                </Link>
                <Link 
                  href="/spec.md" 
                  target="_blank"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                  View Raw Spec
                </Link>
              </div>
            </div>
          </div>
          
          {/* Documentation content */}
          <div className="lg:w-3/4">
            <div className="bg-gray-900 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">
                {docSections.find(s => s.id === activeSection)?.title}
              </h3>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed">
                  {docSections.find(s => s.id === activeSection)?.content}
                </p>
                
                {/* Example code block */}
                {activeSection === 'packet-format' && (
                  <pre className="bg-gray-950 p-4 rounded-md mt-6 overflow-x-auto">
                    <code className="text-sm text-gray-300">
{`{
  "header": {
    "version": "1.0.0",
    "messageId": "msg_7f8e9d2c1b3a",
    "timestamp": 1680123456789,
    "sender": {
      "id": "agent_42f7e9d1",
      "type": "assistant"
    },
    "recipient": {
      "id": "agent_98a2b3c4",
      "type": "tool"
    }
  },
  "body": {
    "type": "request",
    "action": "query",
    "parameters": {
      "query": "current weather in San Francisco"
    }
  },
  "metadata": {
    "priority": "normal",
    "ttl": 30000
  }
}`}
                    </code>
                  </pre>
                )}
                
                {/* Extended explanation */}
                <p className="text-gray-400 mt-6">
                  The WorldLink Protocol is designed to evolve through community contribution and recursive improvement. Each module can be implemented independently, allowing for gradual adoption and specialized use cases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}