<template>
  <div class="login-view">
      
    <Register/>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from '@/components/Register.vue'

export default {
  name: 'RegisterView',
  components: {
    Register
  }
}
</script>