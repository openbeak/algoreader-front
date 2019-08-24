<template>
    <div class="dot" v-bind:style="{left: left}"></div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "Point",
        data: {
            time: null,
            left: ''
        },
        props: ['info'],
        computed: {
            ...mapGetters([
                'getMaxTime',
                'getMinTime'
            ])
        },
        beforeMount() {
            const min = this.getMinTime;
            const max = this.getMaxTime;
            this.time = this.info.time;
            // 비율을 계산해서 점을 이동시켜 줌
            this.left = 180+1000*leftProportion(min,max,this.time)+'px';
            console.log(this.left);
        },
    }

    // 최댓값이면 1, 최솟값이면 0, 그 사이에서 비율만큼 소수를 반환하는 메소드
    const leftProportion = (min, max, mine) => {
        return (mine-min)/(max-min);
    }
</script>

<style scoped>
    .dot {
        position: absolute;
        width: 15px;
        height: 15px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
    }
</style>