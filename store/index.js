export const state = () => ({
  corli: 0,
  morli: 0
})
export const getters = {
  funMutation(state) {
    return state.corli

  }
}

export const mutations = {
  increment(state) {
    return state.corli++
  },
  noincrement(state) {
    return state.morli--
  }

}

export const actions = {
  async nextDate(state) {
    const res = {
      data: 10
    };
    state.corli = res.data;
    return res.data
  }
}
