<template>
    <div class="container">
      <label>Skill</label>
      <img src="../assets/tache.png">
   </div>
</template>
    
    <script>
    export default {
      name: 'SkillItem',
      props: {

      }
    }
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    .container {
        width: fit-content;
        height: 50px;
        display: grid;
        grid-template-columns: auto auto;
        justify-content: space-between;
        align-items: center;
        background-color: rgb(110, 195, 244);
    }
    .container label{
        font-size: 20px;
        color:black;
        margin-right: 10px;
    }
    .container img{
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
    </style>