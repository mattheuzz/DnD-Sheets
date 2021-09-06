import axios from "axios";
import { genericIdeas } from "../../services/external-api.js";

const GenericRules = {
  generic(req, res) {
    
    try{
      axios.request(genericIdeas('rules'))
        .then((response) => {
          let resp = response.data
          res.send(resp)
        }).catch((error) => {
          console.log(error)
        })}catch{

        }
  }}
export default GenericRules