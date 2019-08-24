<template>
    <div id="algoMap">
        <h1 style="margin-top: 0; padding-top: 30px;">This is Algorithm Map</h1>
        <h2>ID : {{this.getUserId}}</h2>
        <div id="mapArea">
            <div id="bubbles" class="section1">
                <div class="section2"></div>
            </div>
            <div id="category" class="section1">
                <div class="section2"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "algoMap",
        computed: {
            ...mapGetters([
                'getUserId',
                'getSolvedProblems'
            ])
        },
        methods: {

        },
        updated() {
            console.log(groupBy(this.getSolvedProblems,'category'));
            console.log(ArrayToJson(JsonToArray(groupBy(this.getSolvedProblems, 'category'))
                        .sort((a,b) => {
                            if(a['value'].length > b['value'].length) {
                                return -1;
                            } else if(a['value'].length === b['value'].length) {
                                return 0;
                            } else {
                                return 1;
                            }
                        }),'category'));
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
        });
        return array;
    }

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
    #bubbles {
        flex-grow: 1;

    }
    #category {
        flex-grow: 3;
    }

    .section1 {
        height: 100%;
        border: 1px solid white;
        margin: 5px;
    }

    .section2 {

    }
</style>