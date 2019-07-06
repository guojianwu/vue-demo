<template>
    <div>
        <button @click="login">login</button>
        <button @click="center">center</button>
    </div>
</template>
<script>
var qs=require("qs")

export default {

    mounted() {
        //   this.center();
    },
    methods: {
        center() {
            this.axios.post("/api/getlist", [1,2, 3, 4,5,6] ).then((res) => {
                console.log(res);
            })
        },
        login() {
            this.axios.get("/api/api/login").then((res) => {
                console.log(res);
            })
        }
    },

}
</script>
