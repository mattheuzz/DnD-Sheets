import * as yup from 'yup'

const UserSchema = yup.object().shape({
  firstName: yup.string().trim().required('Your first name is required'),
  lastName: yup.string().required('Your last name is required'),
  email: yup.string().email('Please use a valid e-mail').required('Your e-mail is required'),
  password: yup.string().min(6, 'Your password must be a least 6 characters').required('Your password is rquired')
})
export default UserSchema