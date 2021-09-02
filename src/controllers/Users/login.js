import { Mongoose } from '../../index.js'
import userSchema from '../../models/user-schema.js'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

const UserLogin = {
  
  async LoginUser(req, res){
    const { email, password } = req.body

    const userDB = Mongoose.model('users', userSchema, 'users')
    const user = await userDB.findOne({ email })

    if(!user){
      return res
      .stauts(404)
      .send({
        message: "Wrong e-mail our password"
      })
    }

    const validPassword = await bcrypt.compare(password, user.password)
    if(!validPassword){
      return res
      .status(400)
      .send({
        message: "Wrong e-mail our password"
      })
    }
    const token = jwt.sign({ _id: user._id }, process.env.SECRET, {
      expiresIn: 2592000
    })
    res
      .set('auth-token', token)

    res
    .status(200)
    .send({
      message: 'Login successfully'
    })
  }
}

export default UserLogin