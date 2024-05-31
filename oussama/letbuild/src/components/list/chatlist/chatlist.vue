<template>
<div class="chatlist">

     <div class="search">
    <div class="searchbar">
      <b-form-input
        v-model="searchQuery"
        type="search"
        placeholder="Search"
        class="search-input"
        @input="performSearch"
      ></b-form-input>
            <img style="cursor:pointer" src="../../../../public/assets/search.png" alt="Search Icon" class="search-icon">

    </div>

    <div class="oooooooooo" @click="addMode = !addMode"          v-b-tooltip.hover title="Add new user or create new group">
      <img
        @click="addMode = !addMode"
        :src="second"
        alt="Add Icon"
        class="add-icon"
         v-b-tooltip.hover title="Add new user or create new group"
      >
    </div>
  </div>

    <div class="item">
        <img src="../../../../public/assets/avatar.png" alt="">
        <div class="texts" style="overflow:hidden">
            <span style="  white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">Jane Doe</span>
            <p  style="  white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">Hello</p>
        </div>
    </div>

    
</div>
  
</template>

<script>
export default {
    data(){
        return{
            addMode:false,
            first:require("../../../../public/assets/minus.png"),
            second:require("../../../../public/assets/plus.png")
        }
    }

}
</script>

<style scoped>
.oooooooooo{
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  padding: 10px;
  border-radius: 7px;
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