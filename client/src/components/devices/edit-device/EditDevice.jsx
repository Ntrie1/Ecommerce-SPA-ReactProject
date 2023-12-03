import { useNavigate, useParams } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import { object, string, number } from 'yup';
import { useEffect, useState } from "react";

import * as devicesService from '../../../services/devicesService'

import styles from './EditDevice.module.css';

const validationSchema = object().shape({
    deviceType: string().required('Device Type is required').max(15, 'The word is too long!'),
    brand: string().required('Brand is required').max(15, 'The word is too long!'),
    model: string().required('Model is required').max(15, 'The word is too long!'),
    condition: string().required('Condition is required').max(15, 'The word is too long!'),
    storageCapacity: string().required('Storage Capacity is required').max(15, 'The word is too long!'),
    color: string().required('Color is required').max(15, 'The word is too long!'),
    price: number().typeError('Price must be a number').required('Price is required'),
    description: string().required('Description is required'),
    imageUrl: string().required('Please enter website'),
  sellerNumber: number().typeError('Seller Number must be a number').required('Seller Number is required'),
  });

const EditDevice = () => {
    const { deviceId } = useParams();
    const [device, setDevice] = useState();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

  const onEditDeviceSubmit = async (values) => {
    try {
      const response = await devicesService.edit(deviceId, values)
      navigate(`/devices/${deviceId}`);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('An error occurred while editing the device.');
      }
    }
  };

  

  const { values, errors, onChange, onSubmit, setValues } = useForm(
    onEditDeviceSubmit,
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


  useEffect(() => {
    let isMounted = true;

    devicesService.getOne(deviceId)
        .then((result) => {
            if (isMounted) {
                setDevice(result);
                setValues({
                    deviceType: result.deviceType,
                    brand: result.brand,
                    model: result.model,
                    condition: result.condition,
                    storageCapacity: result.storageCapacity,
                    color: result.color,
                    price: result.price,
                    description: result.description,
                    imageUrl: result.imageUrl,
                    sellerNumber: result.sellerNumber,
                });
            }
        })
      return () => {
        isMounted = false;
    };
}, [deviceId]);

  console.log(device);
    return(
        <main className={styles.mainBackground}>
        <h2 className={styles.heading}>Edit Your <span className={styles.headingColored}>Offer</span>!</h2>

        <form
          onSubmit={onSubmit}
          className="max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded-md bg-gray-100"
        >

                {error && ( 
                <div className={styles.errorContainer}>
                    <strong>Error:</strong>
                    <span>{error}</span>
                </div>
             )}  
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
              Edit Device 
            </button>
          </div>
        </form>
      </main>
    );
}

export default EditDevice;