<template>
    <div id="algoMap">
        <h1 style="margin-top: 0; padding-top: 30px;">This is Algorithm Map</h1>
        <h2>ID : {{this.getUserId}}</h2>
        <div id="mapArea">
            <div id="category" class="section1">
                <div v-for="(pb, index) in this.sortedProblems" class="section2 category">{{index+1}} : {{pb['category']}}</div>
            </div>
            <div id="bubbles" class="section1">
                <div v-for="(pb, index) in this.sortedProblems" class="section2 points">
                    <Point v-for="p in pb['value']" :info="p" :colorIdx="index"/>
                </div>
            </div>
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
          sortedProblems: []
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
           array.push({ 'category': key, 'value':data[key]})
            if(array.length === 10) { return array; }
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
        height: 100vh;
        background-color: #0d2940;
        border-top: 1px solid white;
        color: white;
    }
    #mapArea {
        display: flex;
        height: 70vh;
        flex-direction: row;
    }
    #category {
        width: 150px;
        font-size: 12px;

    }
    #bubbles {
        flex-grow: 1;
    }

    .section1 {
        height: 100%;
        border: 1px solid white;
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

</style>