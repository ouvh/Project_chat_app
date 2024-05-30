<template>
  <div class="chat">

   
            <div class="search">

                 <b-button  variant="primary" >
                        <div style="display:flex;gap:20px">
                            <i class="bi bi-chevron-left" style="border-radius:;color:white; font-size: 2rem;"></i>
                        </div>
                    </b-button>
                    
            <div class="searchbar">

            <b-form-input
            style="w-100"
                v-model="searchQuery"
                type="search"
                placeholder="Search for a Username"
                class="search-input"
                @input="performSearch"
            ></b-form-input>


            </div>
                <i  class="bi bi-search" style="color:white; font-size: 1.8rem;"></i>
                <div style="flex:1;display:flex;justify-content:end;gap:20px">
        
                    <b-button  variant="success" @click="groupformactive=true" >
                        <div style="display:flex;gap:20px;font-weight:bolder">
                            <div style="display:flex;align-items:center;">create group</div>
                        <img src="../assets/group_icon.png" alt="Profile Picture" class="profile-picturee ppppopppo"/>

                        </div>
                    </b-button>
                    
                

        </div>


        </div>

        <div class="iiiiiiiii">


            <div v-if="!empty" class="item">



                <img src="@/assets/avatar.png" alt="">
                <div class="texts" style="overflow:hidden">
                    <span style="  white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">Jane Doe</span>
                    <p  style="  white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">Hello</p>
                </div>


        <div style="flex:1;display:flex;justify-content:end;align-items:space-between;gap:50px">
        
                    <b-button  variant="success"  >
                    
                        <i class="bi bi-person-plus-fill" style="border-radius:;color:white; font-size: 2rem;"></i>


                    </b-button>

                    <div class="p">
                        Friend
                    </div>
                    <div class="xxp">
                        Pending
                    </div>


        </div>


            </div>



            <div class="ooll" v-if="!empty">
            <h3 style=" margin: 10px;
        padding: 10px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 1);">Empty List</h3>

            </div>


            
            


            
        </div>

 
  </div>


   <!-- Sliding List Modal -->
    <b-modal
      id="list-modal"
      size="lg"
      hide-footer
      v-model="groupformactive"
      @hidden="groupformactive = false"
      centered
      title="Create a New Group"
      class="slide-in"
    >
      <template #modal-title>
        List
      </template>

                <h2 class="mb-4 text-black font-weight-bold">Group Icon</h2>
                <b-form-group class="w-100">
              <label for="profile-picture-input" class="profile-picture-label">
                <img :src="profilePictureUrl || defaultProfilePicture" alt="Profile Picture" class="profile-picture ppppopppo"/>
                <span>Upload an image</span>
              </label>
              <input id="profile-picture-input" type="file" @change="onFileChange" accept="image/*" class="form-control-file " style="display:none;">
            </b-form-group>




                <h2 class="mb-4 text-black font-weight-bold">Group Name</h2>

                   <b-form-input
            style="w-100;text-align:center"
                v-model="groupname"
                type="search"
                placeholder="Group Name"
                class="search-input"
                @input="performSearch"
                    ></b-form-input>




                    <h2 class="mb-4 text-black font-weight-bold">Add Group Member</h2>

                    <div class="input-group mb-3">
                    <b-form-tags
                        input-id="tags-remove-on-delete"
                        :input-attrs="{ 'aria-describedby': 'tags-remove-on-delete-help' }"
                        v-model="groupMember"
                        :tag-validator="onTagState"
                        separator=" "
                        placeholder="Enter new username separated by space"
                        remove-on-delete
                        no-add-on-enter
                        class="search-input "
                    ></b-form-tags>
                    </div>
                    <b-form-text id="tags-remove-on-delete-help" class="mx-auto">
                    Press <kbd>Backspace</kbd> to remove the last username entered
                    </b-form-text>


                    
   <div>


    <div v-if="!empty" class="item">



        <img src="@/assets/avatar.png" alt="">
        <div class="texts" style="overflow:hidden">
            <span style="  white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">Jane Doe</span>
            <p  style="  white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">Hello</p>
        </div>


<div style="flex:1;display:flex;justify-content:end;align-items:space-between;gap:50px">
  
            <b-button  variant="success"  >
               
                <i class="bi bi-plus" style="border-radius:;color:white; font-size: 2rem;"></i>


            </b-button>

            

</div>


    </div>

    
    <div v-if="!empty" class="item">



        <img src="@/assets/avatar.png" alt="">
        <div class="texts" style="overflow:hidden">
            <span style="  white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">Jane Doe</span>
            <p  style="  white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">Hello</p>
        </div>


<div style="flex:1;display:flex;justify-content:end;align-items:space-between;gap:50px">
  
            <b-button  variant="success"  >
               
                <i class="bi bi-plus" style="border-radius:;color:white; font-size: 2rem;"></i>


            </b-button>

            

</div>


    </div>



   



   

     
    


    
  </div>











    </b-modal>





   

</template>

<script>


export default {
  data() {
    return {
      text: "",
      showDetail: false,
      empty:false,
      groupformactive:false,
      groupMember:[],
      groupname:"",
        profilePicture: null,
      profilePictureUrl: '',
      defaultProfilePicture: require('../assets/default_group.jpg') // Path to your default profile picture
    

    };
  },methods:{
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.profilePicture = file;
        this.profilePictureUrl = URL.createObjectURL(file);
      }
    }
  }
  
};
</script>

<style scoped>


 .profile-picture-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
.profile-picturee{
    width: 50px;
  height: 50px;
  object-fit: cover;

}

.iiiiiiiii{
  background-color: rgba(29, 43, 69, 0.666);

  flex: 1;
  overflow-y: scroll;
  margin-bottom: 5px;

}

.xxp{
     display: flex;
    align-items: center;
    justify-items: center;
    font-size: 25px;
      gap: 20px;
    background-color:red ;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 1);
    background-color: rgba(74, 92, 127, 0.75);
  backdrop-filter: blur(19px) saturate(180%);

}

.p {
    display: flex;
    align-items: center;
    justify-items: center;
    font-size: 25px;
      gap: 20px;
    background-color:red ;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 1);
    background-color: rgba(15, 53, 129, 0.75);
  backdrop-filter: blur(19px) saturate(180%);

}


.chat {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-left: 1px solid #dddddd35;
  border-right: 1px solid #dddddd35;
}

.ooll{
  gap: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


.search {
  gap: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.searchbar {
  display: flex;
  align-items: center;
  width: 100%;
}

.search-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.search-input {
  flex-grow: 1;
  padding: 10px;
  border: 2px solid #007BFF;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
}

.search-input::placeholder {
  color: #999999;
  opacity: 1;
  text-align: center;
}

.search-input:focus {
  border-color: #0056b3;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
}

.add-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
}



::-webkit-scrollbar {
  width: 5px; /* Width of the scrollbar */
  

}

::-webkit-scrollbar-track {
  background: transparent; /* Color of the track */
   
}

::-webkit-scrollbar-thumb {
  background-color: transparent; /* Color of the thumb */
  border-radius: 5px; /* Roundness of the thumb */
transition: background-color 0.1s ease; /* Smooth transition */

   
}

.iiiiiiiii:hover::-webkit-scrollbar-thumb {
  background-color: #888; /* Adjust as needed */

}



.search .searchbar{
    background-color: rgba(17, 25, 40, 0.5);
    gap: 20px;
    border-radius: 10px;

}

.search .searchbar input{
    background-color: transparent;
    border: none;
    outline: none;
    color: white;
    flex: 1;
}

.searchbar img{
   width: 20px;
   height: 20px;
}



.item{
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
    border-bottom: 1px solid #dddddd35;

}

.item img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;

}

.texts{
    display: flex;
    flex-direction: column;
    gap: 10px;
    
}

.texts span{
    font-size: 500; 
}

.texts p{
    font-size: 14px;
    font-weight: 300; 
}


</style>
