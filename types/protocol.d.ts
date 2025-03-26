// types/protocol.d.ts

export interface ProtocolModule {
    id: string;
    name: string;
    description?: string;
    position: [number, number, number];
    color: string;
    ports?: {
      input: number;
      output: number;
    };
    connections?: string[]; // IDs of connected modules
  }
  
  export interface ProtocolAgent {
    id: string;
    name: string;
    type?: string;
    moduleId: string; // ID of the module this agent is connected to
    position: [number, number, number];
    trustLevel?: number; // 0-100 trust level
    status?: 'active' | 'inactive' | 'pending';
  }
  
  export interface ProtocolManifest {
    id: string;
    name: string;
    description: string;
    version: string;
    timestamp: string;
    capabilities: string[];
    dependencies: string[];
    trustScore: number;
  }
  
  export interface Arc {
    sourceId: string;
    targetId: string;
    type: 'module-to-module' | 'agent-to-module';
    status?: 'active' | 'inactive';
    dataFlowRate?: number; // 0-100 rate of data flow
  }