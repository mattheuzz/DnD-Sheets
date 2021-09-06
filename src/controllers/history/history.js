import { Mongoose } from '../../index.js'
import historySchema from '../../models/roleplaying-schema/history.js'
import userSchema from '../../models/user-schema.js'

const BaseHistory = {
  async Base(req, res){
    const { historyBackground, historyPlot, historyPlace, ambiencesAnimalsMonsters, Npcs, players } = req.body

    const owner = req.user._id

    const History = Mongoose.model('history', historySchema, 'history')
    const Users = Mongoose.model('users', userSchema, 'users')

    try{
      const participants = await Users.find({ email: { $in: players }})
      const creatHistory = await History.create({
        historyBackground, 
        historyPlot, 
        historyPlace, 
        ambiencesAnimalsMonsters, 
        Npcs, 
        participants,
        owner
      })
      res
      .status(201)
      .send(creatHistory)

    }catch(error){
      res
      .status(400)
      .send({
        message: 'Something goes wrong with your history'
      })
    }
  }
}

export default BaseHistory