<template>
  <div class="chat">
    
    <div class="top">
      <div class="user">
        <img src="../../../public/assets/avatar.png" alt="">
        <div class="texts">
          <span>Jan Doe</span>
          <p>Lorem ipsum dolor, sit amet</p>
        </div>
      </div>
      <div class="icons">
        <img @click="showDetail = true" src="../../../public/assets/info.png" alt="info">
      </div>
    </div>

    <div class="center">

      <div class="message photo">
        
        <img src="../../../public/assets/avatar.png" alt="">
        
        <div class="text">
          
          <img style="cursor:pointer" @click="download" src="https://th.bing.com/th/id/OIP.JPllmkWBqX_ALvUO_DAnZwHaE7?rs=1&pid=ImgDetMain" alt="">

          <p>Lorem ipsum um sint quist quas nesciunt eos velit?</p>
          <span style="display:flex;align-items:end;gap:5px" class="time">10min ago    <span style="cursor:pointer;display:flex;align-items:end;gap:5px" class="time">Image<img style="height:20px;width:20px;border-radius:0" src="../../assets/download.png" alt=""><br>
</span></span>


        </div>
            
      </div>
      
      <div class="message_own photo">
          <span style="cursor:pointer;display:flex;align-items:end;gap:5px" class="time">Image<img style="height:20px;width:20px;border-radius:0" src="../../assets/download.png" alt=""><br></span>


        
        
        <div class="text">
          
          <img style="cursor:pointer" @click="download" src="https://th.bing.com/th/id/OIP.JPllmkWBqX_ALvUO_DAnZwHaE7?rs=1&pid=ImgDetMain" alt="">

          <p>Lorem ipsum um sint quist quas nesciunt eos velit?</p>
          <span class="time">10min ago</span>


        </div>
      </div>

      <div class="message_own">
        <div class="text">
          <p>Lorem ipsum um sint quist quas nesciunt eos velit?</p>
                               <span class="time">10min ago</span>

        </div>
      </div>

      <div class="message">
        <img src="../../../public/assets/avatar.png" alt="">
        <div class="text">
          <p>Lorem ipsum um sint quist quas nesciunt eos velit?</p>
                               <span class="time">10min ago</span>

        </div>
      </div>

      <div class="message_own">
        <div class="text">
          <p>Lorem ipsum um sint quist quas nesciunt eos velit?</p>
                     <span class="time">10min ago</span>

        </div>
      </div>

      <div class="message">
        <img src="../../../public/assets/avatar.png" alt="">
        <div class="text">
          <p>Lorem ipsum um sint quist quas nesciunt eos velit?</p>
                               <span class="time">10min ago</span>

        </div>
      </div>

      <div class="message">
        <img src="../../../public/assets/avatar.png" alt="">
        <div class="text">
          <p>Lorem ipsum um sint quist quas nesciunt eos velit?</p>
                               <span class="time">10min ago</span>

        </div>
      </div>
      <div class="message">
        <img src="../../../public/assets/avatar.png" alt="">
        <div class="text">
          <p>Lorem ipsum um sint quist quas nesciunt eos velit?</p>
                     <span class="time">10min ago</span>

        </div>
      </div>
      <div class="message">
        <img src="../../../public/assets/avatar.png" alt="">
        <div class="text">
          <p>Lorem ipsum um sint quist quas nesciunt eos velit?</p>
                     <span class="time">10min ago</span>

        </div>
      </div>
        <div class="message">
        <img src="../../../public/assets/avatar.png" alt="">
        <div class="text">
          <p>Lorem ipsum um sint quist quas nesciunt eos velit?</p>
                     <span class="time">10min ago</span>

        </div>
      </div>


       <div class="message file">
        <img src="../../../public/assets/avatar.png" alt="">
        <div @click="download" style="cursor:pointer" class="text">
          <p>Lorem ipsum um sint quist quas nesciunt eos velit?</p>
                     <span class="time">10min ago</span>

        </div>
          <span style="cursor:pointer;display:flex;align-items:end;gap:5px" class="time">File<img style="height:20px;width:20px;border-radius:0" src="../../assets/download.png" alt=""><br>
</span>
      </div>


       <div class="message">
        <img src="../../../public/assets/avatar.png" alt="">
        <div class="text">
          <p>Lorem ipsum um sint quist quas nesciunt eos velit?</p>
                     <span class="time">10min ago</span>

        </div>
      </div>

       <div class="message">
        <img src="../../../public/assets/avatar.png" alt="">
        <div class="text">
          <p>
            Lorem ipsum um sint quist quas nesciunt eos velit?
            </p>
           <span class="time">10min ago</span>

          
        </div>
      </div>

       
      <div class="message_own file">

          <span style="cursor:pointer" class="time">File                   <img style="height:20px;width:20px" src="../../assets/download.png" alt=""><br>
</span>
          <br>

        
        <div @click="download" style="cursor:pointer" class="text">

          <p>Lorem ipsum um sint quist quas nesciunt eos velit? </p>
          <span class="time">10min ago</span>

        </div>

        

      </div>
      


    
    <div ref="targetscroll"></div>


    </div>

    <FilePreview :files="selectedFiles" @remove-file="removeFile"></FilePreview>

    <div class="bottom">
      
      <div class="icons">

         <label for="image-input" style="cursor:pointer;">
        <i class="bi bi-image" style="cursor:pointer;font-size: 1.6rem;"></i>

        </label>

        <label for="file-input" style="cursor:pointer;">
                  <i class="bi bi-paperclip" style="cursor:pointer;font-size: 1.6rem;"></i>

        </label>


        <input id="file-input" type="file" @change="handleFileChange" multiple hidden>
        <input id="image-input" accept="image/*" type="file" @change="handleFileChange" multiple hidden>

      </div>

      <textarea v-model="text" type="text" placeholder="Type a message ..."></textarea>

      <div class="emoji">
          <i @click="toggleEmojiPicker" class="bi bi-emoji-smile-fill" style="cursor:pointer;margin-right:10px;font-size: 1.8rem;"></i>
      </div>

        <b-button  variant="success" @click="o" >
                        <div style="display:flex;gap:20px;font-weight:bolder">
                            <div style="display:flex;align-items:center;">Send</div>
                        <img src="../../assets/send.png" alt="Profile Picture" class="profile-picturee ppppojpppo"/>

                        </div>
        </b-button>



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
import { EmojiButton } from '@joeattardi/emoji-button';
import detail from "@/components/detail/detail.vue"
import FilePreview from '../layout/filesPreview.vue';

import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';


export default {
  components:{detail,FilePreview},
  data() {
    return {
      text: "",
      picker: new EmojiButton(),
      showDetail: false,
      selectedFiles: [],
      maxFileSize: 10 * 1024 * 1024,


    };
  },
  mounted() {
    const targetElement = this.$refs.targetscroll;

      // Check if the element exists
      if (targetElement) {
        // Scroll to the element
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }




    this.picker.on('emoji', emoji => {
      this.text += emoji.emoji;
    });
  },


  methods: {
    toggleEmojiPicker(event) {
      this.picker.togglePicker(event.target);
    },
    removeFile(index) {
      this.selectedFiles.splice(index, 1);
    },
    async handleFileChange(event) {
      const files = event.target.files;

      if (files.length > 20 || this.selectedFiles.length > 20){
        this.showToast("too Many files, Maximum number is 20 file")
      }
      else
      {for (let i = 0; i < files.length; i++) {

        const file = files[i];

        if (file.size > this.maxFileSize){
          this.showToast("maximum size allowed is 10 Mb")
        }
        else {
        const reader = new FileReader();
        console.log("ready")
        reader.onload = (e) => {
          console.log("sucess"+file.name)
          this.selectedFiles.push({
            name: file.name,
            type: file.type,
            url: e.target.result
          });
          const targetElement = this.$refs.targetscroll;

      // Check if the element exists
      if (targetElement) {
        // Scroll to the element
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }

        };
        
        reader.readAsDataURL(file);

        }
      }}
    },showToast(arg) {
      Toastify({
        text: arg,
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        backgroundColor: "red",
      }).showToast();
    }
  }
};
</script>

<style scoped>
.oiwnefoiwnef{
  width: 10px;
  height: 10px;
}

.ppppojpppo{
  width: 30px;
  height: 30px;
}

.modal-content {
  background-color: red !important; /* Example: Light grey */
}






.chat {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-left: 1px solid #dddddd35;
  border-right: 1px solid #dddddd35;
}
.top {
  width: 100%;

  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dddddd35;
}
.user {
  display: flex;
  align-items: center;
  gap: 20px;
}
.user img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}
.texts {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.texts span {
  font-size: 18px;
  font-weight: bold;
}
p {
  font-size: 14px;
  font-weight: 300;
  color: white;
}
.icons {
  display: flex;
  gap: 20px;
}
.icons img {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.center {
  flex: 1 ;
  padding: 20px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
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

.center:hover::-webkit-scrollbar-thumb {
  background-color: #888; /* Adjust as needed */

}

.send-button{
  background-color: #3365e4;
  border-color: darkblue;
}







.message {
  max-width: 70%;
  display: flex;
  gap: 20px;
    margin-bottom:17px ;

}
.message img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 20px;
}
.message_own {
  align-self: flex-end;
  margin-bottom:17px ;
}
.message_own .text p{
  background-color: #5183fe;
  color: white;
  padding: 5px;
  border-radius: 5px;
  color: white;
   margin-bottom:0 ;
}
 .text p{
  background-color: rgba(17, 25, 40, 0.3);
  padding: 10px;
  border-radius: 5px;
  color: white;
  margin-bottom:0 ;
}

.text img{
  width: 100%;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;

}

.time{
  font-size: 12px;
  float: inline-end;
}





.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-top: 1px solid #dddddd35;
}
.bottom .icons img {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.bottom textarea {
  flex: 1;
  background-color: rgba(17, 25, 40, 0.5);
  border: none;
  outline: none;
  color: white;
  border-radius: 10px;
  font-size: 18px;
  padding: 10px;
  margin: 0 10px;
  resize: none;
  height: 60px;
}
.bottom .sendButton {
  background-color: #5183fe;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
