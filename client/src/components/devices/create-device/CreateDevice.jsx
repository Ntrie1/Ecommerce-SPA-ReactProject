import { useContext } from "react";
import AuthContext from "../../../context/authContext";
import useForm from "../../../hooks/useForm";

import * as devicesService from '../../../services/devicesService'

const CreateDevice = () => {
    const { usename, _id } = useContext(AuthContext);

    const isFormValid = () => {        
        return values.username.trim() !== '' && values.password.trim() !== '';
    };

    const onCreateDeviceSubmit = async (values) => {
      const response = await devicesService.create(values); 
        console.log(response);
    }

    const { values, onChange, onSubmit } = useForm(onCreateDeviceSubmit, {
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
    })


    return(
        <>
        <main style={{marginBottom:'120px'}}>

         <form onSubmit={onSubmit} className="max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded-md">
      {/* Device Type */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1" htmlFor="deviceType">
          Device Type
        </label>
        <input
          type="text"
          id="deviceType"
          name="deviceType"
          value={values.deviceType}
          onChange={onChange}
          className="w-full p-3 border border-solid border-gray-300 outline-none rounded-lg"
          placeholder="e.g., Smartphone, Laptop, Tablet"
        />
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
          className="w-full p-3 border border-solid border-gray-300 outline-none rounded-lg"
          placeholder="Brand"
          />
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
          className="w-full p-3 border border-solid border-gray-300 outline-none rounded-lg"
          placeholder="Model"
          />
      </div>

      {/* Condition */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1" htmlFor="condition">
          Condition
        </label>
        <input
          type="text"
          id="condition"
          name="condition"
          value={values.condition}
          onChange={onChange}
        className="w-full p-3 border border-solid border-gray-300 outline-none rounded-lg"
        placeholder="Condition"
        />
      </div>

      {/* Storage Capacity */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1" htmlFor="storageCapacity">
          Storage Capacity
        </label>
        <input
          type="text"
          id="storageCapacity"
          name="storageCapacity"
            value={values.storageCapacity}
            onChange={onChange}
          className="w-full p-3 border border-solid border-gray-300 outline-none rounded-lg"
          placeholder="Storage Capacity"
          />
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
          className="w-full p-3 border border-solid border-gray-300 outline-none rounded-lg"
          placeholder="Device color"
          />
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
          className="w-full p-3 border border-solid border-gray-300 outline-none rounded-lg"
          placeholder="Device price"
          />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          name="description"
            value={values.description}
            onChange={onChange}
          className="w-full p-3 border border-solid border-gray-300 outline-none rounded-lg resize-none"
          placeholder="Device description"
          />
      </div>

      {/* Image URL */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1" htmlFor="imageUrl">
          Image URL
        </label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
            value={values.imageUrl}
            onChange={onChange}
          className="w-full p-3 border border-solid border-gray-300 outline-none rounded-lg"
          placeholder="Image URL"
          />
      </div>

     
      {/* Seller Number */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1" htmlFor="sellerNumber">
          Seller Number
        </label>
        <input
          type="text"
          id="sellerNumber"
          name="sellerNumber"
            value={values.sellerNumber}
            onChange={onChange}
          className="w-full p-3 border border-solid border-gray-300 outline-none rounded-lg"
          placeholder="Seller Number"
          inputMode="numeric"
          />
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
    )
}

export default CreateDevice;