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
  
  <div class="space-1"> 
    <button class="initial-button-sign-up">Sign up</button>
  </div>
  
  <div class="space-2"> 
    <button class="initial-button-log-in">Log in</button>
  </div>

</template>

<style scoped>
  .title-initial{
    font-size: 96px;
    color: #ffffff;
    margin: 60px;
    
  }

  .slogan{
    font-size: 32px;
    color: #ffffff;
    opacity: 0.7;
    margin: 40px;
  }

  .initial-button-sign-up{
    background-color: #FC4747;
    padding-left: 100px;
    padding-right: 100px;
    border: 0px;
    border-radius: 10px;
  }

  .initial-button-log-in{
    background-color: #FC4747;
    padding-left: 105px;
    padding-right: 105px;
    border: 0px;
    border-radius: 10px;
  }

  .space-1{
    margin-top: 80px;
  }

  .space-2{
    margin: 20px;
  }

</style>
