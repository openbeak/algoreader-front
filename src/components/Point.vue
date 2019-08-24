<template>
<!--    <div class="point">-->
        <div class="dot"></div>
<!--    </div>-->
</template>

<script>
    export default {
        name: "Point",
        props: {
            info: Object
        }
    }
</script>

<style scoped>
    .point {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        vertical-align: middle;
        horiz-align: center;
    }

    .dot {
        width: 10px;
        height: 10px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        margin: auto;
    }
</style>