import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className='flex items-center justify-between py bg-[#FFF7ED] py-5 px-7'>
        <h2 className='text-[26px] font-bold'>
          <Link to='/'>#VAN-LIFE</Link>
        </h2>
        <nav>
          <Link className='text-[18px]' to='/host'>Host</Link>
          <Link className='text-[18px] pl-5' to='/about'>About</Link>
          <Link className='text-[18px] pl-5' to='/vans'>Vans</Link>
        </nav>
      </header>
    </>
  );
}

export default Header;