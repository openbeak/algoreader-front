<template>
    <!-- <div class = "recommend"><span>{{ number }}</span></div> -->
    <div class = "recommend" @click="goToLocation()"><span>{{ this.number }}</span></div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "algoMap",
        data: {
            number: '',
            link: ''
        },
        props: ['info'],
        methods: {
            goToLocation : function(){
                window.open = this.link;
            }
        },
        beforeMount(){
            this.number = this.info.number;
            this.link = 'https://www.acmicpc.net/problem/'+this.info.number;
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
        background-color: random(['#f0c54d', '#f0eb4d', '#bdf056', '#87f056', '#56f082', '#27f0dc', '#2ed3e6', '#2abcf0', '#3560f0', '#353bf0'])
    }
    
</style>