import React from 'react';
import Profile from './Profile';
import Repositories from './Repositories';

// Normal import
// import Chart from './Chart';

// Lazy loading
const Footer = React.lazy(() => import('./Footer'));
const Chart = React.lazy(() => import('./Chart'));

function App() {
  return (
    <div>
      <div style={{ float: 'left' }}>
        <Profile />
        <Repositories />
      </div>
      <div style={{ float: 'right' }}>
        <React.Suspense fallback={<div>Loading the Chart …</div>}>
          <Chart />
        </React.Suspense>
        <React.Suspense fallback={<div>Loading the footer …</div>}>
          <Footer />
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
