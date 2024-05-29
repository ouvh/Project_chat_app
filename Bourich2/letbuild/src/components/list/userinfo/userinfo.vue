<template>
  <div>

    <div class="userinfo d-flex align-items-center justify-content-between pt-3 pb-3">
      
      <div class="user d-flex align-items-center gap-2 flex-grow-1" style="overflow:hidden">
        

        <div class="">
        <b-navbar toggleable="0%" type="white" style="">
          <b-navbar-toggle target="nav-collapse">
            <template #default="{ expanded }">
                <i v-if="!expanded"  class="bi bi-list" style="color:white; font-size: 1.8rem;"></i>

            </template>
          </b-navbar-toggle>

        </b-navbar>
        </div>
          
        <b-avatar src="../../../assets/avatar.png" size="md"></b-avatar>
        <h5  class="m-0 user-name">John Doe</h5>
        


      </div>
      
      
      
      

    

    </div>

      <b-collapse id="nav-collapse" is-nav class="items">
        <b-navbar-nav  class="navbar">
          <b-nav-item  class="items"  to="/">Home</b-nav-item>
          <b-nav-item class="items"  to="/settings">Profile</b-nav-item>
          <b-nav-item class="logout items" style="width:100%;text-align:center;border-radius:10px"   to="/settings">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>



  </div>
</template>

<script>
import { BAvatar, BDropdown, BDropdownItem } from 'bootstrap-vue-3';

export default {
  components: {
    BAvatar,
    BDropdown,
    BDropdownItem,
  },
};
</script>

<style scoped>
.userinfo {
  border-bottom: 1px solid #dee2e6;
}

.user-name {
  white-space: nowrap; /* Prevent text from wrapping */
  overflow: hidden; /* Hide overflow */
  text-overflow: ellipsis; /* Show ellipsis for overflow text */
}

.icon-style {
  font-size: 1rem; 
  cursor: pointer;
}

/* Adjust padding and gap for smaller screens */
@media (max-width: 576px) {
  .userinfo {
    padding: 0.5rem;
  }

  .user {
    gap: 0.5rem;
  }

  .icons {
    gap: 0.5rem;
  }
}


.items{
  color: antiquewhite;
  --bs-nav-link-color: antiquewhite;
  border-color: #dee2e6;
}
.logout{
  background-color: rgb(188, 23, 23);
  transition: all ease-in 0.2s;

}

.logout:hover{
  background-color: rgb(122, 14, 14);

}

.navbar{
  margin-top: 10px;
}
</style>
