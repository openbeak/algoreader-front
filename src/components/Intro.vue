<template>
    <div id="intro">
        <h1>Hello World</h1>
        <button v-on:click="scrollDown">ScrollDown</button>
    </div>
</template>

<script>
    export default {
        name: "Intro",
        methods: {
            scrollDown: function () {
                console.log('works');
                window.scrollTo({
                    top: document.body.scrollHeight,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }
</script>

<style scoped>
    #intro {
        border: 1px solid red;
        height: 98vh;
        margin-bottom: 10px;
    }
</style>