import { useParams, NavLink, Outlet, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function VanDetailsLayout() {
  const [van, setVan] = useState(null);
  const { id } = useParams();

  const style = {
    color: "black",
    textDecoration: "Underline",
    fontWeight: "600"
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/host/vans/${id}`);
        const { vans } = await response.json();
        const [van] = vans;
        setVan(van);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [id]);

  return (
    <div className='bg-[#fff7ed]'>
      <Link
        className='px-7 underline text-[1.1rem]'
        to='..'
        relative='path'
      >
        Back to all vans
      </Link>

      {van ?
        <div className="bg-white py-5 px-7 mt-6 rounded-lg text-[#4D4D4D] mx-7">
          <div className="flex mt-3">
            <img
              className="rounded-lg mr-3"
              src={van.imageUrl}
              width='40%'
              alt={van.name}
            />
            <div className="p-4">
              <span className="bg-[lightblue] px-5 py-1 inline-block mb-2 rounded-md mt-1" >
                {van.type}
              </span>
              <h3 className="font-bold text-[22px] mb-1">{van.name}</h3>
              <span>${van.price}/day</span>
            </div>
          </div>

          <nav className="py-[32px] text-[18px] text-[#4D4D4D]">
            <NavLink
              className="pr-7 hover:text-black hover:underline"
              end
              style={({ isActive }) => isActive ? style : null}
              to='.'
            >
              Details
            </NavLink>
            <NavLink
              className="pr-7 hover:text-black hover:underline"
              style={({ isActive }) => isActive ? style : null}
              to='pricing'
            >
              Pricing
            </NavLink>
            <NavLink
              className="pr-7 hover:text-black hover:underline"
              style={({ isActive }) => isActive ? style : null}
              to='photos'
            >
              Photos
            </NavLink>
          </nav>

          <Outlet context={van} />
        </div>
        :
        <>Loading...</>}
    </div>
  )
}
export default VanDetailsLayout;