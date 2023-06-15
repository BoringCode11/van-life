import { useOutletContext } from 'react-router-dom';

function Pricing() {
  const { price } = useOutletContext();
  console.log();

  return (
    <div>
      <p className='text-[22px]'><span className='font-bold'>${price}</span>/day</p>
    </div>
  )
}
export default Pricing;