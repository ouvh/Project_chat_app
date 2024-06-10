<template>

    <b-row v-if="doneloading" class="d-xl-none mb-3">
      
      

      
      
      

       
      <b-row style="display:flex;flex-direction:column">
        
      
      <b-col v-b-tooltip.hover title="Show contact details and shared files" id="image" style="cursor:pointer;flex-grow:0;margin-right:15px;margin-left:20px;margin-top:20px">
            <i @click="showDetail = true" class="bi bi-image" style=" font-size: 1.8rem;"></i>
      </b-col>
      <b-col v-b-tooltip.hover title="show contacts list" style="cursor:pointer;margin-right:15px;margin-left:20px;margin-top:20px">
            <i @click="showList = true"  class="bi bi-chat-fill" style=" font-size: 1.8rem;"></i>
      </b-col>
      
    </b-row>
      
      
    </b-row>


    <b-row v-if="doneloading" style="height: 90vh;width:100%">
      <b-col cols="3" class="animated-flex d-none d-xl-block"> 
        <list :chats="chats" :profileimagelink="user.profileImageUrl" :username="user.username" />
      </b-col>
      <b-col cols="12" xl="9" class="ooo">    
        <chat :chatdata="chatdata" :messages="messages" />

      </b-col>
     
    </b-row>

    <loadingPage v-if="loading" :progress="progr"/>



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
      <listmodal :chats="chats" :profileimagelink="user.profileImageUrl" :username="user.username"  />
    </b-modal>

    <!-- Sliding Detail Modal -->
    <b-modal
      id="detail-modal"
      size="lg"
      hide-footer
      v-model="showDetail"
      @hidden="resetModal"
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
import chat from "../components/chat/chat.vue";
import list from "../components/list/list.vue";
import listmodal from "../components/modals/listmodal.vue"
import detail from "@/components/detail/detail.vue"
import loadingPage from '@/components/layout/loadingPage.vue';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import { auth, firestore, storage } from '@/firebase/Config';
import { createUserWithEmailAndPassword ,sendPasswordResetEmail } from 'firebase/auth';
import { doc, setDoc ,collection,query,orderBy,getDocs,getDoc,where,limit,onSnapshot,getCountFromServer} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL ,deleteObject} from 'firebase/storage';




export default {
  props:['chatid'],
  components: { chat, list, detail ,listmodal,loadingPage},
  async created(){

    await this.fetch()


  },
  data() {
    return {
      user:{username:'error',profileImageUrl:null,chats:[]},
      chats:[],
      messages:[],
      loading:true,
      showList: false,
      showDetail: false,
      doneloading:true,
      progr:0,
      chatdata:{type:null},
    };
  },
  computed: {
    isMediumAndUp() {
      return window.innerWidth >= 768;
    }
  },
  async mounted() {
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
    },
    async fetch(){
        const userDocRef = doc(firestore, 'users', auth.currentUser.uid);

        onSnapshot(userDocRef, (snapshot) => {

          if (snapshot.exists()) {
          const temp = snapshot.data(); 
          this.user.username = temp.username;
          this.user.profileImageUrl = temp.profileImageUrl;
          this.user.chats = temp.chats;
          this.fetchdata(temp)

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


         })
        
       
    },
    async fetchdata(user){
      if (user.chats.length !== 0){

          const chatsQuery = query(collection(firestore, 'chats'), where('__name__', 'in', user.chats));

          onSnapshot(chatsQuery, (snapshot) => {
            this.chats = [];


            snapshot.forEach(async (DOC) => {
              
                const chat = {
                  id: DOC.id,
                  ...DOC.data()
                }

                let friend;
                let friendid;
                if (chat.senders[0] === auth.currentUser.uid){
                   friendid = chat.senders[1];
                }
                else{
                   friendid = chat.senders[0];
                }
                const chatDocRef = doc(firestore, 'chats', chat.id);
                const messagesCollectionRef = collection(chatDocRef, 'message');
                const messagesQuery = query(messagesCollectionRef, orderBy('senttime', 'desc'), limit(1));

                onSnapshot(messagesQuery, async (snapshot) => {

                              const querySnapshot = snapshot;
                              let content;
                              let time;
                              let unreadmessages;

                              const unreadMessagesQuery = query(messagesCollectionRef, where('unread', '==', true),where('author','!=',auth.currentUser.uid));
                              const temp = await getCountFromServer(unreadMessagesQuery);
                              unreadmessages = temp.data().count;




                  

                              if (chat.type === 'discussion'){

                                  const userDocRef = doc(firestore, 'users',friendid);
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

                                if (!querySnapshot.empty) {
                                // There is at least one message in the subcollection
                                const lastMessageDoc = querySnapshot.docs[0];
                                const lastMessageData = lastMessageDoc.data();
                                if (lastMessageData.type === 'text'){
                                  content = lastMessageData.content;
                                  time = lastMessageData.senttime;
                                }
                                else if(lastMessageData.type === 'image'){
                                  content = 'Image Sent';
                                  time = lastMessageData.senttime;

                                }
                                else{
                                  content = 'document Sent';
                                  time = lastMessageData.senttime;

                                }
                                
                              } else {
                                  content = 'Invitation Accepted';
                                  time = chat.createdat;
                              }


                                this.updater({...chat,friendusername:friend.username,friendpic:friend.profileImageUrl,content,time,unreadmessages})
                                  

                              }else{
                        
                               

                                if (!querySnapshot.empty) {
                                // There is at least one message in the subcollection
                                const lastMessageDoc = querySnapshot.docs[0];
                                const lastMessageData = lastMessageDoc.data();
                                if (lastMessageData.type === 'text'){
                                  content = lastMessageData.content;
                                  time = lastMessageData.senttime;
                                }
                                else if(lastMessageData.type === 'image'){
                                  content = 'Image Sent';
                                  time = lastMessageData.senttime;

                                }
                                else{
                                  content = 'document Sent';
                                  time = lastMessageData.senttime;

                                }
                                
                                } else {
                                  content = 'Invitation Accepted';
                                  time = chat.createdat;
                                }

                                this.updater({...chat,time,content,unreadmessages})
                              }




                })

            });


           })

          this.loading = false;

        }
        else{
          this.loading = false;
        }


    }
    ,
    updater(data){
      const index = this.chats.findIndex(obj => obj.id === data.id);

      if(index === -1){
        this.chats.push(data)
      }
      else{
        this.chats[index] = data;
      }
      this.chats = [...this.chats].sort((a, b) => b.time.seconds - a.time.seconds);


    },
    async fetchchat(){
      this.loading = true
      this.messages = []
      try{
          const ChatDocRef = doc(firestore, "chats", this.chatid);
          const messagesCollectionRef = collection(ChatDocRef, 'message');
          const messagesQuery = query(messagesCollectionRef, orderBy('senttime', 'asc'));
          
        onSnapshot(ChatDocRef, async (docSnapshot) => {

        if (docSnapshot.exists()) {
          const chatData = docSnapshot.data();
          chatData.id = docSnapshot.id;

         
      

                  

        if (chatData.type === 'discussion'){
                
            let friend;
            let friendid;
            if (chatData.senders[0] === auth.currentUser.uid){
                friendid = chatData.senders[1];
            }
            else{
                friendid = chatData.senders[0];
            }


            const userDocRef = doc(firestore, 'users',friendid);
            const userDoc = await getDoc(userDocRef);

            if (userDoc.exists()) {
              friend = {...userDoc.data(),id:userDoc.id};         
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
            
          chatData.friend = friend;
          this.chatdata = chatData;
          this.loading = false



                          



        }else{
          this.chatdata = chatData;
          this.loading = false



        }






        }else{
        Toastify({
                text: "Something went Wrong",
                duration: 3000,
                close: true,
                gravity: "bottom",
                position: "right",
                backgroundColor: "red",
        }).showToast();
        this.$router.push('/')
        
        
        }
        


        

        })
          


       onSnapshot(messagesQuery, (snapshot) => {
          console.log("hi")

          snapshot.docChanges().forEach(async change => {
            if (change.type === "added") {
              const message = change.doc.data();
              message.id = change.doc.id;
            if(message.author !== auth.currentUser.uid){


                const userDocRef = doc(firestore, 'users',message.author);
              const userDoc = await getDoc(userDocRef);
              const temp = {...userDoc.data()}
              message.profileImageUrl =  temp.profileImageUrl;

              this.messages.push(message)
              this.messages = [...this.messages].sort((a, b) => a.senttime.seconds - b.senttime.seconds);


            }
            else{
                this.messages.push(message)

            }
          
            }
          });


      });



      }catch(error){
         Toastify({
                text: "Something went Wrong",
                duration: 3000,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                backgroundColor: "red",
              }).showToast();
          this.$router.push('/');
      }

    }
  },watch: {
    'chatid': {
      handler: 'fetchchat',
      immediate: true
    }
  }

}
</script>

<style>

</style>