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
  expirencePoints: {
    type: String,
    required: true
  },
  mainStrength:{
    type: String,
    required:true
  },
  mainDexterity:{
    type: String,
    required: true
  },
  mainConstitution:{
    type: String,
    required: true
  },
  mainIntelligence:{
    type: String,
    required: true
  },
  mainWisdom:{
    type: String,
    required: true
  },
  mainCharisma:{
    type: String,
    required: true
  },
  proficiencyLangueges:{
    type: Object,
    required: true
  },
  modStrength:{
    type: String,
    required:true
  },
  modDexterity:{
    type: String,
    required: true
  },
  modConstitution:{
    type: String,
    required: true
  },
  modIntelligence:{
    type: String,
    required: true
  },
  modWisdom:{
    type: String,
    required: true
  },
  modCharisma:{
    type: String,
    required: true
  },
  proficiencyBonus:{
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {collection: 'character'})

export default character