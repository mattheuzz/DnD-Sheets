import userSchema from '../../models/user-schema.js'
import { Mongoose } from '../../index.js'
import bcrypt from 'bcrypt'

const UserRegister = {
  
  async CreatUser(req, res) {
    const { firstName, lastName, email } = req.body

    const salt = await bcrypt.genSalt(10)
    const cryptopassword = await bcrypt.hash(req.body.password, salt)
    const password = cryptopassword

    const Users = Mongoose.model('users', userSchema, 'users')

    try{
      const foundUser = await Users.findOne({ email: email })
      if(foundUser){
        return res
        .status(409)
        .send({
          message: "This e-mail already exist"
        })
      }

      const user = new Users({ firstName, lastName, email, password: password })
      await user.save()

      res
      .status(201)
      .send({
        message: "User saved successfully"
      })

    }catch(error){
      return res
      .status(400)
      .send({
        message:"Can't create this user"
      })
    }
  }
}

export default UserRegister