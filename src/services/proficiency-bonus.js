const ProficiencyBonus = (nivel) =>{
  const addProficiency = 2
  const quotient = Math.trunc(nivel/5)
  return quotient + addProficiency

}
export default ProficiencyBonus