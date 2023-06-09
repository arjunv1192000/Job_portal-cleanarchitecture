import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ObjectSchema } from 'yup';

interface MyFormData {
    jobTitle: string;
    jobType: string;
    jobLevel: string;
    jobTiming: string;
    about: string;
    essentialKnowledge: string;
    location: string;
    qualification : string;
    salary: string;
    date : Date;
    experience: string;
    address : string;
    opening:string;
}


const validationSchema:ObjectSchema<MyFormData> = Yup.object().shape({
    jobTitle: Yup.string().required('Job title is required'),
    jobType: Yup.string().required('Job type is required'),
    jobLevel: Yup.string().required('Job level is required'),
    jobTiming: Yup.string().required('Job timing is required'),
    about: Yup.string().required('About is required'),
    essentialKnowledge: Yup.string().required('Essential knowledge is required'),
    location: Yup.string().required('Location is required'),
    qualification: Yup.string().required('Qualification is required'),
    salary: Yup.string().required('Salary is required'),
    date: Yup.date().required('Date is required'),
    experience: Yup.string().required('Experience is required'),
    address: Yup.string().required('Address is required'),
    opening:Yup.string().required('opening is required'),
  });
  export default validationSchema;