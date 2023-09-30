import React from 'react';
import {ReactFlow} from 'reactflow';
import nodes from './aiEngineerNodes.json'
import './aiEngineer.css'
import edges from './aiEngineeredges.json'



export function AiEngineer() {
  console.log(nodes)

  return (
    <div>
    <h1>AI Engineer Roadmap</h1>
    <div className='main' style={{ width: '300vw', height: '200vh' }}>
      <ReactFlow nodes={nodes} edges={edges}
        />
    </div>
    </div>
  );
}