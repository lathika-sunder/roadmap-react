import React from 'react';
import 'reactflow/dist/style.css'
import Devops from './components/devops/devopscomp';
import { Frontend } from './components/frontend/frontendcomp';
import { AiEngineer } from './components/aiEngineer/aiEngineer';
import Businessdevcomp from './components/businessdev/businessdevcomp';


export function App() {
  return (
    <div>
      <Businessdevcomp />
    </div>
  );
}