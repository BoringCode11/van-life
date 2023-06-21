import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="px-8 py-20">
      <h1 className='font-bold text-[32px] leading-9 mb-8'>
        Sorry, the page you were looking for was not found.
      </h1>

      <Link
        to='/'
        className='text-white bg-[#161616] block text-center rounded-md w-full py-3 font-semibold text-[22px]'
      >
        Return to home
      </Link>
    </div>
  )
}
export default NotFound;