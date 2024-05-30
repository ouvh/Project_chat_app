<template>

    <b-row class="d-xl-none mb-3">
      
      

      
      
      

       
      <b-row style="display:flex;flex-direction:column">
        
   
      <b-col v-b-tooltip.hover title="show contacts list" style="cursor:pointer;margin-right:15px;margin-left:20px;margin-top:20px">
            <i @click="showList = true"  class="bi bi-chat-fill" style=" font-size: 1.8rem;"></i>
      </b-col>
      
    </b-row>
      
      
    </b-row>


    <b-row class="oiwvoiwnev" style="height: 90vh;width:100%;overflow-y: scroll; border-left: 1px solid #dddddd35;border-right: 1px solid #dddddd35;">
      <b-col cols="3" class="animated-flex d-none d-xl-block"> 
        <list />
      </b-col>
      <b-col cols="12" xl="9"  >    
        <EditForm/>
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
      <listmodal />
    </b-modal>

    
</template>

<script>
import chat from "../components/chat/chat.vue";
import list from "../components/list/list.vue";
import detail from "../components/detail/detail.vue";
import listmodal from "../components/modals/listmodal.vue"
import EditForm from '@/components/auth/EditForm.vue';

export default {
    components: { chat, list, detail ,listmodal,EditForm },
  data() {
    return {
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

<style scoped>

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

.oiwvoiwnev:hover::-webkit-scrollbar-thumb {
  background-color: #888; /* Adjust as needed */

}



</style>