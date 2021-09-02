import jwt from 'jsonwebtoken'

function verifyToken (req, res, next) {
  try{
    const token = req.headers['auth-token']
    if (!token) {
      return res
      .status(401)
      .send('Acesso negado.')
    }
    const verified = jwt.verify(token, process.env.SECRET)
    req.user = verified
    next()
  } catch (error) {
    return res
    .status(400)
    .send({
      message: `Ocorreu um erro - ${error}.`
    })
  }
}

export default verifyToken