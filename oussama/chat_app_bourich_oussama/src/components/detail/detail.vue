<template>
    <div class="detail">
        <div class="user">

            <img src="../../../public/assets/avatar.png" alt="">
            <h2>Jane Doe</h2>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>


        <div class="info">

            <div class="option">
                <div class="title">
                    <span>Chat Setting</span>
                    <img src="../../../public/assets/arrowUp.png" alt="">
                </div>
            </div>


            <div class="option">
                <div class="title">
                    <span>Privacy % help</span>
                    <img src="../../../public/assets/arrowUp.png" alt="">
                </div>
            </div>


            <div class="option">
                <div class="title">
                    <span>Shared Photos</span>
                    <img src="../../../public/assets/arrowDown.png" alt="">
                </div>


                <div class="photos">


                    <div class="photoitem">

                        <div class="photodetail">
                            <img src="https://th.bing.com/th/id/OIP.JPllmkWBqX_ALvUO_DAnZwHaE7?rs=1&pid=ImgDetMain" alt="">
                            <span>photo_2024_2.png</span>

                        </div>

                        
                        <img class="icon" src="../../../public/assets/download.png" alt="">

                    </div>
                    
                    <div class="photoitem">

                        <div class="photodetail">
                            <img src="https://th.bing.com/th/id/OIP.JPllmkWBqX_ALvUO_DAnZwHaE7?rs=1&pid=ImgDetMain" alt="">
                            <span>photo_2024_2.png</span>

                        </div>

                        
                        <img class="icon" src="../../../public/assets/download.png" alt="">

                    </div>

                    
                    <div class="photoitem">

                        <div class="photodetail">
                            <img src="https://th.bing.com/th/id/OIP.JPllmkWBqX_ALvUO_DAnZwHaE7?rs=1&pid=ImgDetMain" alt="">
                            <span>photo_2024_2.png</span>

                        </div>

                        
                        <img class="icon" src="../../../public/assets/download.png" alt="">

                    </div>


                    <div class="photoitem">

                        <div class="photodetail">
                            <img src="https://th.bing.com/th/id/OIP.JPllmkWBqX_ALvUO_DAnZwHaE7?rs=1&pid=ImgDetMain" alt="">
                            <span>photo_2024_2.png</span>

                        </div>

                        
                        <img class="icon" src="../../../public/assets/download.png" alt="">

                    </div>


                    <div class="photoitem">

                        <div class="photodetail">
                            <img src="https://th.bing.com/th/id/OIP.JPllmkWBqX_ALvUO_DAnZwHaE7?rs=1&pid=ImgDetMain" alt="">
                            <span>photo_2024_2.png</span>

                        </div>

                        
                        <img class="icon" src="../../../public/assets/download.png" alt="">

                    </div>







                </div>
            </div>



            <div class="option">
                <div class="title">
                    <span>Shared Files</span>
                    <img src="../../../public/assets/arrowUp.png" alt="">
                </div>
            </div>

            <button>Block User</button>



















        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.detail{
    flex: 1;
}


.user{
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border-bottom: 1px solid #dddddd35;

}

.user img{
    width: 100px;
    height: 100px;
    border-radius:50% ;
    object-fit: cover;
}

.info{
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.option{


    
}

.title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    
}

.title img{
    width: 30px;
    height: 30px;
    background-color: rgba(17, 25, 40, 0.3);
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
}

.photos{
    display: flex;
    flex-direction: column;
    gap: 20px;

}

.photoitem{
    display: flex;
    align-items: center;
    justify-content: space-between;


}

.photodetail{
    display: flex;
    align-items: center;
    gap: 20px;

}

.photodetail img{
    width: 40px;
    height: 40px;
    border-radius: 5px;
    object-fit: cover;
    
}
.photodetail span{
    font-size: 14px;
    color: lightgray;
    font-weight: 300;
    
}

.icon{
    width: 30px;
    height: 30px;
    padding: 10px;
    background-color:rgba(17, 25, 40, 0.3) ;
    border-radius: 10%;
    cursor: pointer;

}

</style>