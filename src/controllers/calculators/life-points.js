 const LifePoints = (req, res) => {
  const { passiveBonus, lifeDices, modConstitution, passiveClass, passiveRace, adictionalBonus } = req.body
  try{
    const lifePoints = parseInt(lifeDices) + parseInt(modConstitution) + parseInt(passiveBonus) + parseInt(passiveClass) + parseInt(passiveRace) + parseInt(adictionalBonus)

    return res
    .status(200)
    .send({
      message: `Your life points are ${lifePoints}`
    })

  }catch(error){
    return res
    .status(400)
    .send({
      message:'Something goes wrong with your life points'
    })
  }
}

export default LifePoints