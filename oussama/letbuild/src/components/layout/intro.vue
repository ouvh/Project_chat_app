<template>
  <div class="app-introduction">
    <h2>Welcome to ChatApp!</h2>
    <p>ChatApp is a real-time messaging platform where you can connect with your friends and family. Enjoy seamless communication with our user-friendly interface.</p>
    <img src="@/assets/intro.jpg" alt="Chat Icon" class="chat-icon">
  </div>
</template>

<script>
export default {
  name: 'AppIntroduction'
};
</script>

<style scoped>
.app-introduction {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px; /* Adjust based on your layout */
}

.app-introduction h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.app-introduction p {
  font-size: 16px;
  color: #555;
}

.chat-icon {
  width: 50px;
  height: 50px;
  margin-top: 10px;
}
</style>
