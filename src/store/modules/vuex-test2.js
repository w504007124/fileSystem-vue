const test2 = {
  namespaced: true,
  state: {
    count1: 100,
    name1: '姓名2',
    age1: 18,
    sex1: '女'
  },
  mutations: {
    changeName: (state, name) => {
      state.name1 = name
    },
    changeAge: (state, age) => {
      state.age1 = age
    },
    addCount: (state, count) => {
      state.count1 = count
    }
  },
  actions: { // 异步
    setName ({ commit }, name) {
      commit('changeName', name)
    },
    changeAge ({ commit }, age) {
      // 可以调用后端进行操作
      commit('changeAge', age)
    },
    addNum ({ commit, state }, num) {
      commit('addCount', state.count1 + num)
    }
  }
}

export default test2
