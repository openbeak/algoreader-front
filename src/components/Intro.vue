<template>
    <div id="intro">
        <p id="title"><b>Algoreader</b><br>Be a leader by Reading Algorithm</p>
        <div id="inputSection">
            <div style="display: flex; flex-direction: row;">
                <input v-model="userId" placeholder="write your id">
                <button v-on:click="submitId">Submit</button>
            </div>
            <div>
                <p id="description1">If you want to make your own visualization map,<br>please enter your ID.</p>
            </div>
        </div>
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
        flex-grow: 2;
        padding: 10px;
        border: 1px solid white;
        margin-right: 10px;
        background-color: rgba(255,255,255,0.35);
        text-align: center;
        font-size: 16px;
        color: white;
        font-weight: 600;
    }

    button {
        flex-grow: 1;
        padding: 10px;
        border: 1px solid white;
        background-color: #f9a1ba;
        text-align: center;
        font-size: 16px;
        color: #1c1d20;
        font-weight: 600;
    }

    #title {
        position: absolute;
        left: 90px;
        top: 50px;
        padding: 10px;
        border: 0;
        background-color: transparent;
        text-align: left;
        font-size: 28px;
        font-weight: normal;
        color: white;
    }

    #inputSection {
        position: absolute;
        left: 63%;
        top: 75%;
        width: 420px;
        height: 300px;

    }

    #description1 {
        padding: 10px;
        border: 0;
        margin-top: 10px;
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