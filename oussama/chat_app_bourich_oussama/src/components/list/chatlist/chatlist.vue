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


</style>