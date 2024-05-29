<template>
  <div class="list d-flex flex-column flex-grow-1">
    <userinfo />
    <div class="search-bar p-2">
      <input type="text" class="form-control" placeholder="Search">
    </div>
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
  background-color: #2c2f33;
  color: #fff;
}

.search-bar {
  border-bottom: 1px solid #444;
}

input.form-control {
  background-color: #3a3f44;
  color: #fff;
  border: none;
}

input.form-control::placeholder {
  color: #bbb;
}
</style>
