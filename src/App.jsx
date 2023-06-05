import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home, About } from './components/index';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <header>
          <h2>
            <Link to='/'>#VAN-LIFE</Link>
          </h2>
          <nav>
            <Link to='/about'>about</Link>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>

        <footer>&copy; 2023 #VANLIFE</footer>
      </BrowserRouter>
    </div>
  )
}

export default App;