<template>
    <div id="algoMap">
    <div class="userCustom">
        <div id="userId">{{this.getUserId}}</div>
        <div class="container">
            <div id ="recommendText">{{this.showRecommend?"추천 문제":""}}</div>
            <div class="recommendBox">
                <Recommend v-for="pb in this.recommendProblems" :info="pb"></Recommend>
            </div>
        </div>
    </div>

        <div v-if="getShowInfo" id="clickedProblem"><b style="font-size: 16px">{{getClickedInfo.name}}</b> {{getClickedInfo.number}}<br>{{getClickedInfo.category}} {{getClickedInfo.collectRate}}% {{writeDate(getClickedInfo.time)}}</div>
        <div id="mapArea">
            <div id="category" class="section1">
                <div v-for="(pb, index) in this.sortedProblems" class="section2 category" style="text-align: left;">{{index+1}} : {{pb['category']}}</div>
            </div>
            <div id="bubbles" class="section1">
                <div v-for="(pb, index) in this.sortedProblems" class="section2 points">
                    <Point v-for="p in pb['value']" :info="p" :colorIdx="index" @getClickedInfo="getInfo"/>
                </div>
            </div>
            <svg width="1200" height="530" style="display: none">
                <line x1="0" y1="34" x2="1160" y2="34" style="stroke:rgb(255,255,255);stroke-width:1;"></line>
                <line x1="0" y1="88" x2="1160" y2="88" style="stroke:rgb(255,255,255);stroke-width:1;"></line>
                <line x1="0" y1="142" x2="1160" y2="142" style="stroke:rgb(255,255,255);stroke-width:1;"></line>
                <line x1="0" y1="198" x2="1160" y2="198" style="stroke:rgb(255,255,255);stroke-width:1;"></line>
                <line x1="0" y1="253" x2="1160" y2="253" style="stroke:rgb(255,255,255);stroke-width:1;"></line>
                <line x1="0" y1="310" x2="1160" y2="310" style="stroke:rgb(255,255,255);stroke-width:1;"></line>
                <line x1="0" y1="365" x2="1160" y2="365" style="stroke:rgb(255,255,255);stroke-width:1;"></line>
                <line x1="0" y1="419" x2="1160" y2="419" style="stroke:rgb(255,255,255);stroke-width:1;"></line>
                <line x1="0" y1="477" x2="1160" y2="477" style="stroke:rgb(255,255,255);stroke-width:1;"></line>
                <line x1="0" y1="529" x2="1160" y2="529" style="stroke:rgb(255,255,255);stroke-width:1;"></line>
            </svg>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Point from "./Point";
    import Recommend from "./Recommend"

    export default {
        name: "algoMap",
        components: {Point, Recommend},
        data: {
            sortedProblems: [],
            categoryNum: null,
            recommendProblems: [],
            showRecommend:false
        },
        computed: {
            ...mapGetters([
                'getUserId',
                'getSolvedProblems',
                'getShowInfo',
                'getClickedNum',
                'getClickedInfo',
                'getClickedLeftPos',
                'getRecommend'
                'getClickedIndex'
            ])
        },
        methods: {
            getInfo(num, left, idx) {
                this.$store.commit('setClickedNum', num);
                this.$store.commit('setClickedLeftPos', left);
                this.$store.commit('setClickedIndex', idx);
                let problemInfo = {};
                let tmp = this.getSolvedProblems;
                tmp.forEach((prob) => {
                    if(prob['number'] === this.getClickedNum) {
                        problemInfo = prob;
                    }
                })
                this.$store.commit('setShowInfo',true);
                this.$store.commit('setClickedInfo', problemInfo);
            },
            writeDate(time) {
                return '20'+parseInt(time/1000000)+'.'+(parseInt(time/10000)%100)+'.'+(parseInt(time/100)%100);
            },
        },
        beforeUpdate() {
            // this.sortedProblems.sort((a) =>{return a['time'];});
            // console.log(this.getSolvedProblems);
            document.getElementsByTagName('svg')[0].style.display = 'block';
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
            this.recommendProblems = this.getRecommend;
            this.showRecommend = true;
            document.getElementById('clickedProblem').style.backgroundColor = indexColor(this.getClickedIndex);
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

    const indexColor = (index) => {
        if(index === 0) { return '#f0c54d'}
        else if(index === 1) { return '#f0eb4d'}
        else if(index === 2) { return '#bdf056'}
        else if(index === 3) { return '#87f056'}
        else if(index === 4) { return '#56f082'}
        else if(index === 5) { return '#27f0dc'}
        else if(index === 6) { return '#2ed3e6'}
        else if(index === 7) { return '#2abcf0'}
        else if(index === 8) { return '#3560f0'}
        else if(index === 9) { return '#353bf0'}
        else return '#000000'
    }
</script>

<style scoped>
    #algoMap {
        height: 100vh;
        background-image: url("../assets/background-graph.png");
        background-size: 100% 100%;
        border-top: 1px solid white;
        color: white;
    }
    #userId {
        float: left;
        color: #27f0dc;
        width: 200px;
        margin-right: 0;
        letter-spacing: 3px;
        font-weight: bold;
        text-align: left;
        margin-top: 92px;
        margin-left: 100px;
        font-size: 20px;
        margin-bottom: 40px;
    }
    #clickedProblem {
        padding: 15px;
        color: black;
        background: #f0c54d;
        font-size: 14px;
        border: 1px solid white;
        border-radius: 20px;
        width: fit-content;
        margin: 0 auto;
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
        font-size: 14px;

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
    .recommendBox{
        display: inline-flex;
    }
    .imageUser{
        margin-top: 10px;
    }
    .container{
        margin-right: 30px;
        margin-top: 42px;
        margin-bottom: 40px;
        float: right;
    }
    .userCustom{
        display: inline-block;
        width: 100%;
    }    
    .recommendText{
        font-size: 12px;
        margin-left: 12px;
        text-align: left;
        margin-bottom: 10px;
    }
</style>