import axios from "axios"
import { ideas } from "../../services/external-api.js"

const EspecifyRules= {
  especify(req, res){
    const { theme, about } = req.body

    try{
      axios.request(ideas(theme, about))
        .then((response)=>{
          res.send(response.data)
        }).catch((error)=>{
          console.log(error)
        })
    }catch(error){
      console.log(error)
    }
  }
}
export default EspecifyRules