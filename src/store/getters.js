const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token  // 建立token的快捷访问
  /* avatar: state => state.user.avatar,
  name: state => state.user.name */
}
export default getters
