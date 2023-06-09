import { ObjectSchema, AnyPresentValue } from 'yup';
import * as Yup from 'yup';

interface MyFormData {
  name: string;
  email: string;
  phone: string;
  about: string;
  personalWebsite: string;
  education: string;
  language: string;
  jobRole: string;
  location: string;
  cv: FileList | null;
  image: FileList | null;
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

  about: Yup.string()
    .trim()
    .required('About is required'),

  personalWebsite: Yup.string()
    .trim()
    .url('Invalid URL')
    .required('Personal website is required'),

  education: Yup.string()
    .trim()
    .required('Education is required'),

  language: Yup.string()
    .trim()
    .required('Language is required'),

  jobRole: Yup.string()
    .trim()
    .required('Job role is required'),

  location: Yup.string()
    .trim()
    .required('Location is required'),

  cv: Yup.mixed()
    // .test(
    //   'fileType',
    //   'Invalid file type. Only PDFs are allowed',
    //   function (value: AnyPresentValue) {
    //     if (value === null) {
    //       return true;
    //     }
    //     const file = value[0] as File;
    //     return file && file.type === 'application/pdf';
    //   }
    // )
    .required('CV is required'),

  image: Yup.mixed()
    // .test(
    //   'fileType',
    //   'Invalid file type. Only images (JPEG or PNG) are allowed',
    //   function (value: AnyPresentValue) {
    //     if (value === null) {
    //       return true;
    //     }
    //     const file = value[0] as File;
    //     return file && (file.type === 'image/jpeg' || file.type === 'image/png');
    //   }
    // )
    .required('Image is required'),
});

export default validationSchema;
