import { Mongoose } from '../../index.js'
import characterHistory from '../../models/roleplaying-sheet/character-history-schema.js'

const CharacterSheetHistory = {
  async Sheet(req, res){

    const { characterName, characterLevel, characterClass, characterRace, characterBackground, characterAlignment, expirencePoints } = req.body
    const owner = req.user._id
    const CharacterH = Mongoose.model('character-history', characterHistory, 'character-history')
    
    try{
      const creatCharacterHistory = await CharacterH.create({ characterName, characterLevel, characterClass, characterRace, characterBackground, characterAlignment, expirencePoints, owner })
      
      res
      .status(201)
      .send(creatCharacterHistory)
      
    }catch(error){
      res
      .status(400)
      .send({
        message: `it was not possible to create your history, ${error}`
      })
    }
  }
}

export default CharacterSheetHistory