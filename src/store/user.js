const user = {
    namespaced: true,
    state: {
        name: '吐槽电视机',
        phone: '13012345678',
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
    },
    mutations: {
        LOGIN(state, active){
            state.name = active.name
        }
    },
    actions: {
        async USER_LOGIN({ commit }, active ){
            console.log(active)
            await commit('LOGIN', active) 
        }
    }
}

export default user;