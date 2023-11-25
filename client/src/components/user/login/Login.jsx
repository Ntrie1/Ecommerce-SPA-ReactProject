import { Link } from "react-router-dom";

import useForm from '../../../hooks/useForm';

import styles from './Login.module.css'

const Login = ({
    loginSubmitHandler,
}) =>{

    const {values, onChange, onSubmit} = useForm(loginSubmitHandler,{
        email: '',
        password: '',  
    });


    return(
        <main className={styles.mainBackground}>
        <section className="h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Left column container with background */}
          <div className="hidden md:block md:col-span-1 lg:col-span-2">
            <img
              src="images/login-image.png"
              className="w-full h-full object-cover"
              alt="Sample image"
              />
          </div>
      
          {/* Right column container */}
          <div className="md:col-span-1 lg:col-span-1">
            <form onSubmit={onSubmit} className="max-w-md mx-auto">
              {/* Sign in section */}
              <div className="mb-6">
                {/* Email input */}
                <input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  onChange={onChange}
                  value={values.email}
                  className="w-full p-3 border border-solid border-gray-300 outline-none rounded-lg"
                  />
              </div>
      
              {/* Password input */}
              <div className="mb-6">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={onChange}
                  value={values.password}
                  className="w-full p-3 border border-solid border-gray-300 outline-none rounded-lg"
                  />
              </div>
      
           
      
              {/* Login button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                  Login
                </button>
              </div>
      
              {/* Register link */}
              <p className="mt-4 text-sm">
                Don't have an account?{" "}
                {/* <a
                  href="#!"
                  className="text-blue-500 hover:underline"
                  >
                  Register
                </a> */}

                <Link to={'/register'}> <span className={styles.registerButton}>Register</span></Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
    );
}

 export default Login;