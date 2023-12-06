import { useEffect, useState } from "react";

import * as deviceService from '../../../services/devicesService'
import OneDevice from "./one-device/OneDevice";

import styles from './AllDevices.module.css'
import Loader from "../../common/loader/Loader";

const AllDevices = () => {
    const [devices, setDevices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const abortController = new AbortController();
    
        const fetchData = async () => {
            try {
                const response = await deviceService.getAll( { signal: abortController.signal });
                setDevices(response);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                isLoading(false);
            }
        };
    
        fetchData();
    
        return () => {
            abortController.abort();
        };
    }, []);



    return(
        <>
        
        {error && ( 
                <div className={styles.errorContainer}>
                    <strong>Error:</strong>
                    <span>{error}</span>
                </div>
             )} 
            {isLoading ? (
                <Loader />
            ) : devices.length === 0 ? (
                <div className={`${styles.fullViewport} ${styles.customContainer} flex items-center justify-center`}>
                    <p className="text-xl text-gray-800">No devices yet. Please try again later.</p>
                </div>
            ) : (
                <div className={styles.fullViewport}>
                    <div className={styles.customContainer}>
                        <h2 className="text-2xl font-semibold mb-4">All Devices</h2>
                      
                        <div className={styles.deviceGrid}>
                            {devices.map((device) => (
                                <OneDevice
                                    key={device._id}
                                    id={device._id}
                                    imageUrl={device.imageUrl}
                                    type={device.deviceType}
                                    brand={device.brand}
                                    price={device.price}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default AllDevices;