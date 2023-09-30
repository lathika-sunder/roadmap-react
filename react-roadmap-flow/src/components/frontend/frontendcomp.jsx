import React from 'react';
import {ReactFlow} from 'reactflow';
import nodes from '../frontend/frontendnodes.json'
import './frontendcomp.css'
import edges from '../frontend/frontendedges.json'



export function Frontend() {
  console.log(nodes)

  return (
    <div>
    <h1>Frontend Roadmap</h1>
    <div className='main' style={{ width: '300vw', height: '200vh' }}>
      <ReactFlow nodes={nodes} edges={edges}
        />
        
    </div>
    </div>
  );
}