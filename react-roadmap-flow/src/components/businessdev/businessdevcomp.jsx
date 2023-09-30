import React from 'react';
import {ReactFlow} from 'reactflow';
import nodes from './businessdevnodes.json'
import edges from './businessdevedges.json'
import './businessdevcomp.css'

export default function Businessdevcomp() {
  return (
    <div>
    <h1>Business Development</h1>
    <div className='main' style={{ width: '300vw', height: '200vh' }}>
    
      <ReactFlow nodes={nodes} edges={edges}  nodeWidth={200}/>
    </div>
    </div>
  );
}