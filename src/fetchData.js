import './server';

const fetchData = async () => {
  const res = await fetch('/api/vans');

  if (!res.ok) {
    throw new Error('something went wrong')
  }

  const data = await res.json();
  return data;
}

export { fetchData };