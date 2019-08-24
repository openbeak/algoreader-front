import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        userId: '',
        solvedProblems: [
            {
                'number': 1,
                'name': '더미 문제1',
                'category': 'Dynamic Programming',
                'collectCount': 12000,
                'submitCount': 4900,
                'collectRate': 44.90
            },
            {
                'number': 3,
                'name': '더미 문제2',
                'category': 'Greedy',
                'collectCount': 8800,
                'submitCount': 2340,
                'collectRate': 25.69
            },
            {
                'number': 8,
                'name': '더미 문제3',
                'category': 'BFS',
                'collectCount': 4230,
                'submitCount': 1567,
                'collectRate': 34.32
            },
            {
                'number': 11,
                'name': '더미 문제4',
                'category': 'Simulation',
                'collectCount': 10540,
                'submitCount': 2109,
                'collectRate': 19.03
            },
            {
                'no': 18,
                'name': '더미 문제5',
                'category': 'Brute Force',
                'collectCount': 6800,
                'submitCount': 3799,
                'collectRate': 55.40
            }
        ]

    },
    mutations: {
        setUserId(state, payload) {
            state.userId = payload;
        }
    },
    actions: {

    }
});