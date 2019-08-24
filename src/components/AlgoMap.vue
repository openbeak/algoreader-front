<template>
    <div id="algoMap">
        <h4 style="position : relative ; left : 30%;">추천문제</h4>
        <h2 class="user_name">ID : {{this.getUserId}}</h2>
        <div class="recommend_box">1194</div>
        <div id="mapArea">
            <div id="category" class="section1">
                <div v-for="(pb, index) in this.sortedProblems" class="section2 category" style="text-align: left;">{{index+1}} : {{pb['category']}}</div>
            </div>
            <div id="bubbles" class="section1">
                <div v-for="(pb, index) in this.sortedProblems" class="section2 points">
                    <Point v-for="p in pb['value']" :info="p" :colorIdx="index"/>
                </div>
            </div>
            <svg width="1200" height="600">
                <line x1="10" y1="35" x2="1160" y2="35" style="stroke:rgb(255,255,255);stroke-width:1;"></line>
                <line x1="10" y1="90" x2="1160" y2="90" style="stroke:rgb(255,255,255);stroke-width:1;"></line>
                <line x1="10" y1="145" x2="1160" y2="145" style="stroke:rgb(255,255,255);stroke-width:1;"></line>
                <line x1="10" y1="200" x2="1160" y2="200" style="stroke:rgb(255,255,255);stroke-width:1;"></line>
                <line x1="10" y1="255" x2="1160" y2="255" style="stroke:rgb(255,255,255);stroke-width:1;"></line>
                <line x1="10" y1="310" x2="1160" y2="310" style="stroke:rgb(255,255,255);stroke-width:1;"></line>
                <line x1="10" y1="365" x2="1160" y2="365" style="stroke:rgb(255,255,255);stroke-width:1;"></line>
                <line x1="10" y1="420" x2="1160" y2="420" style="stroke:rgb(255,255,255);stroke-width:1;"></line>
                <line x1="10" y1="475" x2="1160" y2="475" style="stroke:rgb(255,255,255);stroke-width:1;"></line>
                <line x1="10" y1="530" x2="1160" y2="530" style="stroke:rgb(255,255,255);stroke-width:1;"></line>
            </svg>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Point from "./Point";

    export default {
        name: "algoMap",
        components: {Point},
        data: {
            sortedProblems: [],
            categoryNum: null
        },
        computed: {
            ...mapGetters([
                'getUserId',
                'getSolvedProblems'
            ])
        },
        methods: {

        },
        beforeUpdate() {
            // this.sortedProblems.sort((a) =>{return a['time'];});
            //console.log(this.getSolvedProblems);
            const sorting = this.getSolvedProblems // 시간 순서대로 오름차순 정렬
                .sort((a,b) => {
                    return a['time']-b['time'];
                })

            let timeScope = [];
            timeScope.push(sorting[0]['time']);
            timeScope.push(sorting[sorting.length-1]['time']);
            this.$store.commit('setTimeScope', timeScope);
            //console.log(timeScope);

            // 문제 유형별로 많이 푼 문제부터 내림차순 정렬
            this.sortedProblems = JsonToArray(groupBy(sorting, 'category'))
                .sort((a,b) => {
                    return b['value'].length - a['value'].length;
                });
            // console.log(this.sortedProblems);
            this.categoryNum = this.sortedProblems.length;
        }
    }

    // methods
    const groupBy = (xs, key) => {
        return xs.reduce(function(rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };

    const JsonToArray = (data) => {
        let array = [];
        Object.keys(data).forEach(key => {
            if(array.length <= 9) {
                array.push({ 'category': key, 'value':data[key]});
            }
        });
        return array;
    }

    // 이걸 왜 만들었지?
    const ArrayToJson = (data, key) => {
        let json = {};
        data.forEach(el => {
            json[el[key]] = el['value']
        });
        return json;
    }
</script>

<style scoped>
    #algoMap {
        background-image: url("../assets/background-graph.png");
        height: 100vh;
        background-color: #0d2940;
        border-top: 1px solid white;
        color: white;
    }
    #mapArea {
        display: flex;
        height: 70vh;
        flex-direction: row;
        padding-left: 20px;
        padding-right: 20px;
    }
    #category {
        width: 180px;
        font-size: 12px;

    }
    #bubbles {
        flex-grow: 1;
    }

    .section1 {
        height: 100%;
        margin: 5px;
        display: flex;
        flex-direction: column;
    }

    .section2 {
        display: flex;
        align-content: center;
        flex-direction: column;
    }

    .category {
        flex-grow: 1;
        justify-content: center;

    }

    .points {
        flex-grow: 1;
        font-size: 10px;
        display: flex;
        flex-direction: row;
    }

    .user_name {
        position : relative;
        right : 40%;
        color : #27f0dc;
    }

    .recommend_box{
        position : relative;
        left :80%;
        width: 72px;
        padding-top : 25px;
        padding-bottom : 25px;
        border-radius: 27px;
        border: solid 2px #ffffff;
        background-color: rgba(255, 255, 255, 0.3);
    }

</style>