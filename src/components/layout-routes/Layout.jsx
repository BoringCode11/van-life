import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <footer className='px-7 py-4 bg-[#252525] text-gray-50 text-center'>
        &copy; 2023 #VANLIFE
      </footer>
    </>
  )
}

export default Layout;

