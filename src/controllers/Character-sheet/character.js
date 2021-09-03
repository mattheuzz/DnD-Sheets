import { Mongoose } from '../../index.js'
import Modifier from '../../services/modifier.js'
import character from '../../models/roleplaying-sheet/character.js'
import ProficiencyBonus from '../../services/proficiency-bonus.js'

const CharacterSheet = {
  async Sheet(req, res) {

    const {
      characterName,
      characterLevel,
      characterClass,
      characterRace,
      characterBackground,
      characterAlignment,
      expirencePoints,
      mainStrength,
      mainDexterity,
      mainConstitution,
      mainIntelligence,
      mainWisdom,
      mainCharisma
    } = req.body
    
    const owner = req.user._id
    
    const modStrength = Modifier(mainStrength)
    const modWisdom = Modifier(mainWisdom)
    const modIntelligence = Modifier(mainIntelligence)
    const modConstitution = Modifier(mainConstitution)
    const modDexterity = Modifier(mainDexterity)
    const modCharisma = Modifier(mainCharisma)
    
    const proficiencyBonus = ProficiencyBonus(characterLevel)

    const CharacterH = Mongoose.model('character-history', character, 'character-history')

    try {
      const creatCharacter = await CharacterH.create({
        characterName,
        characterLevel,
        characterClass,
        characterRace,
        characterBackground,
        characterAlignment,
        expirencePoints,
        owner,
        mainStrength,
        mainDexterity,
        mainConstitution,
        mainIntelligence,
        mainWisdom,
        mainCharisma,
        modStrength,
        modDexterity,
        modConstitution,
        modIntelligence,
        modWisdom,
        modCharisma,
        proficiencyBonus
      })

      res
        .status(201)
        .send(creatCharacter)

    } catch (error) {
      res
        .status(400)
        .send({
          message: `it was not possible to create your character, ${error}`
        })
    }
  }
}

export default CharacterSheet