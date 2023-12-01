import { useEffect, useState } from "react";

import * as deviceService from '../../../services/devicesService'

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
        <div>
        <h2 className="text-2xl font-semibold mb-4">All Devices</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    
        <div className="bg-white p-4 shadow-md rounded-md">
          <img
            src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
            alt='ll'
            className="w-full h-32 object-cover mb-4 rounded-md"
          />
          <h3 className="text-lg font-semibold mb-2">Type</h3>
          <p className="text-gray-500 text-sm mb-2">Model</p>
          <p className="text-gray-700 text-lg font-bold mb-2">56</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Details
          </button>
        </div>
    
    </div>
      </div>
    );
}

export default AllDevices;