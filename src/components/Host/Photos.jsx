import { useOutletContext } from "react-router-dom";

function Photos() {
  const { imageUrl, name } = useOutletContext();

  return (
    <div>
      <img
        src={imageUrl}
        alt={name}
        width='120px'
        className="rounded-md"
      />
    </div>
  )
}
export default Photos;