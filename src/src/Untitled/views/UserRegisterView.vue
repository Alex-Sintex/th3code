<template>
    <div class="login-view">
        
      <UserRegister/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import UserRegister from '@/components/UserRegister.vue'
  
  export default {
    name: 'UserRegisterView',
    components: {
      UserRegister
    }
  }
  </script>