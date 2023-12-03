import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/authContext";
import { Link, useParams } from "react-router-dom";

import styles from './DetailsDevice.module.css'
import * as deviceService from '../../../services/devicesService'

const DetailsDevice = () => {
    const { userId } = useContext(AuthContext);
    const { deviceId } = useParams();
    const [device, setDevice] = useState([]);
    const [isOwner, setIsOwner] = useState(false);
    const [error, setError] = useState(null);

   

    useEffect(() => {
        let isMounted = true;

        deviceService.getOne(deviceId)
            .then((result) => {
                if (isMounted) {
                    setDevice(result);
                    setIsOwner(result.userId == userId);
                }
            })
            .catch((error) => {
                setError(error.message)
            });
    
        return () => {
            isMounted = false;
        };
    }, [deviceId]);


    console.log(isOwner);



    return (

        <div className={styles.backgroundContainer}>
             {error && ( 
                <div className={styles.errorContainer}>
                    <strong>Error:</strong>
                    <span>{error}</span>
                </div>
             )} 

        <div className="max-w-md mx-auto mt-8 mb-20 p-4 border border-gray-300 rounded-md bg-white">
            <img
                src={device.imageUrl}
                alt='ll'
                className="w-full h-64 object-cover mb-4 rounded-md"
            />
            <h2 className="text-2xl font-semibold mb-4">
                Brand Model
            </h2>
            <p className="text-gray-700 mb-2">
                <span className="font-semibold">Type:</span> {device.deviceType}
            </p>
            <p className="text-gray-700 mb-2">
                <span className="font-semibold">Condition:</span> {device.condition}
            </p>
            <p className="text-gray-700 mb-2">
                <span className="font-semibold">Storage Capacity:</span>{' '}
                {device.storageCapacity}
            </p>
            <p className="text-gray-700 mb-2">
                <span className="font-semibold">Color:</span> {device.color}
            </p>
            <p className="text-gray-700 mb-2">
                <span className="font-semibold">Price:</span> ${device.price}
            </p>
            <p className="text-gray-700 mb-4">
                <span className="font-semibold">Description:</span> {device.description} 
            </p>
            <p className="text-gray-700 mb-4">
                <span className="font-semibold">Seller Number:</span>{' '}
                {device.sellerNumber}
            </p>
            {isOwner && (
                    <div className="flex justify-between mt-4">
                        <Link to={`/devices/${deviceId}/edit`}
                            // onClick={handleEdit}
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Edit
                        </Link>
                        <button
                            // onClick={handleDelete}
                            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
                        >
                            Delete
                        </button>
                    </div>
                )}
        </div>

        </div> 
    );

}

export default DetailsDevice;