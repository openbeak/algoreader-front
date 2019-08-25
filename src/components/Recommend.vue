<template>
    <!-- <div class = "recommend"><span>{{ number }}</span></div> -->
    <div class = "recommend" @click="goToLocation()" :style="styleObject" ><span>{{ this.number }}</span></div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "algoMap",
        data: {
            number: '',
            link: '',
        },
        props: ['info'],
        methods: {
            goToLocation : function(){
                window.open(this.link);
            }
        },
        beforeMount(){
            this.number = this.info.number;
            this.link = 'https://www.acmicpc.net/problem/'+this.info.number;
        },
        beforeCreate() {

        }
}

</script>

<style scoped>
    .recommend{
        width: 50px;
        height: 50px;
        line-height: 50px;
        border-radius: 18px;
        border: solid 1.5px #ffffff;
        background-color: rgba(255, 255, 255, 0.3);
        margin-right: 6px;
        cursor: pointer;
    }
    span{
        text-align: center;
        font-size: 12px;
        font-weight: bold;
    }
    .recommend:hover {
        background-color: rgb(46, 211, 230, 0.9);
    }
    
</style>