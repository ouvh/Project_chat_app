<template>
  <div class="container">
    <list />

    <chat />
    <detail />

    

  </div>
</template>


<script>
import chat from "./components/chat/chat.vue"
import list from "./components/list/list.vue"
import detail from "./components/detail/detail.vue"


export default {
  components:{chat,list,detail}
  
}
</script>






<style>
#app {
  color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container{
  display: flex;
  width: 90vw;
  height: 90vh;
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 12px;
  backdrop-filter: blur(19px) saturate(180%);
  border: 1px solid rgba(255. 255. 255. 0.125);;
}


</style>
