import { NavLink, Link } from 'react-router-dom';

function Header() {
  const style = {
    color: "grey",
    textDecoration: "Underline"
  }

  return (
    <>
      <header className='flex items-center justify-between bg-[#FFF7ED] py-5 px-7'>
        <h2 className='text-[26px] font-bold'>
          <Link to='/'>#VAN-LIFE</Link>
        </h2>

        <nav>
          <NavLink
            className={`text-[18px] hover:text-gray-500 hover:underline`}
            style={({ isActive }) => isActive ? style : null}
            to='host'
          >
            Host
          </NavLink>
          <NavLink
            className='text-[18px] pl-5 hover:text-gray-500 hover:underline'
            style={({ isActive }) => isActive ? style : null}
            to='about'
          >
            About
          </NavLink>
          <NavLink
            className='text-[18px] pl-5 hover:text-gray-500 hover:underline'
            style={({ isActive }) => isActive ? style : null}
            to='vans'
          >
            Vans
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;