<template>
  <div class="userinfo p-3 d-flex justify-content-between align-items-center border-bottom">
    <div class="user d-flex align-items-center">
      <img src="../../../../public/assets/avatar.png" alt="Avatar" class="rounded-circle me-3" width="50" height="50">
      <h5 class="mb-0">John Doe</h5>
    </div>
    <div class="icons">
      <i class="bi bi-three-dots fs-4 me-3"></i>
      <i class="bi bi-camera-video fs-4 me-3"></i>
      <i class="bi bi-pencil fs-4"></i>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.userinfo {
  background-color: #2c2f33;
  color: #fff;
}
.icons i {
  cursor: pointer;
  color: #bbb;
}
</style>
