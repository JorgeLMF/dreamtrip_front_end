<template>
  <div class="signup">
    <div>
      <div class="title-log">Signup</div>
    </div>

    <div>
      <form method="get" id="form-signup">
        <input
          type="text"
          placeholder="Email address"
          class="input"
        /><br /><br />
        <input type="text" placeholder="Password" class="input" /><br /><br />
        <input
          type="text"
          placeholder="Repeat Password"
          class="input"
        /><br /><br />
      </form>
    </div>

    <div>
      <router-link to="/home">
        <button type="submit" form="form-signup" class="initial-button-log-in">
          Create an Account
        </button>
      </router-link>
    </div>

    <div class="signup-to-signup">
      Already have an account?
      <router-link to="/signup" class="link">Login</router-link>
    </div>
  </div>
</template>

<style scoped>
.signup {
  background-color: #161d2f;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 350px;
  row-gap: 25px;
  padding: 32px;
  justify-content: space-between;
}

#form-signup {
  padding-top: 20px;
}

.title-log {
  color: #ffffff;
  font-size: 32px;
  text-align: left;
}

.input {
  border: 0px;
  background-color: #161d2f;
  text-align: left;
  border-bottom: 1px solid #5a698f;
  width: 100%;
  padding-bottom: 13px;
}

#form-signup input:focus {
  outline: none;
}

.input::placeholder {
  color: #ffffff;
  opacity: 0.5;
}

.initial-button-log-in {
  background-color: #fc4747;
  padding-left: 50px;
  padding-right: 50px;
  border: 0px;
  border-radius: 10px;
  width: 336px;
  height: 48px;
  font-size: 15px;
  font-weight: 300;
}

.link {
  color: #fc4747;
}

.signup-to-signup {
  font-size: 15px;
  font-weight: 300;
}
</style>
