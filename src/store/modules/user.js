const user = {
  state: {
    num: 1
  },
  mutations: {
    addNum (state) {
      state.num++
    }
  },
  actions: {
    handleAddNum (context) {
      context.commit('addNum')
    },
    handleChangeNum ({ commit }) {
      commit('addNum')
    }
  }
}
export default user
