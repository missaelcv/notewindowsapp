<template>
  <h1>bg-transparent</h1>
</template>

<script>
//import { defineComponent } from 'vue';
import { onMounted } from "vue"
import { auth } from "./Utils/firebase";

export default defineComponent({
  name: "App",
  setup(){
    onMounted(() => {
      auth.onAuthStateChanged((user) =>{
          if (user){
            console.log("Usuario Logeado");
          } else {
            console.log("Usuario No Logeado");
          }
        })
     // Console.log("Hola Firebase esta funcionado");
    });
  },
});
</script>
