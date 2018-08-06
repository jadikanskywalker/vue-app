<template>
  <div id="app">
    <header>
      <div class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">We'll See</a>
      </div>
      <ul class="nav  justify-content-start">
        <li class="nav-item active">
          <a class="nav-link btn-ripple" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link btn-ripple" href="#">Music</a>
        </li>
        <li class="nav-item">
          <a class="nav-link btn-ripple" href="#">Tech</a>
        </li>
        <li class="nav-item">
          <a class="nav-link btn-ripple" href="#">About</a>
        </li>
      </ul>
    </header>
    <HomePage/>
  </div>
</template>

<script>
import HomePage from "./components/HomePage";

export default {
  name: "App",
  components: {
    HomePage
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}

.navbar {
  padding: 2rem 2rem;
  font-size: 120%;
}

.nav {
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
}

.nav-item {
  min-width: fit-content;
  width: 33.333%;
}

@media (min-width: 500px) {
  .nav-item {
    width: 25%;
  }
}

@media (min-width: 700px) {
  .nav-item {
    width: fit-content;
  }
}

.nav-link {
  position: relative;
  overflow: hidden;
  padding: 0.8rem 2rem;
  color: #444444;
  transition: color 0.1s ease;
}

.nav-link:hover {
  color: #666666;
  transition: color 0.3s ease;
}

.ripple{
  position:absolute;
  background: rgba(121, 121, 121, 0.4);
  border-radius:50%;
  width:5px;
  height:5px;
  animation:rippleEffect .88s 1;
  opacity:0;
}

@keyframes rippleEffect {
  0% {transform:scale(1); opacity:0.4;}
  100% {transform:scale(100); opacity:0;}
}
</style>
