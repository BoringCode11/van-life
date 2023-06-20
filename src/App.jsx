import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import {
  Home, About, Vans, Van
} from './components/index';
import {
  HostLayout, Layout, VanDetailsLayout
} from './components/layout-routes/index';
import {
  Dashboard, Income, VansList, Reviews, Details, Pricing, Photos
} from './components/Host/index';
import './server.js';

function App() {
  return (
    <div className='app min-h-screen container bg-[#fff7ed]'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
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