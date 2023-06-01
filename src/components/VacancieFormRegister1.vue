<template>
    
    <div class="form-container">
        <div class="title-container">
          <label>Crea tu vacante</label> 
          <div class="circle">1.1</div>
           
        </div>
        <form>
            <label>¡Cuéntanos un poco sobre la vacante que <br> quieres publicar!</label>
            
            <label for="title" >Título</label>
            <input id="title" type="text" placeholder="Ejemplo: Desarrollador de software .NET">  

            <label for="job-details" >Detalles del puesto</label>
             <textarea id="job-details" rows="5" cols="50" placeholder="Ejemplo: Detalles del puesto"></textarea>

            <div class="btns-container">
              <input type="submit" id="btn-sig" value="Siguiente">
            </div>
        </form>

</div>
 
</template>
  
  <script>

  export default {
    name: 'VacancieForm',
    props: {
    },
    components: {
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .title-container {
    display: flex;
    align-items: center;
    font-size: 12px;
    
  }
  
  .circle {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: rgb(110, 195, 244);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    font-size: 30px;
    color: white;
    margin-left: 50px;
  }
    .btns-container{
        display: flex;
        justify-content: space-between;
    }
    #btn-sig{
      width: 30%;
    }
    #btn-volver{
      width: 30%;
    }
    .form-container{
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: start; 
    }
    .form-container label {
      font-size: 30px;
      color:black;
      text-align: start;
      padding-top: 30px;
    }
    .form-container form{
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: start; 
    }
    #title{
      width: 80%;
      height: 50px;
      border: 2px solid rgb(110, 195, 244);
      border-radius: 3px;
      font-size: 20px;
    }
    
    .form-container textarea{
      height: auto;
      width: 80%;
      border: 2px solid rgb(110, 195, 244);
      border-radius: 3px;
      font-size: 20px;
      font-family: Arial, Helvetica, sans-serif ;
    }
    .form-container input[type="submit"] {
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
  </style>