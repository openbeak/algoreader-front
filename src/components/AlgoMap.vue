<template>
    <div id="algoMap">
        <h1 style="margin-top: 0; padding-top: 30px;">This is Algorithm Map</h1>
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