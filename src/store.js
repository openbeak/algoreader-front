import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        userId: null,
        solvedProblems: null,
        timeScope: null,
        showInfo: false,
        clickedNum: null,
        clickedInfo: {},
        clickedLeftPos: null,
        clickedIndex: null

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
        },
        setShowInfo(state, payload) {
            state.showInfo = payload;
        },
        setClickedNum(state, payload) {
            state.clickedNum = payload;
        },
        setClickedInfo(state, payload) {
            state.clickedInfo = payload;
        },
        setClickedLeftPos(state, payload) {
            state.clickedLeftPos = payload;
        },
        setClickedIndex(state, payload) {
            state.clickedIndex = payload;
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
        },
        getShowInfo: state => {
            return state.showInfo;
        },
        getClickedNum: state => {
            return state.clickedNum
        },
        getClickedInfo: state => {
            return state.clickedInfo;
        },
        getClickedLeftPos: state => {
            return state.clickedLeftPos;
        },
        getClickedIndex: state => {
            return state.clickedIndex;
        }
    }
});