<template>
  <div class="login-container">

    <b-form class="login-card" @submit.prevent="login">
      <b-form-group label="Email" label-for="email-input" class="w-100">
        
        <b-form-input id="email-input" v-model="email" type="email" required placeholder="Enter your email"></b-form-input>
      </b-form-group>
      <b-form-group label="Password" label-for="password-input" class="w-100">
        <b-form-input id="password-input" v-model="password" type="password" required placeholder="Enter your password"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="success" class="ooopp w-100 mb-2">Login</b-button>
      <b-button @click="goToSignUp"   class="ooooo w-100 mb-2">Sign Up</b-button>
      <b-button  @click="goToResetPassword"  class="op mb-2 w-100">Forgot Password?</b-button>
    </b-form>
  </div>


  <loadingPage v-if="loading" :progress="progr" />
</template>


<script>
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import { auth } from '@/firebase/Config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import loadingPage from '@/components/layout/loadingPage.vue';




export default {
  components:{loadingPage},
  data() {
    return {
      email: '',
      password: '',
      loading:false,
      progr:0,
    };
  },
  methods: {
    async login() {
      try {
        this.loading = true;
        this.progr = 30;
        await signInWithEmailAndPassword(auth, this.email, this.password);

        this.progr = 100;

        
        this.$router.push('/');
        Toastify({
        text: "Successful",
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        backgroundColor: "green",
      }).showToast();

      } catch (error) {
        this.loading = false;

        Toastify({
        text: error.message,
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        backgroundColor: "red",
      }).showToast();
      }
    },
    goToSignUp() {
      this.$router.push('/signup');
    },
    goToResetPassword() {
      this.$router.push('/reset-password');
    }
  }
};
</script>

<style scoped>
.op {

  background-color: rgba(149, 10, 71);
  border-color: transparent;

}
.op:hover{

  background-color: rgb(124, 13, 9);

}
.ooooo{
  
  background-color: rgb(251, 149, 9);
  border-color: transparent;
}
.ooopp:hover{
  background-color: rgb(23, 49, 13);


}

.ooooo:hover{
  background-color: rgb(99, 57, 9);

}

.ooopp{
  background-color: rgb(99, 124, 9);

}


.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%

}

.login-card {
   display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
  gap : 10px;
  width: 100%;
  max-width: 360px; /* Max width for the form */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}
input{
  
  
  border-radius: 9px;
  backdrop-filter: blur(19px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.125);
}
.btn-block {
  width: 100%;
  margin-bottom: 10px; /* Margin between buttons */
  background-color: rgba(151, 151, 204, 0.342);
}

/* Additional styles for form elements */
b-form-input {
  border-radius: 4px;
}

/* Styling for buttons for better UI consistency */
b-button {
  border-radius: 4px;
}
</style>
