<template>
  <div class="chat">

   
    <div class="search">
    <div class="searchbar">
      <b-form-input
      style="w-100"
        v-model="searchQuery"
        type="search"
        placeholder="Search"
        class="search-input"
        @input="performSearch"
      ></b-form-input>


    </div>
        <i v-if="!expanded"  class="bi bi-search" style="color:white; font-size: 1.8rem;"></i>

  </div>

   <div class="iiiiiiiii">


    <div v-if="empty" class="item">
        <img src="@/assets/avatar.png" alt="">
        <div class="texts" style="overflow:hidden">
            <span style="  white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">Jane Doe</span>
            <p  style="  white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">Hello</p>
        </div>
<div style="flex:1;display:flex;justify-content:end;align-items:space-between;gap:50px">
  
            <b-button  variant="success"  >
                <i class="bi bi-check-lg" style="border-radius:;color:white; font-size: 2rem;"></i>
            </b-button>
             <b-button  variant="danger"  >
                <i   class="bi bi-x-lg" style="color:white; font-size: 1.8rem;"></i>
            </b-button>
</div>


    </div>



    <div class="ooll" v-if="!empty">
      <h3 style=" margin: 10px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 1);">No Invitations Received</h3>

    </div>

     
     

    

    





    
  </div>

 
  </div>

 

   
  

   

  
    <!-- Sliding Detail Modal -->
    <b-modal
      id="detail-modal"
      size="lg"
      hide-footer
      v-model="showDetail"
      @hidden="showDetail = false"
      centered
      class="slide-in"


    >
      <template #modal-title>
        Detail
      </template>
      <detail />
    </b-modal>

    
</template>

<script>
import detail from "@/components/detail/detail.vue"

export default {
  components:{detail},
  data() {
    return {
      text: "",
      showDetail: false,
      empty:false

    };
  },
  
};
</script>

<style scoped>

.iiiiiiiii{
  background-color: rgba(29, 43, 69, 0.666);

  flex: 1;
  overflow-y: scroll;
  margin-bottom: 5px;

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
