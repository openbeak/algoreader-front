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
        {
            'number': 41,
            'name': '더미 문제1',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':19012118
        },
        {
            'number': 43,
            'name': '더미 문제2',
            'category': 'Greedy',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':19052116
        },
        {
            'number': 48,
            'name': '더미 문제3',
            'category': 'BFS',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':19052130
        },
        {
            'number': 51,
            'name': '더미 문제4',
            'category': 'Simulation',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':19022150
        },
        {
            'number': 58,
            'name': '더미 문제5',
            'category': 'Sorting',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':19042121
        },
        {
            'number': 61,
            'name': '더미 문제6',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':19042114
        },
        {
            'number': 63,
            'name': '더미 문제7',
            'category': 'Binary Search',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':19032154
        },
        {
            'number': 68,
            'name': '더미 문제8',
            'category': 'Greedy',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':19032134
        },
        {
            'number': 71,
            'name': '더미 문제9',
            'category': 'Binary Search',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':19032122
        },
        {
            'number': 78,
            'name': '더미 문제10',
            'category': 'Dynamic Programming',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':19032111
        },
        {
            'number': 101,
            'name': '더미 문제1',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':18112118
        },
        {
            'number': 103,
            'name': '더미 문제2',
            'category': 'Greedy',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':18072116
        },
        {
            'number': 108,
            'name': '더미 문제3',
            'category': 'Math',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':18042130
        },
        {
            'number': 111,
            'name': '더미 문제4',
            'category': 'Simulation',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':19102150
        },
        {
            'number': 118,
            'name': '더미 문제5',
            'category': 'Brute Force',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':18122121
        },
        {
            'number': 121,
            'name': '더미 문제6',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':19082114
        },
        {
            'number': 123,
            'name': '더미 문제7',
            'category': 'DFS',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':19032154
        },
        {
            'number': 128,
            'name': '더미 문제8',
            'category': 'Greedy',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':18062134
        },
        {
            'number': 131,
            'name': '더미 문제9',
            'category': 'Math',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':18052122
        },
        {
            'number': 138,
            'name': '더미 문제10',
            'category': 'Dynamic Programming',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':19032111
        },
        {
            'number': 141,
            'name': '더미 문제1',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':19012118
        },
        {
            'number': 143,
            'name': '더미 문제2',
            'category': 'Greedy',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':19122116
        },
        {
            'number': 148,
            'name': '더미 문제3',
            'category': 'BFS',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':19052130
        },
        {
            'number': 151,
            'name': '더미 문제4',
            'category': 'Simulation',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':19092150
        },
        {
            'number': 158,
            'name': '더미 문제5',
            'category': 'Sorting',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':19112121
        },
        {
            'number': 161,
            'name': '더미 문제6',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':19042114
        },
        {
            'number': 163,
            'name': '더미 문제7',
            'category': 'Binary Search',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':19032154
        },
        {
            'number': 168,
            'name': '더미 문제8',
            'category': 'Greedy',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':19032134
        },
        {
            'number': 171,
            'name': '더미 문제9',
            'category': 'Binary Search',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':19032122
        },
        {
            'number': 178,
            'name': '더미 문제10',
            'category': 'Dynamic Programming',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':18012111
        },
        {
            'number': 301,
            'name': '더미 문제1',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':17032118
        },
        {
            'number': 303,
            'name': '더미 문제2',
            'category': 'Greedy',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':19031216
        },
        {
            'number': 308,
            'name': '더미 문제3',
            'category': 'Data Structure',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':17082130
        },
        {
            'number': 311,
            'name': '더미 문제4',
            'category': 'Math',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':19030050
        },
        {
            'number': 318,
            'name': '더미 문제5',
            'category': 'Brute Force',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':19030021
        },
        {
            'number': 321,
            'name': '더미 문제6',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':18032114
        },
        {
            'number': 323,
            'name': '더미 문제7',
            'category': 'DFS',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':17032154
        },
        {
            'number': 328,
            'name': '더미 문제8',
            'category': 'Greedy',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':17082134
        },
        {
            'number': 331,
            'name': '더미 문제9',
            'category': 'Simulation',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':19022122
        },
        {
            'number': 338,
            'name': '더미 문제10',
            'category': 'Tree',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':17032111
        },
        {
            'number': 341,
            'name': '더미 문제1',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':19032118
        },
        {
            'number': 343,
            'name': '더미 문제2',
            'category': 'Greedy',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':19052116
        },
        {
            'number': 348,
            'name': '더미 문제3',
            'category': 'BFS',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':19052130
        },
        {
            'number': 351,
            'name': '더미 문제4',
            'category': 'Simulation',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':19042150
        },
        {
            'number': 358,
            'name': '더미 문제5',
            'category': 'Sorting',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':19042121
        },
        {
            'number': 361,
            'name': '더미 문제6',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':19122114
        },
        {
            'number': 363,
            'name': '더미 문제7',
            'category': 'Binary Search',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':19032154
        },
        {
            'number': 368,
            'name': '더미 문제8',
            'category': 'Greedy',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':19032134
        },
        {
            'number': 371,
            'name': '더미 문제9',
            'category': 'Binary Search',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':19032122
        },
        {
            'number': 378,
            'name': '더미 문제10',
            'category': 'Binary Search',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':19032111
        },
        {
            'number': 401,
            'name': '더미 문제1',
            'category': 'Binary Search',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':18112118
        },
        {
            'number': 403,
            'name': '더미 문제2',
            'category': 'Greedy',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':18070116
        },
        {
            'number': 408,
            'name': '더미 문제3',
            'category': 'Math',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':18042130
        },
        {
            'number': 411,
            'name': '더미 문제4',
            'category': 'Simulation',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':19102150
        },
        {
            'number': 418,
            'name': '더미 문제5',
            'category': 'Brute Force',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':18022121
        },
        {
            'number': 421,
            'name': '더미 문제6',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':19082114
        },
        {
            'number': 423,
            'name': '더미 문제7',
            'category': 'DFS',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':19032154
        },
        {
            'number': 428,
            'name': '더미 문제8',
            'category': 'Greedy',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':18112134
        },
        {
            'number': 431,
            'name': '더미 문제9',
            'category': 'Math',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':18052022
        },
        {
            'number': 438,
            'name': '더미 문제10',
            'category': 'Dynamic Programming',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':19032111
        },
        {
            'number': 441,
            'name': '더미 문제1',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':19012518
        },
        {
            'number': 443,
            'name': '더미 문제2',
            'category': 'Greedy',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':19121116
        },
        {
            'number': 448,
            'name': '더미 문제3',
            'category': 'BFS',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':19052130
        },
        {
            'number': 451,
            'name': '더미 문제4',
            'category': 'Simulation',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':19092150
        },
        {
            'number': 458,
            'name': '더미 문제5',
            'category': 'Sorting',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':19112121
        },
        {
            'number': 461,
            'name': '더미 문제6',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':19042114
        },
        {
            'number': 463,
            'name': '더미 문제7',
            'category': 'Binary Search',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':19032154
        },
        {
            'number': 468,
            'name': '더미 문제8',
            'category': 'Greedy',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':19030134
        },
        {
            'number': 471,
            'name': '더미 문제9',
            'category': 'Binary Search',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':19032122
        },
        {
            'number': 478,
            'name': '더미 문제10',
            'category': 'Dynamic Programming',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':18012111
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