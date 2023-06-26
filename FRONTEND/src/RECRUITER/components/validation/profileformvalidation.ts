import { ObjectSchema } from 'yup';
import * as Yup from 'yup';

interface MyFormData {
    name: string;
    email: string;
    phone: string;
    about: string;
    companyname: string;
    image: FileList | null;
}

const ValidationSchema: ObjectSchema<MyFormData, Yup.AnyObject, any, ""> = Yup.object().shape({
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

    about: Yup.string()
        .trim()
        .required('About is required'),
    companyname: Yup.string()
        .trim()
        .required('Education is required'),

    image: Yup.mixed()
        .nullable()
        .required('Image is required'),
});

export default ValidationSchema;
