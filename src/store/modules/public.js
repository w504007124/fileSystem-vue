const publicVar = {
  namespaced: true,
  state: {
    isCollapse: false
  },
  mutations: {
    changeCollapse: (state) => {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: { 
  }
}

export default publicVar
