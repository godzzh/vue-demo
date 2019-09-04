const app = {
    namespaced: true,
    state: {
        device: 'desktop'
    },
    mutations: {
        TOGGLE_DEVICE(state, active){
            state.device = active
        }
    },
}

export default app;