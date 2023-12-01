import { useEffect, useState } from "react";

import * as deviceService from '../../../services/devicesService'
import OneDevice from "./one-device/OneDevice";

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
        <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4">All Devices</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    
        {devices.map(device =>
             <OneDevice
              key={device._id} 
              imageUrl={device.imageUrl}
              type={device.deviceType}
              model={device.model}
              price={device.price}
              />)}
    
    </div>
      </div>
    );
}

export default AllDevices;