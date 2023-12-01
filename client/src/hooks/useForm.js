import { useState } from "react";
import * as Yup from "yup";

export default function useForm(submitHandler, initialValues, validationSchema) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const validateField = async (name, value) => {
        try {
            await validationSchema.validateAt(name, values);
            setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
        } catch (error) {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: error.message }));
        }
    };
    

    const onChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
        validateField(name, value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        // console.log(values);
        validationSchema
            .validate(values, { abortEarly: false })
            .then(() => {
                setErrors({});
                submitHandler(values);
            })
            .catch((validationErrors) => {
                const newErrors = {};
                validationErrors.inner.forEach((error) => {
                    newErrors[error.path] = error.message;
                });
                setErrors(newErrors);
            });
    };

    return {
        values,
        errors,
        onChange,
        onSubmit,
    };
}
