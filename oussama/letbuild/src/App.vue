<template>
  <b-container fluid class="container">
    <RouterView />
  </b-container>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default {
 
};

</script>

<style>

.ooo {
  transition: width 0.5s ease-in-out;
  height: 90vh;
}
.animated {
  transition: width 0.5s ease-in-out;
}

#app {
  color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  display: flex;
  justify-content: center;
  height: 90vh;
  background-color: rgba(12, 26, 53, 0.75);
  border-radius: 12px;
  backdrop-filter: blur(19px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.125);
}


</style>
