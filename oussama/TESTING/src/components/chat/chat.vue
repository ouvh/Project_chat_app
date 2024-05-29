<template>
  <div class="chat p-3 d-flex flex-column flex-grow-1">
    <div class="messages flex-grow-1 overflow-auto">
      <div class="message mb-3 p-2 rounded bg-light" v-for="message in messages" :key="message.id">
        <p class="mb-0">{{ message.text }}</p>
        <small class="text-muted">{{ message.time }}</small>
      </div>
    </div>
    <div class="input-group mt-3">
      <input type="text" class="form-control" placeholder="Type a message">
      <button class="btn btn-primary">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        { id: 1, text: 'Hello!', time: '10:00 AM' },
        { id: 2, text: 'Hi there!', time: '10:02 AM' },
        // Add more messages here
      ]
    };
  }
};
</script>

<style scoped>
.chat {
  height: 100%;
}

.messages {
  flex-grow: 1;
}

.message {
  background-color: #e6e6e6;
}

.input-group {
  border-top: 1px solid #ddd;
}
</style>
