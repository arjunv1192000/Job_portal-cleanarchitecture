import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ObjectSchema } from 'yup';

interface MyFormData {
    name: string;
    email: string;
    password: string;
}

const validationSchema: ObjectSchema<MyFormData> = Yup.object().shape({
    name: Yup.string()
        .trim()
        .matches(/^[A-Za-z\s]+$/, 'Name cannot contain numbers')
        .min(5, 'Full name must be at least 5 characters')
        .required('Full name is required'),
    email: Yup.string()
        .trim()
        .email('Invalid email')
        .required('Email is required'),
    phone: Yup.string()
        .matches(/^\d{10}$/, 'Invalid phone number')
        .required('Phone number is required'),

    password: Yup.string()
        .trim()
        .min(4, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match').nullable()
        .required('Confirm password is required'),


});
export default validationSchema;