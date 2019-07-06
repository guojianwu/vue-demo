<template>
  <v-distpicker
  :placeholders="placeholders" 
  :province="values.province" 
  :city="values.city" 
  :area="values.area" 
  @province="province" @city="city" @area="area">
  </v-distpicker>
</template>
<script>
import VDistpicker from 'v-distpicker'
export default {
  props: {
    addres: {
      type: Object,
      default: null
    }
  },
  watch: {
    addres() {
      this.values = this.addres;
    }
  },
  data() {
    return {
      placeholders: {
        province: '请选择省',
        city: '请选择市',
        area: '请选择区',
      },
      values: {
        province: '',
        city: '',
        area: ''
      }
    }
  },
  methods: {
    province(obj) {
      if (obj.code) {
        this.values.province = obj.value;
      }else{
        this.values.province='';
      }


    },
    city(obj) {
      if (obj.code) {
        this.values.city = obj.value;
      }else{
        this.values.city='';
      }


    },
    area(obj) {
      if (obj.code) {
        this.values.area = obj.value;
      }else{
        this.values.area='';
      }


    }
  },
  components: {
    VDistpicker
  }
}
</script>
<style scoped>
>>> select{
  width: 200px;
  font-size: 15px;
}

</style>