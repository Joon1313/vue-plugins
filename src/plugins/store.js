import { ref } from "vue";

export default {
  install(app){
    const store = {
      state:{
        count:ref(0),
      },
      mutation:{
        init(){
          store.state.count.value = 0;
        },
        increment(){
          store.state.count.value += 1;
        },
        decrement(){
          store.state.count.value -= 1;
        }
      }
    }
    app.provide('store', store);
    console.log(app)
  }
}