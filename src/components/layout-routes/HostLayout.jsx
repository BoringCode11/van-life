import { Outlet, NavLink } from "react-router-dom";

function HostLayout() {
  const style = {
    color: "black",
    textDecoration: "Underline",
    fontWeight: "500"
  }

  return (
    <div>
      <nav className="py-[32px] px-7 text-[18px] text-[#4D4D4D] bg-[#fff7ed]">
        <NavLink
          className="pr-7 hover:text-black hover:underline"
          end
          style={({ isActive }) => isActive ? style : null}
          to='/host'
        >
          Dashboard
        </NavLink>
        <NavLink
          className="pr-7 hover:text-black hover:underline"
          style={({ isActive }) => isActive ? style : null}
          to='/host/income'
        >
          Income
        </NavLink>
        <NavLink
          className="pr-7 hover:text-black hover:underline"
          style={({ isActive }) => isActive ? style : null}
          to='/host/vans'
        >
          Vans
        </NavLink>
        <NavLink
          className="hover:text-black hover:underline"
          style={({ isActive }) => isActive ? style : null}
          to='/host/reviews'
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default HostLayout;