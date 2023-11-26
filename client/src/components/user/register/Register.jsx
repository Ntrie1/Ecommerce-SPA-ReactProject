import { Link } from "react-router-dom";

import styles from './Register.module.css'
import { useContext } from "react";
import AuthContext from "../../../context/authContext";
import useForm from "../../../hooks/useForm";

const Register = () => {
    const { registerSubmitHandler } = useContext(AuthContext);
    const {values, onChange, onSubmit} = useForm(registerSubmitHandler,{
        name: '',
        email: '',
        username: '',
        password: '',
        rePassword: '',
    })

    return(
        <main className={styles.mainBackground}>
        <section className="h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Left column container with background */}
          <div className="hidden md:block md:col-span-1 lg:col-span-2">
            <img
              src="images/register-image.png"
              className="w-3/5 h-auto object-cover"
              alt="Sample image"
              />
          </div>
      
          {/* Right column container */}
          <div className="md:col-span-1 lg:col-span-1">
            <form onSubmit={onSubmit} className="max-w-md mx-auto">
              {/* Sign in section */}
              <div className="mb-6">
                {/* Name input */}
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={onChange}
                  value={values.name}
                  className="w-full p-3 border border-solid border-gray-300 outline-none rounded-lg"
                  />
              </div>

              
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

              <div className="mb-6">
                {/* Username input */}
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={onChange}
                  value={values.username}
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

              <div className="mb-6">
                <input
                  type="password"
                  name="rePassword"
                  placeholder="Confirm Password"
                  onChange={onChange}
                  value={values.rePassword}
                  className="w-full p-3 border border-solid border-gray-300 outline-none rounded-lg"
                  />
              </div>
      
           
      
              {/* Login button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                  Register
                </button>
              </div>
      
              {/* Register link */}
              <p className="mt-4 text-sm">
                Have an account already?{" "}
                {/* <a
                  href="#!"
                  className="text-blue-500 hover:underline"
                  >
                  Register
                </a> */}

                 <Link to={'/login'}> <span className={styles.loginButton}>Login</span></Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
    );
}

export default Register;