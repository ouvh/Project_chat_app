<template>
<div class="userinfo">
    <div class="user">
        <img src="../../../../public/assets/avatar.png" alt="" srcset="">
        <h2>John Doe</h2>
    </div>


    <div class="icons">
        <img src="../../../../public/assets/more.png" alt="" srcset="">
        <img src="../../../../public/assets/video.png" alt="" srcset="">
        <img src="../../../../public/assets/edit.png" alt="" srcset="">

    </div>

</div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
.userinfo{
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

}

.user{
    display: flex;
    align-items: center;
    gap: 20px;
   

}

.user img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover ;

}


.icons{
    display: flex;
    gap: 20px;
}

.icons img {
    width: 20px;
    height: 20px;
    cursor: pointer;
}
</style>