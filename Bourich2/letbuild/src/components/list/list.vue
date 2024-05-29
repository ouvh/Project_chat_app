<template>
  <div class="d-flex flex-column h-100">
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
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
