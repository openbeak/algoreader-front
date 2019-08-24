<template>
    <div id="intro">
        <h1>Hello World</h1>
        <input v-model="userId" placeholder="write your id">
        <button v-on:click="submitId">Submit</button>
    </div>
</template>

<script>
    export default {
        name: "Intro",
        methods: {
            submitId: function () {
                this.$store.commit('setUserId', this.userId);
                window.scrollTo({
                    top: document.body.scrollHeight,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        },
        computed: {
        },
        data() {
            return {
                userId: null
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