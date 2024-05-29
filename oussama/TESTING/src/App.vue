<template>
  <div class="container-fluid vh-100 d-flex flex-column">
    <div class="row flex-grow-1">
      <div class="col-12 col-md-3 p-0 border-end d-none d-md-block">
        <list />
      </div>
      <div class="col-12 col-md-6 p-0 chat-container">
        <chat />
      </div>
      <div class="col-12 col-md-3 p-0 border-start d-none d-md-block">
        <details />
      </div>
    </div>
  </div>
</template>

<script>
import List from './components/list/list.vue';
import Chat from './components/chat/chat.vue';
import Details from './components/detail/detail.vue';

export default {
  components: {
    List,
    Chat,
    Details
  }
};
</script>

<style>
body, html {
  height: 100%;
  margin: 0;
  background-color: #f5f5f5;
}

.chat-container {
  background-color: #fff;
}
</style>
