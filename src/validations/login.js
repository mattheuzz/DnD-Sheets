import * as yup from 'yup'

const LoginSchema = yup.object().shape({
  email: yup.string().email('Please use a valid e-mail').required('Your e-mail is required'),
  password: yup.string().min(6, 'Your password must be a least 6 characters').required('Your password is rquired')
})

export default LoginSchema