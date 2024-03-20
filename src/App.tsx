import { AppRouter } from '@routes/routes';
import { BrowserRouter } from 'react-router-dom';
import { Nav } from '@molecules/nav';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='flex bg-cl-gray-light/40 gap-4 p-5'>
        <section className='w-[30%] 2xl:w-[20%] bg-cl-white min-h-screen rounded-md'>
          <Nav />
        </section>
        <section className='w-[70%] 2xl:w-[80%] bg-cl-white min-h-screen rounded-md'>
          <AppRouter />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
