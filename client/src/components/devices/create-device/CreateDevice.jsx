import { useContext } from 'react';
import { object, string, number } from 'yup';
import AuthContext from '../../../context/authContext';
import useForm from '../../../hooks/useForm';
import styles from './CreateDevice.module.css';
import * as devicesService from '../../../services/devicesService';

const validationSchema = object().shape({
  deviceType: string().required('Device Type is required'),
  brand: string().required('Brand is required'),
  model: string().required('Model is required'),
  condition: string().required('Condition is required'),
  storageCapacity: string().required('Storage Capacity is required'),
  color: string().required('Color is required'),
  price: number().required('Price is required'),
  description: string().required('Description is required'),
  imageUrl: string().required('Image URL is required'),
  sellerNumber: string().required('Seller Number is required'),
});

const CreateDevice = () => {
  const { usename, _id } = useContext(AuthContext);

  const onCreateDeviceSubmit = async (values) => {
    const response = await devicesService.create(values);
    console.log(response);
  };

  const { values, errors, onChange, onSubmit } = useForm(
    onCreateDeviceSubmit,
    {
      deviceType: '',
      brand: '',
      model: '',
      condition: '',
      storageCapacity: '',
      color: '',
      price: '',
      description: '',
      imageUrl: '',
      sellerNumber: '',
    },
    validationSchema
  );

  return (
    <>
      <main className={styles.mainBackground}>
        <h2 className={styles.heading}>Create an Offer!</h2>

        <form
          onSubmit={onSubmit}
          className="max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded-md bg-gray-100"
        >
          {/* Device Type */}
          <div className="mb-4">
            <label
              className="block text-sm font-semibold mb-1"
              htmlFor="deviceType"
            >
              Device Type
            </label>
            <input
              type="text"
              id="deviceType"
              name="deviceType"
              value={values.deviceType}
              onChange={onChange}
              className={`w-full p-3 border border-solid border-gray-300 outline-none rounded-lg ${
                errors.deviceType ? 'border-red-500' : ''
              }`}
              placeholder="e.g., Smartphone, Laptop, Tablet"
            />
            {errors.deviceType && (
              <p className="text-red-500 text-sm">{errors.deviceType}</p>
            )}
          </div>

          {/* Brand */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1" htmlFor="brand">
              Brand
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={values.brand}
              onChange={onChange}
              className={`w-full p-3 border border-solid border-gray-300 outline-none rounded-lg ${
                errors.brand ? 'border-red-500' : ''
              }`}
              placeholder="Brand"
            />
            {errors.brand && (
              <p className="text-red-500 text-sm">{errors.brand}</p>
            )}
          </div>

          {/* Model */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1" htmlFor="model">
              Model
            </label>
            <input
              type="text"
              id="model"
              name="model"
              value={values.model}
              onChange={onChange}
              className={`w-full p-3 border border-solid border-gray-300 outline-none rounded-lg ${
                errors.model ? 'border-red-500' : ''
              }`}
              placeholder="Model"
            />
            {errors.model && (
              <p className="text-red-500 text-sm">{errors.model}</p>
            )}
          </div>

          {/* Condition */}
          <div className="mb-4">
            <label
              className="block text-sm font-semibold mb-1"
              htmlFor="condition"
            >
              Condition
            </label>
            <input
              type="text"
              id="condition"
              name="condition"
              value={values.condition}
              onChange={onChange}
              className={`w-full p-3 border border-solid border-gray-300 outline-none rounded-lg ${
                errors.condition ? 'border-red-500' : ''
              }`}
              placeholder="Condition"
            />
            {errors.condition && (
              <p className="text-red-500 text-sm">{errors.condition}</p>
            )}
          </div>

          {/* Storage Capacity */}
          <div className="mb-4">
            <label
              className="block text-sm font-semibold mb-1"
              htmlFor="storageCapacity"
            >
              Storage Capacity
            </label>
            <input
              type="text"
              id="storageCapacity"
              name="storageCapacity"
              value={values.storageCapacity}
              onChange={onChange}
              className={`w-full p-3 border border-solid border-gray-300 outline-none rounded-lg ${
                errors.storageCapacity ? 'border-red-500' : ''
              }`}
              placeholder="Storage Capacity"
            />
            {errors.storageCapacity && (
              <p className="text-red-500 text-sm">{errors.storageCapacity}</p>
            )}
          </div>

          {/* Color */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1" htmlFor="color">
              Color
            </label>
            <input
              type="text"
              id="color"
              name="color"
              value={values.color}
              onChange={onChange}
              className={`w-full p-3 border border-solid border-gray-300 outline-none rounded-lg ${
                errors.color ? 'border-red-500' : ''
              }`}
              placeholder="Device color"
            />
            {errors.color && (
              <p className="text-red-500 text-sm">{errors.color}</p>
            )}
          </div>

          {/* Price */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={values.price}
              onChange={onChange}
              className={`w-full p-3 border border-solid border-gray-300 outline-none rounded-lg ${
                errors.price ? 'border-red-500' : ''
              }`}
              placeholder="Device price"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price}</p>
            )}
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              className="block text-sm font-semibold mb-1"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={values.description}
              onChange={onChange}
              className={`w-full p-3 border border-solid border-gray-300 outline-none rounded-lg resize-none ${
                errors.description ? 'border-red-500' : ''
              }`}
              placeholder="Device description"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}
          </div>

          {/* Image URL */}
          <div className="mb-4">
            <label
              className="block text-sm font-semibold mb-1"
              htmlFor="imageUrl"
            >
              Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={values.imageUrl}
              onChange={onChange}
              className={`w-full p-3 border border-solid border-gray-300 outline-none rounded-lg ${
                errors.imageUrl ? 'border-red-500' : ''
              }`}
              placeholder="Image URL"
            />
            {errors.imageUrl && (
              <p className="text-red-500 text-sm">{errors.imageUrl}</p>
            )}
          </div>

          {/* Seller Number */}
          <div className="mb-4">
            <label
              className="block text-sm font-semibold mb-1"
              htmlFor="sellerNumber"
            >
              Seller Number
            </label>
            <input
              type="text"
              id="sellerNumber"
              name="sellerNumber"
              value={values.sellerNumber}
              onChange={onChange}
              className={`w-full p-3 border border-solid border-gray-300 outline-none rounded-lg ${
                errors.sellerNumber ? 'border-red-500' : ''
              }`}
              placeholder="Seller Number"
              inputMode="numeric"
            />
            {errors.sellerNumber && (
              <p className="text-red-500 text-sm">{errors.sellerNumber}</p>
            )}
          </div>

          {/* Submit button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Create Device
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default CreateDevice;
