const OneDevice = ({ 
    imageUrl,
    type,
    model,
    price,
}) => {

    return(<div className="bg-white p-4 shadow-md rounded-md">
    <img
      src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
      alt='ll'
      className="w-full h-32 object-cover mb-4 rounded-md"
    />
    <h3 className="text-lg font-semibold mb-2">{ type }</h3>
    <p className="text-gray-500 text-sm mb-2">{model}</p>
    <p className="text-gray-700 text-lg font-bold mb-2">${price}</p>
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
      Details
    </button>
  </div>);

}

export default OneDevice;