<template>
    <div id="algoMap">
        <h1>This is Algorithm Map</h1>
        <h2>ID : {{this.$store.state.userId}}</h2>
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
    export default {
        name: "algoMap"
    }
</script>

<style scoped>
    #algoMap {
        border: 1px solid blue;
        height: 98vh;
    }
    #mapArea {
        display: flex;
        height: 70vh;
        flex-direction: row;
    }
    #bubbles {
        flex-grow: 3;

    }
    #category {
        flex-grow: 1;
    }

    .section1 {
        height: 100%;
        border: 1px solid green;
        margin: 5px;
    }

    .section2 {

    }
</style>