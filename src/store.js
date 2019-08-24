import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        userId: null,
        solvedProblems: null,
        timeScope: []

    },
    mutations: {
        setUserId(state, payload) {
            state.userId = payload;
        },
        setSolvedProblems(state, payload) {
            state.solvedProblems = payload;
        },
        setTimeScope(state, payload) {
            state.timeScope = payload;
        }
    },
    actions: {

    },
    getters: {
        getUserId: state => {
            return state.userId;
        },
        getSolvedProblems: state => {
            return state.solvedProblems;
        },
        getMaxTime: state => {
            return state.timeScope[1];
        },
        getMinTime: state => {
            return state.timeScope[0];
        }
    }
});