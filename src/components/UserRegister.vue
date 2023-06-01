<template>
    <div class="container">
  
      <div class="grid-container">
      <div class="grid-item">
        <img src="../assets/Anuncio_App.png" alt="Descripción de la imagen" id="img-ad">
      </div>
      
      <div class="grid-item">
  
        <div class="login-container">
          <img src="../assets/Logo_GT.png" alt="Descripción de la imagen">
          <h2>¡Crea tu cuenta!</h2>
          
            <form>
              <h3>Correo electrónico</h3>
              <input type="text"  required>
              <h3>Contraseña</h3>
              <input type="password"  required>
              <h3>Confirmar Contraseña</h3>
              <input type="password"  required>
              <input type="submit" value="Iniciar">
              <a>!Ya tengo una cuenta¡</a>
            </form>
    </div>
      </div>
   </div>
    </div>
   
  </template>
    
    <script>
    export default {
      name: 'LoginComp',
      props: {
      }
    }
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    #img-ad{
      width: 100%;
      height: 100%;
      
    }
    .container{
      display: inline-block;
      
    }
    .grid-container {
  
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
        border: 3px solid rgb(110, 195, 244);
        border-radius: 10px;
       
      }
      .grid-item {
        width: 100%;
        height: 100%;
        padding: 0px;
        text-align: center;
      }
  
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
      }
      
      .login-container {
        width: 60%;
        height:fit-content;
        margin: 0px auto;
        padding: 0px;
        border-radius: 5px;
      }
      .login-container img{
        margin-top: 10px;
        width: max-content;    
      }
      .login-container h2 {
        text-align: left;
        padding: 0px;
        height: 5px;
        font-size: 30px;
        font-style: inherit;
        color:black;
      }
      .login-container h3 {
        text-align: left;
        padding: 0px;
        height: 5px;
        font-weight: normal;
        font-size: 25px;
      }
      .login-container form{
        width: 100%;
        height: 100%;
        border-radius: 5px;
        padding-top: 5px;
      }
      .login-container input[type="text"]{
        width: 100%;
        height: 50px;
        border: 2px solid rgb(110, 195, 244);
        border-radius: 3px;
        font-size: 20px;
      }
      .login-container input[type="password"] {
        width: 100%;
        height: 50px;
        border: 2px solid rgb(110, 195, 244);
        border-radius: 3px;
        font-size: 20px;
      }
      .login-container input[type="submit"] {
        width: 100%;
        font-size: 30px;
        padding: 10px;
        border: none;
        border-radius: 3px;
        background-color: rgb(110, 195, 244);
        color: #fff;
        cursor: pointer;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .login-container a{
        text-align: left;
        color: skyblue;
      }
    </style>