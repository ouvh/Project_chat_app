<template>
    
    
        <div class="login-container">
    
    
    
    
          <b-form class="login-card" @submit.prevent="register">
    
    
    
                <b-form-group class="w-100">
                  <label for="profile-picture-input" class="profile-picture-label">
                    <img :src="profilePictureUrl || defaultProfilePicture" alt="Profile Picture" class="profile-picture" />
                    <span>Upload an image</span>
                  </label>
                  <input id="profile-picture-input" type="file" @change="onFileChange" accept="image/*" class="form-control-file" style="display:none;">
                </b-form-group>
    
    
    
    
    
            <b-form-group label="Username" label-for="username-input" class="w-100">
              <b-form-input id="username-input" v-model="username" type="text" required placeholder="Choose a username"></b-form-input>
            </b-form-group>
            <b-form-group label="Email" label-for="email-input" class="w-100">
              <b-form-input id="email-input" v-model="email" type="email" class="w-100" required placeholder="Enter your email" ></b-form-input>
            </b-form-group>
            
            <b-button type="submit" variant="success" class="ooopp w-100 mb-2">Save Changes</b-button>
    
            <b-button  variant="danger" class=" w-100 mb-2">Change Password</b-button>
          </b-form>
    
    
    
        </div>
    

  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        profilePicture: null,
      profilePictureUrl: '',
      defaultProfilePicture: require('../../assets/default_user.png') // Path to your default profile picture
    
      };
    },
    methods: {
      async register() {
        if (this.password !== this.confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
        try {
          // Assume auth is set up for registration
          await auth.createUserWithEmailAndPassword(this.email, this.password);
          this.$router.push('/'); // Redirect to homepage or dashboard after registration
        } catch (error) {
          alert(error.message);
        }
      },
      goToLogin() {
        this.$router.push('/');
      },
      onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.profilePicture = file;
        this.profilePictureUrl = URL.createObjectURL(file);
      }
    },
    },
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
    
    background-color: rgb(203, 105, 13);
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
    width: 100%;
    height:100%
  
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
  input {
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
  .profile-picture-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.profile-picture {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
  border: 2px solid #ccc;
}
  </style>
  