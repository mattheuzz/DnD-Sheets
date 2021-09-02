import { Mongoose } from '../index.js'

const userSchema = new Mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 2
  },
  lastName: {
    type: String,
    required: true,
    min: 2
  },
  email: {
    type: String,
    required: true,
    min: 9
  },
  password: {
    type: String,
    required: true,
    min: 6
  }
}, { collection: 'users' })

export default userSchema