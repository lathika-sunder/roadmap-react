import React from 'react';
import {ReactFlow} from 'reactflow';
import nodes from './devopsnodes.json'
import edges from './devopsedges.json'
import './devopscomp.css'

export default function Devops() {
  return (
    <div className='main' style={{ width: '300vw', height: '200vh' }}>
    <h1>Devops Roadmap</h1>
      <ReactFlow nodes={nodes} edges={edges}  nodeWidth={200}/>
    </div>
  );
}