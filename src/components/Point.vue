<template>
    <div class="dot" v-bind:class="num" v-bind:style="{left: left, backgroundColor: color, opacity: opacity}" v-on:click="detail(number, left)"></div>
</template>

<script>
    import { mapGetters } from 'vuex';
    // import anime from 'animejs';

    export default {
        name: "Point",
        data: {
            time: null,
            left: '200px',
            color: '',
            opacity: '',
            number: '',
        },
        methods: {
            detail(number, left) {
                this.$emit('getClickedInfo', number, left);
            }
        },
        props: ['info','colorIdx'],
        computed: {
            ...mapGetters([
                'getMaxTime',
                'getMinTime'
            ]),
            num: function () {
                return this.number;
            }
        },
        beforeMount() {
            // 비율을 계산해서 점을 이동시켜 줌
            const min = TimeStampNumChange(this.getMinTime);
            const max = TimeStampNumChange(this.getMaxTime);
            this.time = TimeStampNumChange(this.info.time);
            this.left = 280+1000*leftProportion(min,max,this.time)+'px'
            // console.log(this.info.number);
            // 색상을 인덱스에 따라 구분
            this.color = indexColor(this.colorIdx);
            this.opacity = 1-this.info.collectRate/100;
            this.number = this.info.number;

            // anime({
            //     targets: '.'+this.number,
            //     translateX: 280+1000*leftProportion(min,max,this.time),
            //     duration: 3000
            // });
        },
        mounted() {
        },
        beforeUpdate() {
        },
        updated() {
        }
    }

    // 최댓값이면 1, 최솟값이면 0, 그 사이에서 비율만큼 소수를 반환하는 메소드
    const leftProportion = (min, max, mine) => {
        return (mine-min)/(max-min);
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
        else return '#0000000'
    }

    const TimeStampNumChange = (num) => {
        return num*12*30/1000000 + 30*((num%1000000)/10000) + ((num%10000)/100)
    }
</script>

<style scoped>
    .dot {
        position: absolute;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        display: inline-block;
        margin-top: 19px;
    }
</style>