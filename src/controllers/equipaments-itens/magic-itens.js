import axios from 'axios'
import { ideas } from '../../services/external-api.js'



const theme = "magic-items"
const MagicItens = {
  itens(req, res){
    const { item } = req.body

    try{
      axios.request(ideas(theme, item))
        .then((response) =>{
          res
          .send(response.data)
        }).catch((error)=>{
          console.log(error)
        })
    }catch(error){
      console.log(error)
    }
  }
}

export default MagicItens