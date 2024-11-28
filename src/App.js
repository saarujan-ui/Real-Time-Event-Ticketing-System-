import React from 'react';
import { Providers } from './providers';
import Router from './router/Router';

function App() {
  return (
    <React.Fragment>
      <Providers>
       <Router/>
      </Providers>
    </React.Fragment>
  );
}

export default App;
