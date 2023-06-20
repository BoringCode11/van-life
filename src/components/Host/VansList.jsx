import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Van({ imageUrl, name, price, id }) {
  return (
    <Link to={`${id}`}>
      <div className='bg-white rounded-lg mb-6 px-6 py-4 cursor-pointer'>
        <div className='flex items-center'>
          <img
            src={imageUrl}
            width='65px'
            height='65px'
            alt={name}
            className='rounded-md'
          />

          <div className='ml-4'>
            <p className='font-bold text-[17px]'>{name}</p>
            <p className='text-[#4D4D4D]'>${price}/day</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

function VansList() {
  const [vans, setVans] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/host/vans');
        const { vans } = await response.json();

        setVans(vans);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [])

  return (
    <div className="px-7 pt-6 bg-[#fff7ed]">
      <h3 className='font-bold text-[24px] pb-4'>Your listed vans</h3>

      {
        vans ?
          vans.map(van => <Van key={van.id} {...van} />)
          :
          <p>Loading...</p>
      }
    </div>
  )
}
export default VansList