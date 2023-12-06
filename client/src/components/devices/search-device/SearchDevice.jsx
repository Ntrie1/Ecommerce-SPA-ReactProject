import { useEffect, useState } from "react";
import * as devicesService from '../../../services/devicesService'
import { Link } from "react-router-dom";

import styles from './SearchDevice.module.css';
import Loader from "../../common/loader/Loader";

const SearchDevice = () => {
    const [searchValue, setSearchValue] = useState({ search: '' });
    const [devices, setDevices] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        devicesService.getAll()
            .then(res => {
                setDevices(res.filter(device => device.brand
                    .toLowerCase()
                    .includes(searchValue.search.toLowerCase())))
                setIsLoading(false);    
            })
            .catch(error => {
                setError(error.message);
                setIsLoading(false);             
            })

    }, [searchValue]);

    const onChangeHandler = (e) => {
        setSearchValue(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));

    };


    return (
        <div className="bg-gray-800 p-4 mb-4 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-4">Search Devices</h2>
            <div className="flex items-center">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 mr-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

                <input
                    name="search"
                    type="text"
                    value={searchValue.search}
                    onChange={onChangeHandler}
                    placeholder="Search by brand..."
                    className="flex-1 p-3 border border-gray-600 rounded-md focus:outline-none"
                />


            </div>

            {error && (
                <div className={styles.errorContainer}>
                    <strong>Error:</strong>
                    <span>{error}</span>
                </div>
            )}

            
            {isLoading ? (
                <Loader/>
            ) :devices.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-4 justify-center items-center">
                {devices.map((device) => (
                    <div
                        key={device._id}
                        className="bg-white p-4 rounded-md shadow-md flex flex-col items-center mb-8"
                    >
                        <img
                            src={device.imageUrl}
                            alt={`${device.brand} ${device.deviceType}`}
                            className="w-32 h-32 object-cover mb-2 rounded-md"
                        />
                        <h4 className="text-lg font-semibold mb-2">{device.brand}</h4>
                        <p className="text-gray-600 mb-2">{device.deviceType}</p>
                        <p className="text-gray-700 font-bold">${device.price}</p>
                        <Link
                            to={`/devices/${device._id}`}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Details
                        </Link>
                    </div>
                ))}
            </div>
            ) : (
                <div className="mt-4 flex justify-center items-center">
                <div className="bg-gray-200 p-8 rounded-md shadow-md text-center">
                    <h2 className="text-2xl font-semibold mb-4">No Devices Found</h2>
                    <p className="text-gray-600 mb-4">Sorry, there are no devices matching your search criteria.</p>
                </div>
            </div>
            )
            
            }

          
        </div>
    );
}

export default SearchDevice