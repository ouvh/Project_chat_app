<template>
    <div v-if="chatdata !== null && chatdata.id !== null" class="detail">
        <div class="user" style="overflow:hidden">

             <img v-if="chatdata.type==='discussion'" :src="chatdata.friend.profileImageUrl" alt="">
            <img v-if="chatdata.type==='group'" :src="chatdata.groupicon" alt="">

            <h2 v-if="chatdata.type==='discussion'">{{chatdata.friend.username}}</h2>
            <h2 v-if="chatdata.type==='group'">{{chatdata.groupname}}</h2>

            <p v-if="chatdata.type==='discussion'">{{chatdata.friend.description}}</p>
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


                    <div :key="index" v-for="image,index in filteredimages" class="photoitem">

                        <div class="photodetail">
                            <img :src="image.content" alt="">
                            <span>{{image.filename}}</span>

                        </div>

                        
                        <img @click="downloadFile(image.content)" class="icon" src="../../../public/assets/download.png" alt="">

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
                                    
                                    <div :key="index" v-for="file,index in filteredfiles" class="photos">
                                        <div class="photoitem">
                                            <div class="photodetail">
                                                <img src="../../assets/file.png" alt="">
                                                <span>f{{file.filename}}</span>
                                            </div>
                                        
                                            <img  @click="downloadFile(file.content)"  class="icon" src="../../../public/assets/download.png" alt="">
                                        </div>
                                    </div>



                                    
                                </b-collapse>
            </div>

            <button v-if="this.chatdata.type !== 'group'" @click="removefriend" class="block-button">Remove User</button>
            <button v-if="this.chatdata.type === 'group'" @click="quitGroup" class="block-button">Quit Group</button>





        </div>
    </div>

        <loadingPage v-if="loading" :progress="progr"/>

</template>

<script>

import { auth, firestore, storage } from '@/firebase/Config';
import { createUserWithEmailAndPassword ,sendPasswordResetEmail } from 'firebase/auth';
import { doc, updateDoc,setDoc ,collection,query,orderBy,getDocs,getDoc,where,limit,onSnapshot,getCountFromServer,arrayRemove,arrayUnion, Timestamp,addDoc,deleteDoc} from 'firebase/firestore';
import { ref, uploadBytes,listAll ,getDownloadURL ,deleteObject} from 'firebase/storage';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import loadingPage from '@/components/layout/loadingPage.vue';



export default {
    props:['data','mess'],
    components:{loadingPage},
    data(){
        return ({
            chatdata:{id:null},
            messages:[],
            loading:false,
            progr:0
        })
    },
    methods:{
        fetch(){
            if(this.data){
                    if(this.data.id !== null){
                this.chatdata = {...this.data}
                this.messages = this.mess
                }
            }
        },
        async removefriend(){
            try{
                    this.loading = true
                    this.progr = 5
                    const ChatDocRef = doc(firestore, "chats", this.chatdata.id);
                    const messagesCollectionRef = collection(ChatDocRef, 'message');

                    const UserDocRef = doc(firestore, "users", auth.currentUser.uid);
                    const friendDocRef = doc(firestore, "users", this.chatdata.friend.id);

                  



                    await updateDoc(friendDocRef, {
                        friends: arrayRemove(auth.currentUser.uid)
                    });

                     await updateDoc(UserDocRef, {
                        friends: arrayRemove(this.chatdata.friend.id)
                    });

                    await updateDoc(friendDocRef, {
                        chats: arrayRemove(this.chatdata.id)
                    });

                     await updateDoc(UserDocRef, {
                        chats: arrayRemove(this.chatdata.id)
                    });


                    this.progr = 50;



                      if([...this.filteredfiles,...this.filteredimages].length !== 0){


                            const dirRef = ref(storage, `chats/${this.chatdata.id}/`);

                            const listResults = await listAll(dirRef);

                            // Delete all files in the directory
                            const deletePromises = listResults.items.map((itemRef) => deleteObject(itemRef));
                            await Promise.all(deletePromises);
                    
                    
                    }


                    
                    this.progr = 80;
     





                    const subcollectionSnapshot = await getDocs(messagesCollectionRef);

                    const deletePromises = subcollectionSnapshot.docs.map((docSnapshot) => deleteDoc(docSnapshot.ref));
                    await Promise.all(deletePromises);


                    await deleteDoc(ChatDocRef);

                    this.progr = 90;


                    this.$router.push('/')
                    Toastify({
                    text: "Friend Removed from your list",
                    duration: 3000,
                    close: true,
                    gravity: "bottom", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    backgroundColor: "orange",
                    }).showToast();









            }catch(error){
                Toastify({
              text: "Something went Wrong",
              duration: 3000,
              close: true,
              gravity: "bottom", // `top` or `bottom`
              position: "right", // `left`, `center` or `right`
              backgroundColor: "red",
            }).showToast();

            }


        
        }
        ,downloadFile(url) {
       window.open(url, '_blank');
      
    },async quitGroup(){
          try{

                    if(this.chatdata.senders.length ===1){
                        this.loading = true
                        this.progr = 20



                        const UserDocRef = doc(firestore, "users", auth.currentUser.uid);

                        await updateDoc(UserDocRef, {
                        chats: arrayRemove(this.chatdata.id)
                        });

                        this.progr = 50;
                        
                      if([...this.filteredfiles,...this.filteredimages].length !== 0){


                            const dirRef = ref(storage, `chats/${this.chatdata.id}/`);

                            const listResults = await listAll(dirRef);

                            // Delete all files in the directory
                            const deletePromises = listResults.items.map((itemRef) => deleteObject(itemRef));
                            await Promise.all(deletePromises);
                    
                    
                    }

                             const ddirRef = ref(storage, `group/${this.chatdata.id}/`);

                            const llistResults = await listAll(ddirRef);

                            // Delete all files in the directory
                            const ddeletePromises = llistResults.items.map((itemRef) => deleteObject(itemRef));
                            await Promise.all(ddeletePromises);
                    
                    
                    
                    



                    
                    this.progr = 80;
     

                    const ChatDocRef = doc(firestore, "chats", this.chatdata.id);
                    const messagesCollectionRef = collection(ChatDocRef, 'message');



                    const subcollectionSnapshot = await getDocs(messagesCollectionRef);

                    const deletePromises = subcollectionSnapshot.docs.map((docSnapshot) => deleteDoc(docSnapshot.ref));
                    await Promise.all(deletePromises);


                    await deleteDoc(ChatDocRef);

                    this.progr = 90;


                    this.$router.push('/')
                    Toastify({
                    text: "Friend Removed from your list",
                    duration: 3000,
                    close: true,
                    gravity: "bottom", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    backgroundColor: "orange",
                    }).showToast();








                    }
                    else{
                    this.loading = true
                    this.progr = 5
                    const cChatDocRef = doc(firestore, "chats", this.chatdata.id);
                    const mmessagesCollectionRef = collection(cChatDocRef, 'message');
                    const UserDocRef = doc(firestore, "users", auth.currentUser.uid);
                    const ChatDocRef = doc(firestore, "chats", this.chatdata.id);


                    const temp = await getDoc(UserDocRef);
                    const i = temp.data().username


                    await addDoc(mmessagesCollectionRef,{
                    author:auth.currentUser.uid,
                    type:'text',
                    senttime:Timestamp.now(),
                    filename:'',
                    content:`${i} has left the Group`,
                    unread:true,
                    readby:[]
                    });



                    
                    await updateDoc(ChatDocRef, {
                        senders: arrayRemove(auth.currentUser.uid)
                    });

                    await updateDoc(UserDocRef, {
                        chats: arrayRemove(this.chatdata.id)
                    });
                     this.progr = 90;


                    this.$router.push('/')
                    Toastify({
                    text: "Friend Removed from your list",
                    duration: 3000,
                    close: true,
                    gravity: "bottom", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    backgroundColor: "orange",
                    }).showToast();



                    }


                  








            }catch(error){
                Toastify({
              text: "Something went Wrong",
              duration: 3000,
              close: true,
              gravity: "bottom", // `top` or `bottom`
              position: "right", // `left`, `center` or `right`
              backgroundColor: "red",
            }).showToast();

            }


    }

    },
    
  watch: {
    'data': {
      handler: 'fetch',
      immediate: true
    },
    'mess':{
        handler:'fetch',
        immediate:true
    }
  },computed:{
    filteredfiles() {
      // Check if data.id is not null and filter messages based on type
      if (this.data.id !== null) {
        // Example filter: Only include messages with type 'image' or 'file'
        return this.messages.filter(message => message.type === 'file');
      }
      return [];
    },
    filteredimages() {
      // Check if data.id is not null and filter messages based on type
      if (this.data.id !== null) {
        // Example filter: Only include messages with type 'image' or 'file'
        return this.messages.filter(message => message.type === 'image' );
      }
      return [];
    },


  }


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