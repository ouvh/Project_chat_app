<template>
  <div class="chat">
    
 
    <div class="center">
                <i class="bi bi-chat" style=" cursor:pointer;font-size: 9rem;"></i>

        <h1>Welcome to chatFlow</h1>
        <h5>Start you first discussion. No friend, no worries, add as many as you want</h5>
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
      showDetail: false

    };
  },
  
};
</script>

<style scoped>






.chat {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-left: 1px solid #dddddd35;
  border-right: 1px solid #dddddd35;
}


.search {
  gap: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 600px;
  margin: 20px auto;
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

.chatlist:hover::-webkit-scrollbar-thumb {
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
    cursor: pointer;
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
