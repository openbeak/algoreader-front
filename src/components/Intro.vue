<template>
    <div id="intro">
        <p id="title"><b>Algoreader</b><br>Be a leader by Reading Algorithm</p>
        <div id="inputSection">
            <div style="display: flex; flex-direction: row;">
                <input v-model="userId" placeholder="write your id">
                <button v-on:click="submitId">Submit</button>
            </div>
            <div>
                <p id="description1">If you want to make your own visualization map,<br>please enter your ID.</p>
            </div>
        </div>
    </div>
</template>

<script>
    const dummy = [
        {
            'number': 1,
            'name': '더미 문제1',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':19032118
        },
        {
            'number': 3,
            'name': '더미 문제2',
            'category': 'Greedy',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':19032116
        },
        {
            'number': 8,
            'name': '더미 문제3',
            'category': 'BFS',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':19032130
        },
        {
            'number': 11,
            'name': '더미 문제4',
            'category': 'Simulation',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':19032150
        },
        {
            'number': 18,
            'name': '더미 문제5',
            'category': 'Brute Force',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':19032121
        },
        {
            'number': 21,
            'name': '더미 문제6',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':19032114
        },
        {
            'number': 23,
            'name': '더미 문제7',
            'category': 'DFS',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':19032154
        },
        {
            'number': 28,
            'name': '더미 문제8',
            'category': 'Greedy',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':19032134
        },
        {
            'number': 31,
            'name': '더미 문제9',
            'category': 'Simulation',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':19032122
        },
        {
            'number': 38,
            'name': '더미 문제10',
            'category': 'Dynamic Programming',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':19032111
        },
    ];

    export default {
        name: "Intro",
        methods: {
            submitId: function () {
                this.$store.commit('setUserId', this.userId);
                this.$store.commit('setSolvedProblems', dummy);
                window.scrollTo({
                    top: document.body.scrollHeight,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        },
        computed: {
        },
        data() {
            return {
                userId: null
            }
        }
    }
</script>

<style scoped>
    #intro {
        background-image: url("../assets/background.png");
        background-size: cover;
        height: 100vh;
    }

    input {
        flex-grow: 2;
        padding: 10px;
        border: 1px solid white;
        margin-right: 10px;
        background-color: rgba(255,255,255,0.35);
        text-align: center;
        font-size: 16px;
        color: white;
        font-weight: 600;
    }

    button {
        flex-grow: 1;
        padding: 10px;
        border: 1px solid white;
        background-color: #f9a1ba;
        text-align: center;
        font-size: 16px;
        color: #1c1d20;
        font-weight: 600;
    }

    #title {
        position: absolute;
        left: 90px;
        top: 50px;
        padding: 10px;
        border: 0;
        background-color: transparent;
        text-align: left;
        font-size: 28px;
        font-weight: normal;
        color: white;
    }

    #inputSection {
        position: absolute;
        left: 63%;
        top: 75%;
        width: 420px;
        height: 300px;

    }

    #description1 {
        padding: 10px;
        border: 0;
        margin-top: 10px;
        background-color: transparent;
        text-align: left;
        font-size: 16px;
        color: #c6c6c6;
    }

    ::placeholder {
        color: white;
        opacity: .4;
    }
</style>