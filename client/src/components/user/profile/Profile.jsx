
import { Link } from 'react-router-dom';
import styles from './Profile.module.css'
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../context/authContext';

import * as authService from '../../../services/authService';
import Loader from '../../common/loader/Loader';


const Profile = () => {
  const [devices, setDevices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const { username, email } = useContext(AuthContext);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const devicesData = await authService.createdDevices()
          .then((res) => {
            if (isMounted) setDevices(res), setIsLoading(false);
          })
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    }

  }, [username, email])

  console.log(devices);



  return (
    <div className={styles.mainViewPort}>
           {error && (
                   <div className={styles.errorContainer}>
                   <strong>Error:</strong>
                   <span>{error}</span>
               </div>
                )}
          <div>
      <div className="container mx-auto mb-8 pt-4">

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
          <div className="bg-white p-8 rounded shadow text-center mb-4">
            <h2 className="text-2xl font-bold mb-4">Username: <span className={styles.username}>{username}</span></h2>
            <p className="text-gray-600 mb-4">Email: {email}</p>
          </div>
        </div>


     

            {isLoading ? (
              <Loader />
            ) :  (
              <div className={styles.fullViewport}>
                <div className={styles.customContainer}>

                  <h2 className={styles.heading}>Your offers:</h2>

                  {devices.length > 0 ? (
                    <div className={styles.deviceGrid}>
                      {devices.map((device) => (
                        <div key={device._id} className="bg-white p-4 shadow-md rounded-md">
                          <img
                            src={device.imageUrl}
                            alt='ll'
                            className="w-full h-32 object-cover mb-4 rounded-md"
                          />
                          <h3 className="text-lg font-semibold mb-2">Type: {device.deviceType}</h3>
                          <p className="text-gray-500 text-sm mb-2">Brand: {device.brand}</p>
                          <p className="text-gray-700 text-lg font-bold mb-2">${device.price}</p>
                          <Link to={`/devices/${device._id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                            Go to your offer
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center bg-gray-100 p-8 rounded shadow">
                      <p className="text-4xl font-semibold mb-4">You haven't created any offers yet.</p>
                      <Link to="/devices/create" className="bg-yellow-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300">
                        Create an offer
                      </Link>
                    </div>
                  )}

                </div>
              </div>
            )}

          </div>
     
      </div>
    </div>
  );
}

export default Profile;