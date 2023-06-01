<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <br>
    <router-link to="/login">Login</router-link>
    <br>
    <router-link to="/user-register">User Register</router-link>
    <br>
    <router-link to="/create-vacancies1">Create Vacancie1</router-link>
    <router-link to="/create-vacancies2">Create Vacancie2</router-link>
    <router-link to="/create-vacancies3">Create Vacancie3</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
