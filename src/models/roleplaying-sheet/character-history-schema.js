import { Mongoose } from '../../index.js'

const characterHistory = new Mongoose.Schema({
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
  owner: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {collection: 'character-history'})

export default characterHistory