<template>
  <div class="list d-flex flex-column flex-grow-1">
    <userinfo />
    <chatlist />
  </div>
</template>

<script>
import chatlist from './chatlist/chatlist.vue';
import userinfo from './userinfo/userinfo.vue';

export default {
  components: { userinfo, chatlist },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
