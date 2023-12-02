const DetailsDevice = () => {

    return (
        <div className="max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded-md bg-white">
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC9zV2Kdykohn322cIp3e8Nk4u-n6ZHR0K1w&usqp=CAU'
                alt='ll'
                className="w-full h-64 object-cover mb-4 rounded-md"
            />
            <h2 className="text-2xl font-semibold mb-4">
                Brand Model
            </h2>
            <p className="text-gray-700 mb-2">
                <span className="font-semibold">Type:</span> some type
            </p>
            <p className="text-gray-700 mb-2">
                <span className="font-semibold">Condition:</span> consdofn
            </p>
            <p className="text-gray-700 mb-2">
                <span className="font-semibold">Storage Capacity:</span>{' '}
                1T
            </p>
            <p className="text-gray-700 mb-2">
                <span className="font-semibold">Color:</span>pink
            </p>
            <p className="text-gray-700 mb-2">
                <span className="font-semibold">Price:</span> $345
            </p>
            <p className="text-gray-700 mb-4">
                <span className="font-semibold">Description:</span> desctpskjtr 
            </p>
            <p className="text-gray-700 mb-4">
                <span className="font-semibold">Seller Number:</span>{' '}
                0235235
            </p>
        </div>
    );

}

export default DetailsDevice;