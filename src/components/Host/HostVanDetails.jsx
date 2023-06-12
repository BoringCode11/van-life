import { useParams, Outlet } from "react-router-dom"
import { useEffect, useState } from "react";
import VanDetailsLayout from "../layout-routes/VanDetailsLayout";

function VanDetails(props) {
  const { imageUrl, name, type, price } = props;
  return (
    <div className="bg-white py-5 px-7 mt-6 rounded-lg text-[#4D4D4D]">
      <div className="flex mt-5">
        <img
          className="rounded-lg mr-5"
          src={imageUrl}
          width='30%'
          alt={name}
        />
        <div className="p-4">
          <span className="bg-[lightblue] px-5 py-1 rounded-md mt-3 " >{type}</span>
          <h3 className="font-semibold text-[32px] ">{name}</h3>
          <span>${price}/day</span>
        </div>
      </div>

      <div>
        <VanDetailsLayout />
      </div>

      <Outlet />
    </div>
  )
}

function HostVanDetails() {
  const [van, setVan] = useState(null);
  const { id } = useParams();

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
    <div className="px-7 bg-[#fff7ed] pb-8">
      <p>Back to all vans</p>

      {van ? <VanDetails {...van} /> : <>Loading...</>}
    </div>
  )
}
export default HostVanDetails