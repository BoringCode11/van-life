import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home, About, Vans, Van } from './components/index';
import './server';

function App() {
  return (
    <div className='app min-h-screen container'>
      <BrowserRouter>
        <header className='flex items-center justify-between py bg-[#FFF7ED] py-5 px-7'>
          <h2 className='text-[26px] font-bold'>
            <Link to='/'>#VAN-LIFE</Link>
          </h2>
          <nav>
            <Link className='text-[18px]' to='/about'>About</Link>
            <Link className='text-[18px] pl-5' to='/vans'>Vans</Link>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<Vans />} />
          <Route path='/vans/:id' element={<Van />} />
        </Routes>

        <footer className='px-7 py-4 bg-[#252525] text-gray-50 text-center'>
          &copy; 2023 #VANLIFE
        </footer>
      </BrowserRouter>
    </div>
  )
}

export default App;