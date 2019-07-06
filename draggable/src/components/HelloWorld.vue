<template>
  <div class="hello">
      <draggable tag="ul" v-model="list" :options="options" @update='onDraggableEnd'>
      <li v-for="(item,index) in list" :key="index" :style="{background:item.color}">{{item.name}}</li>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    //调用组件
    draggable,
  },
  data () {
    return {
      options:{
        animation:200,
        forceFallback:true,
      },
      list:[
        {
          id: 1,
          name: 'a',
          color:'red'
        },
        {
          id: 2,
          name: 'b',
          color:'blue'
        },
        {
          id: 3,
          name: 'c',
          color:'yellow'
        },
        {
          id: 4,
          name: 'd',
          color:'green'
        },
        {
          id: 5,
          name: 'e'
        },
        {
          id: 6,
          name: 'f',
          color:'black'
        },
      ]
    }
  },
  methods: {
     onDraggableEnd(e){
       console.log(e)
     }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  width: 200px;
  height: 400px;
  border: 1px solid #ccc;
  /* cursor: move; */
  margin-bottom: 30px;
}

</style>
