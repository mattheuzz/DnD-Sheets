
import { Mongoose } from '../../index.js'

const character = new Mongoose.Schema({
  characterName: {
    type: String,
    required: true
  },
  characterLevel: {
    type: String,
    required: true
  },
  characterSex: {
    type: String,
    required: true
  },
  characterClass: {
    type: String,
    required: true
  },
  characterRace: {
    type: String,
    required: true
  },
  characterBackground: {
    type: String,
    required: true
  },
  characterAlignment: {
    type: String,
    required: true
  },
  personalityTraits: {
    type: String,
    required: true
  },
  ideals: {
    type: String,
    required: true
  },
  bonds: {
    type: String,
    required: true
  },
  flawks: {
    type: String,
    required: true
  },
  expirencePoints: {
    type: String,
    required: true
  },
  mainStrength: {
    type: String,
    required: true
  },
  mainDexterity: {
    type: String,
    required: true
  },
  mainConstitution: {
    type: String,
    required: true
  },
  mainIntelligence: {
    type: String,
    required: true
  },
  mainWisdom: {
    type: String,
    required: true
  },
  mainCharisma: {
    type: String,
    required: true
  },
  proficiencyLangueges: {
    type: Object,
    required: true
  },
  modStrength: {
    type: String,
    required: true
  },
  modDexterity: {
    type: String,
    required: true
  },
  modConstitution: {
    type: String,
    required: true
  },
  modIntelligence: {
    type: String,
    required: true
  },
  modWisdom: {
    type: String,
    required: true
  },
  modCharisma: {
    type: String,
    required: true
  },
  proficiencyBonus: {
    type: String,
    required: true
  },
  lifeDices: {
    type: String,
    required: true
  },
  lifePoints: {
    type: String,
    required: true
  },
  equipaments: {
    type: Object,
    required: false
  },
  spells: {
    type: Object,
    required: false
  },
  attacks: {
    type: Object,
    required: false
  },
  featuresTraits: {
    type: Object,
    required: false
  },
  acrobatics: {
    type: String,
    required: true
  },
  animalHanding: {
    type: String,
    required: true
  },
  arcana: {
    type: String,
    required: true
  },
  athletics: {
    type: String,
    required: true
  },
  deception: {
    type: String,
    required: true
  },
  history: {
    type: String,
    required: true
  },
  insight: {
    type: String,
    required: true
  },
  intimidation: {
    type: String,
    required: true
  },
  investigation: {
    type: String,
    required: true
  },
  medicine: {
    type: String,
    required: true
  },
  nature: {
    type: String,
    required: true
  },
  perception: {
    type: String,
    required: true
  },
  performance: {
    type: String,
    required: true
  },
  persuasion: {
    type: String,
    required: true
  },
  stealth: {
    type: String,
    required: true
  },
  survival: {
    type: String,
    required: true
  },
  sleightHand: {
    type: String,
    required: true
  },
  armorCharacteristics: {
    type: Object,
    required: false
  },
  shild: {
    type: Object,
    require: false
  },
  AC: {
    type: String,
    required: true
  },
  weaponsCharacteristics: {
    type: Object,
    required: false
  },
  owner: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
}, { collection: 'character' })

export default character