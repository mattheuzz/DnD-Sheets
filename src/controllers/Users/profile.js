import { Mongoose } from '../../index.js'
import character from '../../models/roleplaying-schema/character.js'
import userSchema from '../../models/user-schema.js'

const Profile = {
  async UsersSheet(req, res){
    const user = req.user._id
    
    const CharacterH = Mongoose.model('character', character, 'character')
    const userDB = Mongoose.model('users', userSchema, 'users')
    
    try{
      const foundUser = await userDB.findOne({ _id: user })
      if(!foundUser){
        return res
        .status(404)
        .send({
          message: "User not found"
        })
      }

      const foundSheets = await CharacterH.find({ owner: user })
      if (!foundSheets){
        return res
        .status(404)
        .send({
          message:"This user has no sheet's"
        })
      }

      res
      .status(200)
      .send(foundSheets)

    }catch(error){
      return res
      .status(400)
      .send({
        message:"Something is wrong with your profile"
      })
    }
    
  }
}

export default Profile