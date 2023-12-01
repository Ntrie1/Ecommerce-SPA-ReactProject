import { Link } from "react-router-dom";

const OneDevice = ({ 
    id,
    imageUrl,
    type,
    brand,
    price,
}) => {

    return(
    <div className="bg-white p-4 shadow-md rounded-md">
    <img
      src={imageUrl}
      alt='ll'
      className="w-full h-32 object-cover mb-4 rounded-md"
    />
    <h3 className="text-lg font-semibold mb-2">{ type }</h3>
    <p className="text-gray-500 text-sm mb-2">{brand}</p>
    <p className="text-gray-700 text-lg font-bold mb-2">${price}</p>
    <Link to={`/devices/${id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
      Details
    </Link>
  </div>
  );

}

export default OneDevice;