const ACcalculator = {
  noArmor(req, res) {
    const { modDexterity, classes, modConstitution, modWisdom } = req.body
    try {
      if (classes === "barbarian" || classes === "sorcerer") {
        const AC = 10 + parseInt(modDexterity) + parseInt(modConstitution)
        return res
          .status(201)
          .send({
            message: `Your AC is ${AC}`
          })
      } else if (classes === "Monk") {
        const AC = 10 + parseInt(modWisdom)
        return res
          .status(201)
          .send({
            message: `Your AC is ${AC}`
          })
      } else {
        const AC = 10 + parseInt(modDexterity)
        return res
          .status(201)
          .send({
            message: `Your AC is ${AC}`
          })
      }

    } catch (error) {
      return res
        .status(400)
        .send({
          message: "Somenthing goes wrong with your armor"
        })
    }
  }
}
export default ACcalculator