import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

function Van(props) {
  const { type, price, imageUrl, name, id } = props;

  return (
    <Link to={`/vans/${id}`}>
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

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/vans');
        const { vans } = await response.json();
        setVans(vans);
      } catch (error) {
        console.error(`Something went wrong: ${error.message}`);
      }
    })()
  }, []);

  return (
    <div className="mx-auto w-fit px-7">
      <h2 className="text-[36px] font-bold mt-[32px] mb-[22px]">Explore our van options</h2>
      <div className="filters flex justify-between items-center">
        <span className="bg-[#FFEAD0] text-[16px] text-[#4D4D4D] px-[26px] py-[8px] rounded-md cursor-pointer">Simple</span>
        <span className="bg-[#FFEAD0] text-[16px] text-[#4D4D4D] px-[26px] py-[8px] rounded-md cursor-pointer">Luxury</span>
        <span className="bg-[#FFEAD0] text-[16px] text-[#4D4D4D] px-[26px] py-[8px] rounded-md cursor-pointer">Rugged</span>
        <span className="underline text-[18px] text-[#4D4D4D] cursor-pointer">clear filters</span>
      </div>

      <div className="vans flex flex-wrap align-center justify-between mt-8">
        {vans ?
          vans.map(van => (
            <Van key={van.id} {...van} />
          ))
          :
          <h2>Loading...</h2>
        }
      </div>

    </div>
  )
}

export default Vans;