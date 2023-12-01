import { useEffect, useState } from "react";

import * as deviceService from '../../../services/devicesService'
import OneDevice from "./one-device/OneDevice";

import styles from './AllDevices.module.css'

const AllDevices = () => {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
    
        const fetchData = async () => {
            try {
                const response = await deviceService.getAll( { signal: abortController.signal });
                setDevices(response);
            } catch (error) {
                if (error.name === 'AbortError') {
                    console.log('Fetch aborted:', error.message);
                } else {
                    console.error('Fetch error:', error);
                }
            }
        };
    
        fetchData();
    
        return () => {
            abortController.abort();
        };
    }, []);



    return(
        <div className={styles.fullViewport}>

        <div className={styles.customContainer}>
        <h2 className="text-2xl font-semibold mb-4">All Devices</h2>
        <div className={styles.deviceGrid}>
    
        {devices.map(device =>
             <OneDevice
             key={device._id} 
             id={device._id}
              imageUrl={device.imageUrl}
              type={device.deviceType}
              brand={device.brand}
              price={device.price}
              />)}
    
        </div>
        </div>
        </div>
    );
}

export default AllDevices;