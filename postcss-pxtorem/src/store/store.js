import vue from 'vue';
export const store =  vue.observable({count: 0});
export const mutation = {
  setCount( count ){
    store.count = count;
  }
}