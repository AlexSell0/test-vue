export const navbarModule = {
    state:()=> ({
        showFilter: false, //Временно
    }),

    getters: {
        getShowFilter(state){
            return state.showFilter
        }
    },

    mutations: {
        toggleShowFilter(state){
            state.showFilter = state.showFilter === true ? false : true
        }
    },

    actions: {

    },

    namespaced: true
}
