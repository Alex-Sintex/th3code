<template>
    <div class="container">
      <NavBar />
      <div class= "second-container">
        <OptionsMenu />
        <VacancieFormRegister />
      </div>
    </div>
      
  </template>
  
  <script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue'
  import VacancieFormRegister from '@/components/VacancieFormRegister3.vue';
  import OptionsMenu from '@/components/OptionsMenu.vue';

  export default {
    name: 'CreateVacanciesView3',
    components: {
      NavBar,
      VacancieFormRegister,
      OptionsMenu
    }
  }
  </script>
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: fit-content;
    }
  .second-container{
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
  }
  </style>