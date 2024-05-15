<template>
<div class="chatlist">

    <div class="search">
        <div class="searchbar">
            <img src="../../../../public/assets/search.png" alt="">
            <input type="text" name="" id="" placeholder="Search">
        </div>
        <img @click="addMode = !addMode" :src="addMode ? first : second" alt="" class="add">

    </div>

    <div class="item">
        <img src="../../../../public/assets/avatar.png" alt="">
        <div class="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
        </div>
    </div>

    <div class="item">
        <img src="../../../../public/assets/avatar.png" alt="">
        <div class="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
        </div>
    </div>

    <div class="item">
        <img src="../../../../public/assets/avatar.png" alt="">
        <div class="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
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


.chatlist{
    flex: 1;
    overflow: auto;
    
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

.search{
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
}

.search .searchbar{
    flex: 1;
    background-color: rgba(17, 25, 40, 0.5);
    display: flex;
    align-items: center;
    gap: 20px;
    border-radius: 10px;
    padding: 10px;


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

.add{
    width: 20px;
    height: 20px;
    background-color: rgba(17, 25, 40, 0.5);
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;

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