<template>
    <div id="algoMap">
        <h1>This is Algorithm Map</h1>
        <h2>ID : {{this.$store.state.userId}}</h2>
    </div>
</template>

<script>
    export default {
        name: "algoMap"
    }
</script>

<style scoped>
    #algoMap {
        border: 1px solid blue;
        height: 98vh;
    }
</style>