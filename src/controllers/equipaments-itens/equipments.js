import axios from "axios"
import { ideas } from "../../services/external-api.js"
const theme = 'equipment'
const Equipments = {
  weaponsattack(req, res) {
    const { weapons } = req.body
    try {
      axios.request(ideas(theme, weapons))
        .then((response) => {
          res.send(response.data)
        }).catch((error) => {
          console.log(error)
        })
    } catch (error) {
      res
        .status(400)
        .send({
          message: `Something goes wrong with your weapon`
        })
    }
  },
  armor(req, res) {
    const { armor } = req.body
    try {
      axios.request(ideas(theme, armor))
        .then((response) => {
          res.send(response.data)
        }).catch((error) => {
          console.log(error)
        })
    } catch (error) {
      res
        .status(400)
        .send({
          message: `Something goes wrong with your Armor`
        })
    }
  }
}

export default Equipments