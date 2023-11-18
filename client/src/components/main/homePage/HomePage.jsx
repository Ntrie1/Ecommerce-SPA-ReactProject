import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';


const HomePage = () => {
    return (
        <section>
            <div className="bg-black text-white py-20 h-screen">
                <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
                    <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
                        <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">ElectraSwap</h1>
                        <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Second-hand electronic devices
                        </h2>
                        <p className="text-sm md:text-base text-gray-50 mb-4">Explore our curated collection of second-hand electronic devices for unbeatable prices!</p>
                        <Link href="#"
                            className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                            Explore Now</Link>
                    </div>
                    <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center">
                        <div className={`${styles.imageContainer} h-48 flex flex-wrap content-center`}>
                            <div>
                                <img className={`${styles.image} inline-block mt-28 hidden xl:block`} src="./images/deviceImages.jpg" />
                            </div>
                            <div>
                                <img className={`${styles.image} inline-block mt-24 md:mt-7 p-8 md:p-0 hidden lg:block`} src="./images/devicesYellow.jpg" />
                            </div>
                            <div>
                                <img className={`${styles.image} inline-block mt-28 hidden lg:block`} src="./images/electronics-smung.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomePage;