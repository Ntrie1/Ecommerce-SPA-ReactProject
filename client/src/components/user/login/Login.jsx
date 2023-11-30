import { Link } from "react-router-dom";
import * as Yup from 'yup';  // Import Yup
import useForm from '../../../hooks/useForm';

import styles from './Login.module.css'
import { useContext, useEffect } from "react";
import AuthContext from "../../../context/authContext";

// Define a Yup schema for validation
const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(5, 'Password must have at least 5 characters'),
});

const Login = () => {
    const { loginSubmitHandler, loginError, clearError } = useContext(AuthContext)

    // Pass the validation schema to the useForm hook
    const { values, errors, onChange, onSubmit } = useForm(
        loginSubmitHandler,
        {
            email: '',
            password: '',
        },
        validationSchema  // Add validation schema
    );

    useEffect(() => {
      return () => {clearError()}
     },[])

    return (
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
                                    className={`w-full p-3 border border-solid border-gray-300 outline-none rounded-lg ${
                                        errors.email ? 'border-red-500' : ''
                                    }`}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                )}
                            </div>

                            {/* Password input */}
                            <div className="mb-6">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={onChange}
                                    value={values.password}
                                    className={`w-full p-3 border border-solid border-gray-300 outline-none rounded-lg ${
                                        errors.password ? 'border-red-500' : ''
                                    }`}
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                                )}
                            </div>

                            {/* Login button */}
                            {loginError && (
                   <div>
                    <p className='text-red-600 text-sm mt-1 mb-4'>{loginError} Please try again.</p>
                </div>
            )}
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
                                Don't have an account?{' '}
                                <Link to={'/register'}>
                                    {' '}
                                    <span className={styles.registerButton}>Register</span>
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Login;
