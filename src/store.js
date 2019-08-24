import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        userId: null,
        solvedProblems: null

    },
    mutations: {
        setUserId(state, payload) {
            state.userId = payload;
        },
        setSolvedProblems(state, payload) {
            state.solvedProblems = payload;
        }
    },
    actions: {

    },
    getters: {
        getUserId: state => {
            return state.userId;
        },
        getSolvedProblems : state => {
            return state.solvedProblems;
        }
    }
});