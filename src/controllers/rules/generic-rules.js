import axios from "axios";
import { genericIdeas } from "../../services/external-api.js";

const GenericRules = {
  generic(req, res) {
    const { theme } = req.body
    try{
      axios.request(genericIdeas(theme))
        .then((response) => {
          let resp = response.data
          res.send(resp)
        }).catch((error) => {
          console.log(error)
        })}catch{

        }
  }}
export default GenericRules