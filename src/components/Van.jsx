import { useParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Van() {
  const [van, setVan] = useState(null);
  const { id } = useParams();

  const location = useLocation();
  const search = location.state?.search || '';
  const { type } = location.state;

  const formatType = str => {
    return search ?
      str.charAt(0).toUpperCase() + str.slice(1) : null;
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/vans/${id}`);
        const { vans } = await response.json();
        setVan(vans);
      } catch (error) {
        console.error(error.message);
      }
    })()
  }, [id]);

  return (
    <div className='px-7'>
      <Link
        to={`..?${search ? search : ''}`}
        relative='path'
        className='underline text-[18px] text-[#201F1D] block mt-[24px]'>
        Back to {formatType(type) || 'All'} vans
      </Link>
      {
        van ?
          <div className='text-[#161616]'>
            <img
              className='rounded-lg mt-[32px] mb-[46px]'
              src={van.imageUrl}
              alt={van.name}
            />

            <span className={`inline-block text-[17px] font-semibold rounded-md px-[42px] py-[12px] mb-[26px] align-top capitalize bg-gray-200 text-blue-950`}>
              {van.type}
            </span>

            <h2 className='text-[36px] text-[#161616] font-bold leading-10'>{van.name}</h2>

            <p className='text-[22px] text-[#161616] font-semibold mb-[16px]'>
              ${van.price}
              <span className='text-[18px]'>/day</span>
            </p>

            <p className='text-[17px] mb-[32px]'>The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!</p>

            <button className='bg-[#FF8C38] py-[12px] font-semibold text-[18px] text-white w-full rounded-md mb-[36px]'>
              Rent this van
            </button>

          </div>
          :
          <p>Loading...</p>
      }
    </div>
  );
}

export default Van;