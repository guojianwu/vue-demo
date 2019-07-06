<template>
  <div class="amap-page-container">
    <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center" :zoom="zoom">
      <el-amap-marker v-for="(marker, index) in markers" :key="index" :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable" :vid="index"></el-amap-marker>
    </el-amap>

    <div class="toolbar">
      <span v-if="loaded">
        location: lng = {{ lng }} lat = {{ lat }}
      </span>
      <span v-else>正在定位</span>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import VueAMap from 'vue-amap'

Vue.use(VueAMap)
export default {
  data() {
    let self = this;
    return {
      zoom: 12,
      center: [113.18, 22.619],
      lng: 0,
      lat: 0,
      loaded: false,
      markers: [
        {
          position: [113.18, 22.619],
          events: {
            click: () => {
              alert('click marker');
            },
            dragend: (e) => {
              console.log('---event---: dragend')
              this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
            }
          },
          visible: true,
          draggable: false,
          template: '<span>1</span>',
        }
      ],
      plugin: [{
        pName: 'Geolocation',
        events: {
          init(o) {
            // if (navigator.geolocation) {
            //   navigator.geolocation.getCurrentPosition((position) => {
            //     console.log(position)
            //   }, () => { });
            // }
            // console.log(navigator.geolocation)
            o.getCurrentPosition((status, result) => {
              // console.log(status, result)
              if (result && result.position) {
                self.lng = result.position.lng;
                self.lat = result.position.lat;
                self.center = [self.lng, self.lat];
                self.markers[0].position = [self.lng, self.lat];
                self.loaded = true;
                self.$nextTick();
              }
            });
          }
        }
      }, {
        pName: 'ToolBar',
        events: {
          init(instance) {
            console.log(instance);
            instance.offset.x=200
          }
        }
      }]
    };
  },
  created() {
    VueAMap.initAMapApiLoader({
      key: '1c035eee5041ad39c91914e58e0ce070',
      plugin: ['AMap.Geolocation', 'Autocomplete', 'PlaceSearch', 'AMap.Scale', 'OverView', 'ToolBar', 'MapType', 'PolyEditor', 'AMap.CircleEditor'],
      v: '1.4.4'
    });
  }
}
</script>

<style>
.amap-demo {
  height: 300px;
}

.amap-page-container {
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 90vh;
}
</style>