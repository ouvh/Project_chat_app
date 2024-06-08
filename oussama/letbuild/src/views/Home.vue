<template>

    <b-row class="d-xl-none mb-3">
      
      

      
      
      

       
      <b-row style="display:flex;flex-direction:column">
        
   
      <b-col v-b-tooltip.hover title="show contacts list" style="cursor:pointer;margin-right:15px;margin-left:20px;margin-top:20px">
            <i @click="showList = true"  class="bi bi-chat-fill" style=" font-size: 1.8rem;"></i>
      </b-col>
      
    </b-row>
      
      
    </b-row>


    <b-row style="height: 90vh;width:100%">
      <b-col cols="3" class="animated-flex d-none d-xl-block"> 
        <list :chats="chats" :profileimagelink="user.profileImageUrl" :username="user.username" />
      </b-col>
      <b-col cols="12" xl="9" class="ooo">    
        <welcomePage/>
      </b-col>
     
    </b-row>




    <!-- Sliding List Modal -->
    <b-modal
      id="list-modal"
      size="lg"
      hide-footer
      v-model="showList"
      @hidden="resetModal"
      centered
      class="slide-in"
    >
      <template #modal-title>
        List
      </template>
      <listmodal :chats="chats" :profileimagelink="user.profileImageUrl" :username="user.username" />
    </b-modal>

    
</template>

<script>
import chat from "../components/chat/chat.vue";
import list from "../components/list/list.vue";
import detail from "../components/detail/detail.vue";
import listmodal from "../components/modals/listmodal.vue"
import welcomePage from '@/components/layout/welcomePage.vue';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import { auth, firestore, storage } from '@/firebase/Config';
import { createUserWithEmailAndPassword ,sendPasswordResetEmail } from 'firebase/auth';
import { doc, setDoc ,collection,query,getDocs,getDoc,where} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL ,deleteObject} from 'firebase/storage';
import loadingPage from '@/components/layout/loadingPage.vue';

export default {
  components: { chat, list, detail ,listmodal,welcomePage },
  async created(){

     try{
        const userDocRef = doc(firestore, 'users', auth.currentUser.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          this.user = userDoc.data();          
        } else {
           Toastify({
            text: "Something went Wrong",
            duration: 3000,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            backgroundColor: "red",
          }).showToast();
          
        }
        if (this.user.chats.length !== 0){
          const chatsQuery = query(collection(firestore, 'chats'), where('__name__', 'in', this.user.chats));

          const chatDocsSnapshot = await getDocs(chatsQuery);

            const chats = [];
            chatDocsSnapshot.forEach(async (doc) => {

              const chat = {
                id: doc.id,
                data: doc.data()
              }
              let friend;
              if (chat.type === 'discussion'){

                if (chat.senders[0] === auth.currentUser.uid){
                   friend = chat.senders[1];
                }
                else{
                   friend = chat.senders[0];
                }

                  const userDocRef = doc(firestore, 'users',friend);
                  const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                  friend = userDoc.data();          
                } else {
                  Toastify({
                    text: "Something went Wrong",
                    duration: 3000,
                    close: true,
                    gravity: "bottom", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    backgroundColor: "red",
                  }).showToast();
              
                     }
              
                chats.push({...chat,friendusername:friend.username,friendpic:friend.profileImageUrl})
                  

              }
              else{
                chats.push(chat)
              }
      
            });

            this.chats = chats;
            console.log(chats)
          }
        


      }catch (error){
         Toastify({
            text: error.message,
            duration: 3000,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            backgroundColor: "red",
          }).showToast();
          this.$router.push('/');
      }
    

    

    














  },
  data() {
    return {
      user:{username:'error',profileImageUrl:null},
      chats:[],
      loading:false,
      showList: false,
      showDetail: false
    };
  },
  computed: {
    isMediumAndUp() {
      return window.innerWidth >= 768;
    }
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      if (this.isMediumAndUp) {
        this.showList = false;
        this.showDetail = false;
      }
    },
    resetModal() {
      if (this.isMediumAndUp) {
        this.showList = false;
        this.showDetail = false;
      }
    }
  }

}
</script>

<style>

</style>