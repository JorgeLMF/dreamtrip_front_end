
<template>

  <div class="login">
    <div class="space-1">
      <div class="title-log">Login</div>
    </div>

    <div class="space-2">
      <form action="/action_page.php">
        <input type="text" value="Email address" class="input"><br><br>
        <input type="text" value="Password" class="input"><br><br>
      </form>
    </div>
            
    <div class="space-3">
      <router-link to="/login">
        <button class="initial-button-log-in">Login to your account</button>
      </router-link>
    </div>

    <div class="space-4">
      <div>
        Don't have an account? <router-link to="/signup" class="link">Sign up</router-link>  
      </div>
    </div>
                  
  </div>

    
</template>
    
<style scoped>
      
  .login{
    background-color: #161D2F;
    margin: auto;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    width: 120%;
    height: 110%;
        
  }

  .title-log{
      color: #ffffff;
      font-size: 32px;
      text-align: left;
      padding-left: 20px;
      padding-top: 30px;
  }

  .input{
        border: 0px;
        background-color: #161D2F;
        text-align: left;
        padding-left: 20px;
        padding-bottom: 10px;
        border-bottom: 1px solid #5A698F;

  }

  .initial-button-log-in{
    background-color: #FC4747;
    padding-left: 50px;
    padding-right: 50px;
    border: 0px;
    border-radius: 10px;
  }
  
  .link{
    color:#FC4747;
  }

  .space-1{
    margin-bottom: 60px;
  }
    
  .space-2{
    margin: 5px;
  }
      
  .space-3{
    margin: 5px;
  }

  .space-4{
    margin: 5px;
    padding-bottom: 20px;
  }
    
</style>