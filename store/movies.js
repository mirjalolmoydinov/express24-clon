export const state =()=>({
plus:0
})
export const getters={
  geterModul(state){
    return state.plus
  }
}

export const mutations ={
FUNCTIONMUTATION(state){
  return state.plus ++
}
}

export const actions = {
  async actionFunction(){
    // api raspors 
    let res = {bata : 8}
    this.plus = res.bata
    return res.bata
  }
}