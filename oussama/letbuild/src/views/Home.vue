<template>

    <b-row class="d-xl-none mb-3">
      
      

      
      
      

       
      <b-row style="display:flex;flex-direction:column">
        
      
      <b-col v-b-tooltip.hover title="Show contact details and shared files" id="image" style="cursor:pointer;flex-grow:0;margin-right:15px;margin-left:20px;margin-top:20px">
            <i @click="showDetail = true" class="bi bi-image" style=" font-size: 1.8rem;"></i>
      </b-col>
      <b-col v-b-tooltip.hover title="show contacts list" style="cursor:pointer;margin-right:15px;margin-left:20px;margin-top:20px">
            <i @click="showList = true"  class="bi bi-chat-fill" style=" font-size: 1.8rem;"></i>
      </b-col>
      
    </b-row>
      
      
    </b-row>


    <b-row style="height: 90vh;width:100%">
      <b-col cols="3" class="animated-flex d-none d-xl-block"> 
        <list />
      </b-col>
      <b-col cols="12" xl="9" class="ooo">    
        <chat />
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
import detail from "../components/detail/detail.vue";
import listmodal from "../components/modals/listmodal.vue"

export default {
    components: { chat, list, detail ,listmodal },
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

<style>

</style>