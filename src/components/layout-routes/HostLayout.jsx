import { Outlet, Link } from "react-router-dom";

function HostLayout() {
  return (
    <div>
      <nav className="py-[32px] px-7 text-[18px] text-[#4D4D4D]">
        <Link className="pr-7" to='/host'>Dashboard</Link>
        <Link className="pr-7" to='/host/income'>Income</Link>
        <Link to='/host/reviews'>Reviews</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default HostLayout;