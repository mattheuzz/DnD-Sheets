import { Mongoose } from "../../index.js"
import characterHistory from "../../models/roleplaying-sheet/character-history-schema.js"
import characterMainAttributes from "../../models/roleplaying-sheet/character-main-attributes.js"

const MainAttributes = {
  async AttributesMain(req, res){

    const { mainStrength, mainDexterity, mainConstitution, mainIntelligence, mainWisdom, mainCharisma } = req.body
    const idCharacterHistory= req.params.id
    console.log('oi', req.params)

    const CharacterH = Mongoose.model('character-history', characterHistory, 'character-history')
    const CharacterMainA= Mongoose.model('character-main-attributes', characterMainAttributes, 'character-main-attributes')

    try{
      const foundCharacterHistory = await CharacterH.findOne({ _id: idCharacterHistory })
      if(!foundCharacterHistory){
        return res
        .status(404)
        .send({
          message: "Character history not found"
        })
      }

      const creatCharacterMainAttributes = await CharacterMainA.create({ mainStrength, mainDexterity, mainConstitution, mainIntelligence, mainWisdom, mainCharisma, idCharacterHistory })

      res
      .status(201)
      .send(creatCharacterMainAttributes)
    }catch(error){
      res
      .status(400)
      .send({
        message:`Can't save your main attributes, ${error}`
      })
    }
  }
}
export default MainAttributes