<template>
    <div class="container">
      <div class="grid-container">
        <div class="grid-item">
            <img src="../assets/options_icon.png" id="options-icon">
        </div>
        
        <div class="grid-item">
            <div class ="user-info">
                <h2>Eduardo Peréz</h2>
                <div class="pic-frame">
                    <img src="../assets/user_pic.jpg">
                </div>
            </div>
        </div>
        
      </div>
   </div>
</template>
    
    <script>
    export default {
      name: 'NavBar',
      props: {
      }
    }
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    #options-icon{
        width: 60px;
        height: 60px;
        
    }
    .pic-frame{
        width: 60px;
        height: 60px;
         border: 2px solid rgb(255, 255, 255);
         border-radius: 50%;
         overflow: hidden;   
         margin-left: 20px; 
      }
      .pic-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      
    }
    .user-info{
        height: 100%;
        width: fit-content;
        display: flex;
        justify-content: center;
        
    }
    .user-info h2{
        font-weight: lighter;
        font-style: normal;
        color:rgb(255, 255, 255);
    }
    .container{
        width: 100%;
        height:min-content;
        justify-content: space-between;
      
    }
    .grid-container {
        
        width: 100%;
        height: 20%;
        display: grid;
        grid-template-columns: auto auto;
        justify-content: space-between;
        background-color: rgb(110, 195, 244);;
       
      }
      .grid-item {
        width: 100%;
        height: 100%;
        display: flex;
        padding: 10px;
      }
      .grid-item:nth-child(2) {
      justify-self: end; /* Alinea el segundo elemento del grid al final de su columna */
    }
  
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
      }
      
    </style>