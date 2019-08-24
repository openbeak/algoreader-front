<template>
    <div id="main">
        <Intro />
        <AlgoMap />
    </div>
</template>

<script>
import Intro from '../components/Intro'
import AlgoMap from '../components/AlgoMap'

    export default {
        name: "MainPage",
        components: {
            AlgoMap,
            Intro
        }
    }
</script>

<style scoped>

</style>