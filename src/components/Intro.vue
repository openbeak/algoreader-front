<template>
    <div id="intro">
        <input v-model="userId" placeholder="write your id">
        <button v-on:click="submitId">Submit</button>
        <p id="description1">If you want to make your own visualization map,<br>please enter your ID.</p>
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
        background-image: url("../assets/background.png");
        background-size: cover;
        height: 100vh;
    }

    input {
        position: absolute;
        left: 710px;
        top: 600px;
        width: 300px;
        height: 40px;
        padding: 10px;
        border: 1px solid white;
        background-color: rgba(255,255,255,0.35);
        text-align: center;
        font-size: 20px;
        color: white;
        font-weight: 600;
    }

    button {
        position: absolute;
        left: 1040px;
        top: 600px;
        width: 140px;
        height: 62px;
        padding: 10px;
        border: 1px solid white;
        background-color: #f9a1ba;
        text-align: center;
        font-size: 20px;
        color: #1c1d20;
        font-weight: 600;
    }

    #description1 {
        position: absolute;
        left: 710px;
        top: 650px;
        padding: 10px;
        border: 0;
        background-color: transparent;
        text-align: left;
        font-size: 16px;
        color: #c6c6c6;
    }

    ::placeholder {
        color: white;
        opacity: .4;
    }
</style>