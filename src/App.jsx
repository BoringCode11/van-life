import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Vans, Van } from './components/index';
import Layout from './components/layout-routes/Layout';
import './server';
import HostLayout from './components/layout-routes/HostLayout';
import Dashboard from './components/Host/Dashboard';
import Income from './components/Host/Income';
import Reviews from './components/Host/Reviews';

function App() {
  return (
    <div className='app min-h-screen container'>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='vans' element={<Vans />} />
            <Route path='vans/:id' element={<Van />} />

            <Route path='host' element={<HostLayout />} >
              <Route index element={<Dashboard />} />
              <Route path='income' element={<Income />} />
              <Route path='reviews' element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;