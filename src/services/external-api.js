export const ideas =(generic, specify)=>{
  return {
    method: 'GET',
    url: `https://www.dnd5eapi.co/api/${generic}/${specify}`
  }
}

export const genericIdeas = (generic)=>{
  return{
    method: 'GET',
    url: `https://www.dnd5eapi.co/api/${generic}/`
  }
}