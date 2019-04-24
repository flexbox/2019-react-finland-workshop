import React, { Suspense } from 'react';
import Profile from './Profile';
import Repositories from './Repositories';

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Profile />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Repositories />
      </Suspense>
    </>
  );
}

export default App;
