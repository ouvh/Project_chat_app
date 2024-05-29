<template>
  <div class="d-flex flex-column h-100">
    <userinfo />
    <chatlist />
  </div>
</template>

<script>
import chatlist from "@/components/list/chatlist/chatlistmodal.vue"
import userinfo from "@/components/list/userinfo/userinfomodal.vue"
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
