import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Vans, Van } from './components/index';
import Layout from './components/layout-routes/Layout';
import HostLayout from './components/layout-routes/HostLayout';
import Dashboard from './components/Host/Dashboard';
import Income from './components/Host/Income';
import Reviews from './components/Host/Reviews';
import VansList from './components/Host/VansList';
import './server.js';
import Details from './components/Host/Details';
import Pricing from './components/Host/Pricing';
import Photos from './components/Host/Photos';
import VanDetailsLayout from './components/layout-routes/VanDetailsLayout';

function App() {
  return (
    <div className='app min-h-screen container bg-[#fff7ed]'>
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
              <Route path='vans' element={<VansList />} />
              
              <Route path='vans/:id' element={<VanDetailsLayout />}>
                <Route index element={<Details />} />
                <Route path='pricing' element={<Pricing />} />
                <Route path='photos' element={<Photos />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;