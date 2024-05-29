<template>
  <div class="chatlist p-3">
    <div class="chat-item d-flex align-items-center p-2 border-bottom" v-for="chat in chats" :key="chat.id">
      <img :src="chat.avatar" alt="Avatar" class="rounded-circle me-3" width="40" height="40">
      <div>
        <h6 class="mb-0">{{ chat.name }}</h6>
        <small class="text-muted">{{ chat.lastMessage }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chats: [
        { id: 1, name: 'Alice', avatar: '@/assets/avatar1.png', lastMessage: 'Hello there!' },
        { id: 2, name: 'Bob', avatar: '@/assets/avatar2.png', lastMessage: 'How are you?' },
        // Add more chat items here
      ]
    };
  }
};
</script>

<style scoped>
.chat-item {
  cursor: pointer;
}
</style>
