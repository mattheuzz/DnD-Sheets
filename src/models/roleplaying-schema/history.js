import { Mongoose } from '../../index.js'

const historySchema = new Mongoose.Schema({
  historyBackground:{
    type: String,
    required:true
  },
  historyPlot:{
    type: String,
    required: true
  },
  historyPlace:{
    type: Object,
    required: true
  },
  ambiencesAnimalsMonsters:{
    type: Object,
    required: true
  },
  Npcs:{
    type: Object,
    required: false
  },
  participants:{
    type: Array,
    required: false
  },
  owner:{
    type: String,
    required: true
  },
  date:{
    type: Date,
    default: Date.now
  }
}, { collection: 'history' })

export default historySchema

