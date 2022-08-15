const test1 = {
  namespaced: true,
  state: {
    count: 0,
    name: '姓名1',
    age: 18,
    sex: '男'
  },
  mutations: {
    changeName: (state, name) => {
      state.name = name
    },
    changeAge: (state, age) => {
      state.age = age
    },
    addCount: (state, num) => {
      state.count = num
    }
  },
  actions: { // 异步
    setName ({ commit }, name) {
      commit('changeName', name)
    },
    setAge ({ commit, state }) {
      // 可以调用后端进行操作
      commit('changeAge', state.age + state.count)
    }
  }
}

export default test1
