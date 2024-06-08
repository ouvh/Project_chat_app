<template>
  <div class="d-flex flex-column h-100">
    <userinfo :username="username" :profileimagelink="profileimagelink" />
    <chatlist :chats="chats" />
  </div>
</template>

<script>
import chatlist from './chatlist/chatlist.vue';
import userinfo from './userinfo/userinfo.vue';

export default {
  components: { userinfo, chatlist },
  props:['username','profileimagelink','chats'],

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
