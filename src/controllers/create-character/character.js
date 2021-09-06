import { Mongoose } from '../../index.js'
import Modifier from '../../services/modifier.js'
import character from '../../models/roleplaying-schema/character.js'
import ProficiencyBonus from '../../services/proficiency-bonus.js'

const CreateCharacter = {
  async Character(req, res) {

    const {
      characterName,
      characterLevel,
      characterSex,
      characterClass,
      characterRace,
      characterBackground,
      characterAlignment,
      personalityTraits,
      ideals,
      bonds,
      flawks,
      expirencePoints,
      mainStrength,
      mainDexterity,
      mainConstitution,
      mainIntelligence,
      mainWisdom,
      mainCharisma,
      proficiencyLangueges,
      equipaments,
      spells,
      attacks,
      featuresTraits,
      lifeDices,
      lifePoints,
      armorCharacteristics,
      shild,
      AC,
      weaponsCharacteristics,
      acrobatics,
      animalHanding,
      arcana,
      athletics,
      deception,
      history,
      insight,
      intimidation,
      investigation,
      medicine,
      nature,
      perception,
      performance,
      persuasion,
      stealth,
      survival,
      sleightHand
    } = req.body

    const owner = req.user._id

    const modStrength = Modifier(mainStrength)
    const modWisdom = Modifier(mainWisdom)
    const modIntelligence = Modifier(mainIntelligence)
    const modConstitution = Modifier(mainConstitution)
    const modDexterity = Modifier(mainDexterity)
    const modCharisma = Modifier(mainCharisma)

    const proficiencyBonus = ProficiencyBonus(characterLevel)

    const CharacterH = Mongoose.model('character', character, 'character')

    try {
      const creatCharacter = await CharacterH.create({
        characterName,
        characterLevel,
        characterSex,
        characterClass,
        characterRace,
        characterBackground,
        characterAlignment,
        personalityTraits,
        ideals,
        bonds,
        flawks,
        expirencePoints,
        owner,
        mainStrength,
        mainDexterity,
        mainConstitution,
        mainIntelligence,
        mainWisdom,
        mainCharisma,
        proficiencyLangueges,
        modStrength,
        modDexterity,
        modConstitution,
        modIntelligence,
        modWisdom,
        modCharisma,
        proficiencyBonus,
        acrobatics,
        animalHanding,
        arcana,
        athletics,
        deception,
        history,
        insight,
        intimidation,
        investigation,
        medicine,
        nature,
        perception,
        performance,
        persuasion,
        stealth,
        survival,
        sleightHand,
        lifeDices,
        lifePoints,
        equipaments,
        spells,
        attacks,
        featuresTraits,
        weaponsCharacteristics,
        armorCharacteristics,
        shild,
        AC
      })

      res
        .status(201)
        .send(creatCharacter)

    } catch (error) {
      res
        .status(400)
        .send({
          message: `it was not possible to create your character,`
        })
    }
  }
}


export default CreateCharacter