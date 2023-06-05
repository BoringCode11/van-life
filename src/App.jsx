import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home, About } from './components/index';

function App() {
  return (
    <>
      <BrowserRouter>
        <header
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <h2>
            <Link to='/'>#nav-life</Link>
          </h2>
          <nav>
            <Link to='/about'>about</Link>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;