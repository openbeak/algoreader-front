import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        userId: ''
    },
    mutations: {
        setUserId(state, payload) {
            state.userId = payload;
        }
    },
    actions: {

    }
});