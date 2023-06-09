import { Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { fetchData } from '../fetchData';

function Van(
  { type, price, imageUrl, name, id, searchParams, typeFilter }
) {
  return (
    <Link to={id} state={{ search: searchParams, type: typeFilter }}>
      <div className="mb-10">
        <img
          src={imageUrl}
          alt={name}
          width='225px'
          height='225px'
          className="rounded-lg mb-[12px]"
        />
        <div className="font-medium text-[20px] flex justify-between align-center">
          <span className="font-medium text-[20px]">{name}</span>
          <span>${price}</span>
        </div>
        <div className="flex justify-between align-center pt-[8px]">
          <span className={`text-[16px] text-black font-semibold rounded-md px-[18px] py-[6px] bg-gray-200 align-top capitalize`}>{type}</span>
          <span className="relative top-[-10px] text-[18px]"><sup>/day</sup></span>
        </div>
      </div>
    </Link>
  )
}

function Vans() {
  const [vans, setVans] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchData();
        const { vans } = data;
        setVans(vans);
      } catch (error) {
        setError(!error);
        console.error(`Something went wrong: ${error.message}`);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  let displayedVans;
  if (vans) {
    displayedVans = typeFilter
      ? vans.filter(van => van.type.toLowerCase() === typeFilter)
      : vans;
  }

  function setParams(key, value) {
    setSearchParams(params => {
      return value == null ? params.delete(key) : params.set(key, value);
    })
  }

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>something went wrong...</h1>
  }

  return (
    <div className="mx-auto w-fit px-7">
      <nav className='text-[white] flex'>
        <button
          onClick={() => setParams('type', 'simple')}
          className={`mr-3 bg-[#FFEAD0] py-2 px-6 rounded-md hover:bg-[#E17654] ${typeFilter === 'simple' ? 'simple-active' : ''}`}
        >
          Simple
        </button>
        <button
          onClick={() => setParams('type', 'rugged')}
          className={`mr-3 bg-[#FFEAD0] py-2 px-6 rounded-md hover:bg-[#115E59] ${typeFilter === 'rugged' ? 'rugged-active' : ''}`}
        >
          Rugged
        </button>
        <button
          onClick={() => setParams('type', 'luxury')}
          className={`mr-3 bg-[#FFEAD0] py-2 px-6 rounded-md hover:bg-[#161616] ${typeFilter === 'luxury' ? 'luxury-active' : ''}`}
        >
          Luxury
        </button>

        {typeFilter && <button
          onClick={() => setParams('type', null)}
          className='underline text-[#141414] text-[18px]'
        >
          Clear searches
        </button>}
      </nav>

      <div className="vans gap-4 flex flex-wrap align-center justify-between mt-8">
        {vans ?
          displayedVans.map(van => (
            <Van key={van.id} {...van} searchParams={`${searchParams.toString()}`} typeFilter={typeFilter} />
          ))
          :
          <h2>Loading...</h2>
        }
      </div>
    </div>
  )
}

export default Vans;