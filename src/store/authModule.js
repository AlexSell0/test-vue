import router from "../router/index.js";
export const authModule = {
    state:()=> ({
        isAuth: false, //Временно
        user: {
            // id: 1,
            // name: 'Alex',
            // firstname: 'Sell',
            // email: 'mail@mail.ru',
            // role: 1,
            // profession: 'Нервопатолог, стаж 3 года'
        }
    }),

    getters: {
        getUser(state){
            return state.user
        }
    },

    mutations: {
        setUser(state, user){
            state.user = user
            state.isAuth = true
        },

        logout(state){
            state.user = {}
            state.isAuth = false
            router.push({
                name: 'home'
            })
        }
    },

    actions: {
        fetchUser({state, commit}){
            let user = {
                id: 1,
                name: 'Alex',
                firstname: 'Sell',
                email: 'mail@mail.ru',
                role: 1,
                profession: 'Нервопатолог, стаж 3 года'
            }
            commit('setUser', user)
        }
    },

    namespaced: true
}
