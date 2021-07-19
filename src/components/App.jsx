import React, { useState, useEffect } from 'react';
import Intro from './Intro/Intro';

import { PortfolioProvider } from '../context/context';

function App() {
  
    return (
      <PortfolioProvider>
          <h1>Hello Me</h1>
          <Intro />
      </PortfolioProvider>
    );
  }

  export default App;