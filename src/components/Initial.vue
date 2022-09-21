<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <div class="title-initial">DreamTrip</div>

  <div class="slogan">Create your dream trip</div>

  <button class="initial-button-sign-up" >Sign up</button>

  <button class="initial-button-log-in" >Log in</button>
</template>

<style scoped>
  .title-initial{
    font-size: 96px;
    margin: 60px;
    
  }

  .slogan{
    font-size: 32px;
    color: #ffffff;
    opacity: 0.7;
    margin: 40px;
  }

  .initial-buttom-sign-up{
    background-color: #FC4747;
    margin-bottom: 50px;
    
    padding-left: 50px;
    padding-right: 50px;
    border: 0px;
    border-radius: 5px;
  }

  .initial-buttom-log-in{
    background-color: #FC4747;
    margin-bottom: 50px;
    
    padding-left: 50px;
    padding-right: 50px;
    border: 0px;
    border-radius: 5px;
  }

</style>
