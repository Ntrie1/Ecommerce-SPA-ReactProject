
import { Link } from 'react-router-dom';
import styles from './Profile.module.css'


const Profile = () => {

    return (
        <div className="container mx-auto mt-8">
            {/* {userData && ( */}
            <div>
                <h1 className="text-3xl font-bold mb-4">Profile Page</h1>
                <div className="bg-white p-8 rounded shadow">
                    <h2 className="text-2xl font-bold mb-4">Username</h2>
                    <p className="text-gray-600 mb-4">email</p>
                </div>
            </div>
            {/* // )} */}

            {/* {devices.length > 0 && ( */}
            <div>
                <div className={styles.fullViewport}>
                    <div className={styles.customContainer}>

                        <h2 className="text-2xl font-bold mb-4">Your offers:</h2>

                        <div className={styles.deviceGrid}>
                            {/* {devices.map((device) => ( */}
                            <div className="bg-white p-4 shadow-md rounded-md">
                                <img
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSptm3lSGmGNOiqgGZeClmG69bs6d8XK1JrOA'
                                    alt='ll'
                                    className="w-full h-32 object-cover mb-4 rounded-md"
                                />
                                <h3 className="text-lg font-semibold mb-2">Type</h3>
                                <p className="text-gray-500 text-sm mb-2">Brand</p>
                                <p className="text-gray-700 text-lg font-bold mb-2">$55</p>
                                <Link to={`/devices/`} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                            Go to your offer
                        </Link>
                            </div>
                        </div>
                        {/* //   ))} */}
                    </div>
                </div>
            </div>
            {/* )} */}
        </div>
    );
}

export default Profile;