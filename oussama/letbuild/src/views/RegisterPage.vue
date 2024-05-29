<template>
    <b-row style="height: 90vh;width:100%">
      <b-col cols="7" class="animated-flex d-none d-xl-block op"> 
        <intro />
      </b-col>
      <b-col cols="12" xl="5" >
        <h2 class="animated-flex d-xl-none d-block">Welcome</h2>

        <LoginForm/>
      </b-col>
    </b-row>



</template>

<script>
import LoginForm from "@/components/auth/loginForm.vue"
import intro from "@/components/layout/intro.vue"
export default {
    components:{LoginForm,intro}
    
}
</script>

<style scoped>
.op{
      border-right: 1px solid rgba(255, 255, 255, 0.125);

        
    }






</style>

