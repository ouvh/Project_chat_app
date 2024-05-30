<template>

    <div class="detail">
        <div class="user" style="overflow:hidden">

            <img src="../../../public/assets/avatar.png" alt="">
            <h2>Jane Doe</h2>
            <p>Lorem ip neoifnwoinoinoinoinoinoinoinsumneoifnwoinoinoinoin dolor sit amet.</p>
        </div>


        <div class="info">

                        
            <div v-if="false">
                
                    <b-row class="row" >
                        <b-col lg="10" cols="9">
    
                            <h5>Chat Settings</h5>
                        </b-col>
    
                        <b-col lg="2" cols="3"  >
                            <b-navbar toggleable="0%" type="white" style="">
                                <b-navbar-toggle target="detail-settings">
                                    <template #default="{ expanded }">
                                        <i v-if="expanded"  class="bi bi-chevron-bar-up" style="color:black; font-size: 1.8rem;"></i>
                                        <i v-if="!expanded" class="bi bi-chevron-bar-down" style="color:black; font-size: 1.8rem;"></i>
                                    </template>
                                </b-navbar-toggle>
                            </b-navbar>
                        </b-col>
    
                    </b-row>
                
                
                                <b-collapse id="detail-settings" is-nav class="items">
                                    <b-navbar-nav  class="navbar">
                                    <b-nav-item  class="items"  to="/">Home</b-nav-item>
                                    <b-nav-item class="items"  to="/settings">Profile</b-nav-item>
                                    <b-nav-item class="logout items" style="width:100%;text-align:center;border-radius:10px"   to="/settings">Logout</b-nav-item>
                                    </b-navbar-nav>
                                </b-collapse>
            </div>


                    
            <div v-if="false">
                
                                <b-row class="row" >
                                    <b-col lg="10" cols="9">
                
                                        <h5>Privacy & help</h5>
                                    </b-col>
                
                                    <b-col lg="2" cols="3"  >
                                        <b-navbar toggleable="0%" type="white" style="">
                                            <b-navbar-toggle target="detail-privacy">
                                                <template #default="{ expanded }">
                                                    <i v-if="expanded"  class="bi bi-chevron-bar-up" style="color:black; font-size: 1.8rem;"></i>
                                                    <i v-if="!expanded" class="bi bi-chevron-bar-down" style="color:black; font-size: 1.8rem;"></i>
                                                </template>
                                            </b-navbar-toggle>
                                        </b-navbar>
                                    </b-col>
                
                                </b-row>
                
                
                                <b-collapse id="detail-privacy" is-nav class="items">
                                    <b-navbar-nav  class="navbar">
                                    <b-nav-item  class="items"  to="/">Home</b-nav-item>
                                    <b-nav-item class="items"  to="/settings">Profile</b-nav-item>
                                    <b-nav-item class="logout items" style="width:100%;text-align:center;border-radius:10px"   to="/settings">Logout</b-nav-item>
                                    </b-navbar-nav>
                                </b-collapse>
            </div>

      
                    
            <div>
                
                                <b-row class="row" >
                                    <b-col lg="10" cols="9">
                
                                        <h5>Shared Photos</h5>
                                    </b-col>
                
                                    <b-col lg="2" cols="3"  >
                                        <b-navbar toggleable="0%" type="white" style="">
                                            <b-navbar-toggle target="detail-photo">
                                                <template #default="{ expanded }">
                                                    <i v-if="expanded"  class="bi bi-chevron-bar-up" style="color:black; font-size: 1.8rem;"></i>
                                                    <i v-if="!expanded" class="bi bi-chevron-bar-down" style="color:black; font-size: 1.8rem;"></i>
                                                </template>
                                            </b-navbar-toggle>
                                        </b-navbar>
                                    </b-col>
                
                                </b-row>
                
                
                                <b-collapse id="detail-photo" is-nav class="items">
                                    <div class="photos">


                    <div class="photoitem">

                        <div class="photodetail">
                            <img src="https://th.bing.com/th/id/OIP.JPllmkWBqX_ALvUO_DAnZwHaE7?rs=1&pid=ImgDetMain" alt="">
                            <span>photo_2iwefoimwefoimweofmweofimweofimweofimwefimeofimweofimwefimeofimweofimwefimeofimweofimwefimeofimweofimwefimweofmweofmweofimweofimomoiwmefoiwme024_2.png</span>

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
                                    
                                </b-collapse>
            </div>


                   
            <div>
                
                                <b-row class="row" >
                                    <b-col lg="10" cols="9">
                
                                        <h5>Shared Files</h5>
                                    </b-col>
                
                                    <b-col lg="2" cols="3"  >
                                        <b-navbar toggleable="0%" type="white" style="">
                                            <b-navbar-toggle target="detail-files">
                                                <template #default="{ expanded }">
                                                    <i v-if="expanded"  class="bi bi-chevron-bar-up" style="color:black; font-size: 1.8rem;"></i>
                                                    <i v-if="!expanded" class="bi bi-chevron-bar-down" style="color:black; font-size: 1.8rem;"></i>
                                                </template>
                                            </b-navbar-toggle>
                                        </b-navbar>
                                    </b-col>
                
                                </b-row>
                
                
                                <b-collapse id="detail-files" is-nav class="items ">
                                    
                                    <div class="photos">
                                        <div class="photoitem">
                                            <div class="photodetail">
                                                <img src="../../assets/file.png" alt="">
                                                <span>photo_2iwefoimiwme024_2.png</span>
                                            </div>
                                        
                                            <img class="icon" src="../../../public/assets/download.png" alt="">
                                        </div>
                                    </div>
                                    
                                </b-collapse>
            </div>

            <button class="block-button">Block User</button>




        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.detail{
      width: 100%;

}

.row{
    border-top:black  1px solid;
    display: flex;
    justify-content: center;
    align-items: center;

}

.option{ 
    border-top:black  1px solid;
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
    max-height: 150px;
    overflow-y:scroll ;
    color: black;

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

.photos:hover::-webkit-scrollbar-thumb {
  background-color: #888; /* Adjust as needed */

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
    color: black;
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

.block-button{
    border: black solid 1px;
    border-radius: 10px;
    padding: 5px;
     background-color: rgb(188, 23, 23);
    transition: all ease-in 0.2s;
    color: white;

}



.block-button:hover{
  background-color: rgb(122, 14, 14);

}


</style>