import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ObjectSchema } from 'yup';

interface MyFormData {
    name: string;
    email: string;
    password: string;
    image: FileList | null;
}

const validationSchema: ObjectSchema<MyFormData> = Yup.object().shape({

    companyname: Yup.string()
        .trim()
        .matches(/^[A-Za-z\s]+$/, 'Name cannot contain numbers')
        .min(5, 'companyname must be at least 5 characters')
        .required('companyname is required'),

    email: Yup.string()
        .trim()
        .email('Invalid email')
        .required('Email is required'),
    name: Yup.string()
        .trim()
        .matches(/^[A-Za-z\s]+$/, 'Name cannot contain numbers')
        .min(5, 'Full name must be at least 5 characters')
        .required('Full name is required'),

    password: Yup.string()
        .trim()
        .min(4, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match').nullable()
        .required('Confirm password is required'),
    image:Yup.mixed()
    .required('Image is required'),


});
export default validationSchema;