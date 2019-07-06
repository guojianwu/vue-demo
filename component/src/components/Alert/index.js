import Vue from 'vue'
import myNotice from './Alert.vue'

const NoticeConstructor = Vue.extend(myNotice) // 直接将Vue组件作为Vue.extend的参数

let nId = 1

const Alert = (content) => {
  // 只添加一个DOM节点
  // if(document.getElementById('my-notice')){
  //   return false;
  // }
  let id = 'notice-' + nId++
  var message='';
  var duration=3000;
  if(Object.prototype.toString.call(content)=="[object Object]"){
    message=content.message||"";
    duration=content.duration||3000;
  }else{
    message=content||'';
  }
  const NoticeInstance = new NoticeConstructor({
    data: {
      message,
      duration
    }
  }) // 实例化一个带有content内容的Notice

  NoticeInstance.id = id
  NoticeInstance.vm = NoticeInstance.$mount() // 挂载但是并未插入dom，是一个完整的Vue实例
  NoticeInstance.vm.visible = true

  NoticeInstance.dom = NoticeInstance.vm.$el
  document.body.appendChild(NoticeInstance.vm.$el) // 将dom插入body
  NoticeInstance.dom.style.zIndex = nId + 1001 // 后插入的Notice组件z-index加一，保证能盖在之前的上面
  // NoticeInstance.dom.id='my-notice';
  return NoticeInstance.vm;

}

export default {
  install: Vue => {
    Vue.prototype.$myAlert = Alert // 将Notice组件暴露出去，并挂载在Vue的prototype上
  }
}