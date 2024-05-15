<template>
  <div class="chat">



    <div class="top">

      <div class="user">
        <img src="../../../public/assets/avatar.png" alt="">
        <div classname="texts">

          <span>Jan Doe</span>
          <p>Lorem ipsum dolor, sit amet </p>


        </div>
      </div>
      <div class="icons">
        <img src="../../../public/assets/phone.png" alt="abcd">
          <img src="../../../public/assets/video.png" alt="fgervb">
          <img src="../../../public/assets/info.png" alt="abcdevger">
      </div> 
          
    </div>
    <div class="center">
      <div class="message">

        <img src="../../../public/assets/avatar.png" alt="">
        <div class="text">
          <p>Lorem ipsum um sint quist quas nesciunt eos velit?</p>
        </div>
      </div>
      <div class="message_own">

        <div class="text">
          <p>Lorem ipsum um sint quist quas nesciunt eos velit?</p>
        </div>
      </div>


      <div class="message">

<img src="../../../public/assets/avatar.png" alt="">
<div class="text">
  <p>Lorem ipsum um sint quist quas nesciunt eos velit?</p>
</div>
      </div>

      <div class="message_own">

      <div class="text">
        <p>Lorem ipsum um sint quist quas nesciunt eos velit?</p>
      </div>
      </div>


    </div>
    <div class="bottom">
          <div class="icons">

          <img src="../../../public/assets/img.png" alt="abcd">
          <img src="../../../public/assets/camera.png" alt="fgervb">
          <img src="../../../public/assets/mic.png" alt="abcdevger">

          </div>
          <input v-model="text" type="text" placeholder="Type a message ...">
          <div class="emoji">
              <img @click="toggleEmojiPicker" src="../../../public/assets/emoji.png">

          </div> 
          <button class="sendButton">Send</button>


    </div>
  </div>
</template>

<script>
import { EmojiButton } from '@joeattardi/emoji-button';

export default {
  data() {
    return {
      text : "",
      picker:  new EmojiButton()
    };
  },
  
  
  methods: {
    toggleEmojiPicker(event) {
      this.picker.togglePicker(event.target);
      this.picker.on('emoji', emoji => {
        console.log(emoji)
      this.text += emoji.emoji;
    });
    }
  }
};
</script>

<style scoped>
.chat{
    flex: 2;
    border-left:1px solid #dddddd35;
    border-right : 1px solid #dddddd35;
    height: 100%;
    display : flex;
    flex-direction : column;
}
.chat .top{
padding: 20px;
display : flex;
align-items : center;
justify-content: space-between;
border-bottom: 1px solid #dddddd35;

    

}
.top .user{
    display : flex;
    align-items : center;
    gap : 20px ;
    
    }
.user img {
      width : 40px;
      height : 40px;
      border-radius : 50%; 
      object-fit : cover
    } 
.texts{
  display : flex;
  flex-direction: column ;
  gap : 5px
}
span{
  font-size : 18px;
  font-weight : bold ; 
}
p{
  font-size : 14px;
  font-weight : 300;
  color : #a5a5a5

}
.icons{
  display : flex ; 
  gap : 20px;
   
}
.icons img{ width: 20px;
  height: 20px;
  cursor : pointer}
.bottom img{
  width: 20px;
  height: 20px;
  cursor : pointer
  }

.center{
padding : 20px;
flex : 1;
overflow : scroll();
display: flex;
flex-direction : column ;
gap : 20px
}
.center .message{
  max-width : 70%;
  display : flex;
  gap : 20px
}

.message_own{
  align-self:flex-end; 
}


.bottom{

  padding:20px;
  display : flex;
  align-items:center;
  justify-content : space-between;
  gap : 20px;
  border-top : 1px solid #dddddd35;
}

 .bottom  input{
  flex :1;
  background-color: rgba(17,25,40,0.5);
  border : none;
  outline : none;
  color : white ;
  border-radius: 10px;
  font-size : 16px;
  padding : 20px
}

.bottom .sendButton{

  background-color : #5183fe;
  color : white ;
  padding : 10px 20px;
  border : none;
  border-radius : 5px;
  cursor : pointer 


}

</style>