<template>
  <div class="details p-3 d-flex flex-column">
    <div class="userinfo text-center">
      <img src="../../../public/assets/avatar.png" alt="Avatar" class="rounded-circle" width="80" height="80">
      <h5 class="mt-2">Jane Doe</h5>
      <p class="text-muted">Lorem ipsum dolor sit amet.</p>
    </div>
    <div class="settings mt-4">
      <h6>Chat Settings</h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Chat Settings</li>
        <li class="list-group-item">Privacy & Help</li>
      </ul>
    </div>
    <div class="shared-photos mt-4">
      <h6>Shared photos</h6>
      <div class="d-flex flex-wrap">
        <img src="https://th.bing.com/th/id/OIP.JPllmkWBqX_ALvUO_DAnZwHaE7?rs=1&pid=ImgDetMain" alt="Shared Photo" class="img-thumbnail m-1" width="60" height="60" v-for="n in 4" :key="n">
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.details {
  background-color: #f8f9fa;
  height: 100%;
}

.userinfo img {
  border: 2px solid #ddd;
}

.settings h6,
.shared-photos h6 {
  font-weight: bold;
}

.list-group-item {
  background-color: transparent;
  border: none;
  padding-left: 0;
}

.img-thumbnail {
  border: none;
}
</style>
