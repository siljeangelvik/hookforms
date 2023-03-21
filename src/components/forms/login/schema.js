import * as yup from 'yup';

export const schema = yup
    .object({
        firstName: yup
            .string()
            .min(2, '* Your first name should be at least 2 characters.')
            .max(10, '* Your first name cannot be longer than 10 characters.')
            .required('* Please enter your first name'),
        lastName: yup
            .string()
            .min(2, '* Your last name should be at least 2 characters.')
            .max(20, '* Your last name cannot be longer than 20 characters.')
            .required('* Please enter your last name'),
        userName: yup
            .string()
            .min(3, '* Your last name should be at least 3 characters.')
            .max(18, '* Your last name cannot be longer than 18 characters.')
            .required('* Please enter your last name'),
        age: yup
            .number()
            .min(18, '* Your age must be 18 or higher')
            .max(100, '* Your age must be 100 or lower')
            .typeError('* Your age must be a number'),
        password: yup
            .string()
            .min(8, '* Your password must be 8 characters or higher')
            .max(30, '* Your password must be 30 characters or lower')
            .typeError('* Please enter your password'),
    })
    .required();