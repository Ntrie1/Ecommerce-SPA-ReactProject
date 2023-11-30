// Register.js
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import styles from './Register.module.css';
import { useContext, useEffect } from 'react';
import AuthContext from '../../../context/authContext';
import useForm from '../../../hooks/useForm';

const Register = () => {
  const { registerSubmitHandler, registerError, clearError } = useContext(AuthContext);

  

  // Define the validation schema
  const registrationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    username: Yup.string().required('Username is required').min(4, 'Name should be at least 4 characters'),
    password: Yup.string().min(5, 'Password must be at least 5 characters').required('Password is required'),
    repeatPassword: Yup.string()
    .required('Confirm Password is required')
  });

  const { values, errors, onChange, onSubmit } = useForm(registerSubmitHandler, {
    email: '',
    username: '',
    password: '',
    repeatPassword: '',
  }, registrationSchema);

  
  useEffect(() => {
    return () => {clearError()}
   },[])

  return (
    <main className={styles.mainBackground}>
      <section className="h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="hidden md:block md:col-span-1 lg:col-span-2">
            <img src="images/register-image.png" className="w-3/5 h-auto object-cover" alt="Sample image" />
          </div>
          <div className="md:col-span-1 lg:col-span-1">
            <form onSubmit={onSubmit} className="max-w-md mx-auto">
              {/* <div className="mb-6">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={onChange}
                  value={values.name}
                  className={`w-full p-3 border border-solid border-gray-300 outline-none rounded-lg ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div> */}
              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  onChange={onChange}
                  value={values.email}
                  className={`w-full p-3 border border-solid border-gray-300 outline-none rounded-lg ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={onChange}
                  value={values.username}
                  className={`w-full p-3 border border-solid border-gray-300 outline-none rounded-lg ${errors.username ? 'border-red-500' : ''}`}
                />
                {errors.username && <p className="text-red-600 text-sm mt-1">{errors.username}</p>}
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={onChange}
                  value={values.password}
                  className={`w-full p-3 border border-solid border-gray-300 outline-none rounded-lg ${errors.password ? 'border-red-500' : ''}`}
                />
                {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="repeatPassword"
                  onChange={onChange}
                  value={values.repeatPassword}
                  className={`w-full p-3 border border-solid border-gray-300 outline-none rounded-lg ${errors.repeatPassword ? 'border-red-500' : ''}`}
                />
                {errors.repeatPassword && <p className="text-red-600 text-sm mt-1">{errors.repeatPassword}</p>}
              </div>
              {registerError && (
                   <div>
                    <p className='text-red-600 text-sm mt-1 mb-4'>{registerError} Please try again.</p>
                </div>
            )}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Register
                </button>
              </div>
              <p className="mt-4 text-sm">
                Have an account already?{' '}
                <Link to={'/login'}>
                  <span className={styles.loginButton}>Login</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
