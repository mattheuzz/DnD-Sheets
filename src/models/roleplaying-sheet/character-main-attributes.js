import { Mongoose } from "../../index.js"

const characterMainAttributes = new Mongoose.Schema({
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
  idCharacterHistory:{
    type:String,
    required:true
  }
}, {collection:'character-main-attributes'})

export default characterMainAttributes