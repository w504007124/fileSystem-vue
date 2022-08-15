const getters = {
  test1: state => state.test1,
  test2: state => state.test2,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permissions: state => state.user.permissions,
  publicVar: state => state.publicVar, // 左侧栏折叠展开
}

export default getters
