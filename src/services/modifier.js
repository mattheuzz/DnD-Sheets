const Modifier = (attributes) => {
  const limitModifier = 5
    const quotient = Math.trunc( attributes / 2 )
    return quotient - limitModifier
}
export default Modifier

