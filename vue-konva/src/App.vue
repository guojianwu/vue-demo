<template>
  <div id="app">
    <div class="stage">
      <v-stage ref="stage" :config="configKonva">
      <v-layer ref="layer" :config='configLayer'>
        <v-circle :config="configCircle"></v-circle>
        <v-text :config="configText"></v-text>
      </v-layer>
      </v-stage>
    </div>
    

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      configKonva: {
        width: 500,
        height: 500
      },
      configLayer:{
        draggable: true
      },
      configCircle: {
        x: 100,
        y: 100,
        radius: 70,
        fill: "red",
        stroke: "black",
        strokeWidth: 4
      },
      configText:{
         x: 100,
         y: 100,
         text: 'Simple Text',
      }
    };
  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
  background: #ccc;
}
.konvajs-content{
  background: #fff;
  cursor: pointer;
}
</style>
