import { Router } from "express"
import cors from 'cors'
import UserRegister from '../controllers/Users/register.js'
import validateUser from "../middlewares/user-validate.js"
import UserSchema from "../validations/users.js"
import UserLogin from "../controllers/Users/login.js"
import LoginSchema from "../validations/login.js"
import verifyToken from "../middlewares/verify-token.js"
import CreateCharacter from "../controllers/create-character/character.js"
import GenericRules from "../controllers/rules/generic-rules.js"
import EspecifyRules from "../controllers/rules/specify-rules.js"
import LifePoints from "../controllers/calculators/life-points.js"
import ACcalculator from "../controllers/calculators/ac-calculator.js"
import Equipments from "../controllers/equipaments-itens/equipments.js"
import MagicItens from "../controllers/equipaments-itens/magic-itens.js"
import Profile from "../controllers/Users/profile.js"
import BaseHistory from "../controllers/history/history.js"


const routes = Router()

const corsOpition = {
  exposedHeaders: 'auth-token',
}

routes.use(cors(corsOpition))

routes.post('/register', validateUser(UserSchema), UserRegister.CreatUser)
routes.post('/login', validateUser(LoginSchema), UserLogin.LoginUser)

routes.get('/generic', verifyToken, GenericRules.generic)
routes.get('/especify', verifyToken, EspecifyRules.especify)

routes.post('/character', verifyToken, CreateCharacter.Character)
routes.post('/life-points', verifyToken, LifePoints)
routes.post('/ac', verifyToken, ACcalculator.noArmor)
routes.post('/weapons', verifyToken, Equipments.weaponsattack)
routes.post('/armors', verifyToken, Equipments.armor)
routes.post('/magic-itens', verifyToken, MagicItens.itens)
routes.post('/history', verifyToken, BaseHistory.Base)
routes.get('/profile', verifyToken, Profile.UsersSheet)




export default routes