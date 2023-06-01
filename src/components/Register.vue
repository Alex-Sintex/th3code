<template>
  <div class="container">

    <div class="grid-container">
      <div class="grid-item">
        <img src="../assets/Anuncio_App.png" alt="Descripción de la imagen" style="width: 100%;height: 100%;">
      </div>
      <div class="grid-item">

        <div class="login-container">
          <img src="../assets/Logo_GT.png" alt="Descripción de la imagen">
          <h2>¡Crea tu cuenta!</h2>

          <form>
            <h3>Correo electrónico</h3>
            <input type="text" required>
            <h3>Contraseña</h3>
            <input type="password" required>
            <h3>Confirmar contraseña</h3>
            <input type="confirm_password" required>
            
            <label class="content">Acepto términos y condiciones
            <input type="checkbox" checked="checked">
            <span class="checkmark"></span>
            </label>
            
            <input type="submit" value="Crear">
            <a href="">¡Ya tengo una cuenta!</a>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  name: 'RegisterComp',
  props: {
  }
}
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* The container */
.content {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.content input[type='checkbox'] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.content:hover input[type='checkbox'] .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.content input[type='checkbox']:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.content input[type='checkbox']:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.content .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
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
  height: fit-content;
  margin: 0px auto;
  padding: 0px;
  border-radius: 5px;
}

.login-container img {
  margin-top: 10px;
  width: max-content;
}

.login-container h2 {
  text-align: left;
  padding: 0px;
  height: 5px;
  font-size: 30px;
  font-style: inherit;
  color: black;
}

.login-container h3 {
  text-align: left;
  padding: 0px;
  height: 5px;
  font-weight: normal;
  font-size: 25px;
}

.login-container form {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding-top: 5px;
}

.login-container input[type="text"] {
  width: 100%;
  height: 50px;
  border: 2px solid rgb(110, 195, 244);
  border-radius: 3px;
  font-size: 20px;
}

.login-container input[type="password"],
input[type="confirm_password"] {
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

.login-container a {
  text-align: left;
  color: skyblue;
}

/* Style the custom checkbox */
label::before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border: 1px solid #ccc;
  background-color: #fff;
}
</style>