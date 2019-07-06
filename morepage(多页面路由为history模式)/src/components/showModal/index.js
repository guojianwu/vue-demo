import showModalComponent from "./showModal"
const showModal={
  install:(Vue)=>{
    Vue.component("showModal",showModalComponent);
  }
}
export default showModal;
