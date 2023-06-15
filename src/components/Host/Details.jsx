import { useOutletContext } from 'react-router-dom';

function Details() {
  const { name, type, description } = useOutletContext();

  return (
    <div>
      <p className='pb-2'>
        <span className='font-bold'>Name:</span>
        {name}
      </p>
      <p className='pb-2'>
        <span className='font-bold'>Category:</span>
        {type}
      </p>
      <p className='pb-2'>
        <span className='font-bold'>Description:</span>
        {description}
      </p>
      <p className='pb-2'>
        <span className='font-bold'>Visibility:</span>
        Public
      </p>
    </div>
  )
}
export default Details