<template>
    <div class="list">
        <userinfo/>
        <chatlist/>
    </div>

</template>

<script>
import chatlist from './chatlist/chatlist.vue'
import userinfo from "./userinfo/userinfo.vue"
export default {
    components:{userinfo,chatlist}

}
</script>

<style scoped>
.list{
    flex: 1;
}

</style>