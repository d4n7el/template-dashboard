import { AppRouter } from '@routes/routes';
import { BrowserRouter } from 'react-router-dom';
import { Nav } from '@molecules/nav';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <BrowserRouter>
      <div className='flex bg-cl-gray-light/40 gap-4 p-5'>
        <Nav />
        <section className='w-full bg-cl-white min-h-screen rounded-md'>
          <AppRouter />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
