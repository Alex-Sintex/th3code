<template>
    
    <div class="form-container">
        <div class="title-container">
          <label>Crea tu vacante</label> 
          <div class="circle">1.3</div>
           
        </div>
        <form>
            <label for="jobs">Puesto</label>
            <select id="jobs">
                <option value="opcion1">Opción 1</option>
                <option value="opcion2">Opción 2</option>
                <option value="opcion3">Opción 3</option>
            </select>

            <br>

            <label for="languages">¿Idiomas Requeridos?</label>
            <select id="languages">
                <option value="opcion1">Opción 1</option>
                <option value="opcion2">Opción 2</option>
                <option value="opcion3">Opción 3</option>
            </select>
            
            <div class="grid-container">
                <!---Aqui van las sills seleccionadas por el usuario-->
                <SkillItem />
                <SkillItem />
                <SkillItem />
                <SkillItem />
              
            </div>
            <br>
            <label for="experience">Años de experiencia en el area de TI</label>
            <input id="experience" type="number">
            <div class="btns-container">
              <input type="submit" id="btn-volver" value="Volver">
              <input type="submit" id="btn-sig" value="Siguiente">
            </div>
        </form>

</div>
 
</template>
  
  <script>
  import SkillItem from "./SkillItem.vue"
  export default {
    name: 'VacancieForm3',
    props: {
    },
    components: {
      SkillItem
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
    .grid-container {
        margin-top: 20px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(50px, 1fr ));
        grid-auto-rows: 50px;
        grid-gap: 10px;
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
      width: 80%;
      padding: 20px;
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center; 
    }
    .form-container label {
      font-size: 30px;
      color:black;
      text-align: start;
    }
    .form-container form{
      width: 100%;
      display: flex;
      display: flex;
      flex-direction: column;
      justify-content: center; 
    }
    .form-container select{
      width: 100%;
      height: 50px;
      border: 2px solid rgb(110, 195, 244);
      border-radius: 3px;
      font-size: 20px;
    }
    .form-container input[type="number"]{
      width: 100px;
      height: 50px;
      border: 2px solid rgb(110, 195, 244);
      border-radius: 3px;
      font-size: 20px;
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