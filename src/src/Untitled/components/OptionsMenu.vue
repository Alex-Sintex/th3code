<template>
    <div class="container">
        <h2 class="title">Publica tu vacante</h2>
        <h2 class="title">Búsquedas recientes</h2>
        <h2 class="title">Datos de tu cuenta</h2>
        <h2 class="title">Datos de facturacion</h2>
    </div>
</template>
    
<script>
    export default {
      name: 'OptionsMenu.vue',
      props: {

      }
    }
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container {
    background-color: rgb(110, 195, 244);
    height:100%;
    width: 70%;
    justify-content: start;
    }
    
    .title {
        display: inline-block;
        color: white;
        font-size: 30px;
        text-decoration: none;
       
    }
    
    .title:first-child {
        text-decoration: underline;
    }
    
    .title:last-child {
        color: #ded8d8;
        margin-bottom: 200px;
    }
</style>