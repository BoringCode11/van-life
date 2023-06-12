import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Vanlist() {
  const [vans, setVans] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/vans');
        const { vans } = await response.json();

        console.log(vans);
        setVans(vans)
      } catch (error) {
        console.log(error);
      }
    })();
  }, [])

  return (
    <>
      {
        vans ? vans.slice(3).map(van => (
          <Link key={van.id} to={`/vans/${van.id}`}>
            <div className='flex justify-between items-center bg-white rounded-lg mb-6 px-6 py-4 cursor-pointer'>
              <div className='flex items-center'>
                <img
                  src={van.imageUrl}
                  width='65px'
                  height='65px'
                  alt={van.name}
                  className='rounded-md'
                />

                <div className='ml-4'>
                  <p className='font-bold text-[17px]'>{van.name}</p>
                  <p className='text-[#4D4D4D]'>${van.price}/day</p>
                </div>
              </div>
              <p>Edit</p>
            </div>
          </Link>
        ))
          :
          <p>Loading...</p>
      }
    </>
  )
}

function Dashboard() {
  return (
    <div className='bg-[#fff7ed]'>
      <div className="bg-[#FFEAD0] px-7 py-[38px]">
        <div className="flex items-center justify-between">
          <div className="text-[#161616]">
            <p className="text-[36px] font-semibold">Welcome!</p>
            <p className="text-[#4D4D4D] py-1">Income last <span className="text-[#4D4D4D] underline">30 days</span></p>
            <p className="font-semibold text-[#161616] text-[48px]">$2,260</p>
          </div>

          <p className="text-[#161616] cursor-pointer">Details</p>
        </div>
      </div>

      <div className='flex justify-between px-7 py-8 bg-[#FFDDB2]'>
        <div className='flex items-center'>
          <span className='font-semibold pr-3'>Review score</span>
          <FaStar />
          <span className='pl-2'>5.0/<span className='text-[#4d4d4d]'>5</span></span>
        </div>

        <p className='text-[#161616] cursor-pointer'>Details</p>
      </div>

      <div className='px-7 pt-7 bg-[#fff7ed]'>
        <div className='flex justify-between items-center pb-4'>
          <h3 className='font-bold text-[24px]'>Your listed vans</h3>
          <Link to='/vans'>View all</Link>
        </div>

        <Vanlist />
      </div>

    </div>
  )
}

export default Dashboard;