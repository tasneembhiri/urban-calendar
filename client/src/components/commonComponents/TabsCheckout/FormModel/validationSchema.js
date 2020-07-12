import * as Yup from 'yup';
import checkoutFormModel from './checkoutFormModel';

const {
  formField: { fullName, phone, email, zipCode },
} = checkoutFormModel;
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default [
  Yup.object().shape({
    [fullName.name]: Yup.string().required(`${fullName.requiredErrorMsg}`),
    [phone.name]: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required(`${phone.requiredErrorMsg}`),
    [email.name]: Yup.string()
      .email('Invalid email')
      .required(`${email.requiredErrorMsg}`),
    [zipCode.name]: Yup.string()
      .matches(/^[0-9]{5}$/, 'Must be exactly 5 digits')
      .required(`${zipCode.requiredErrorMsg}`),
  }),
];
