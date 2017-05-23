<template>
  <div id="app">
    <router-view></router-view>
    <nav class="navbar navbar-default">
      <div class="container">
        <ul class="nav navbar-nav">
          <li>
            <a v-link="home">Home</a>
          </li>
          <li>
            <a v-link="login">Login</a>
          </li>
          <li>
            <a v-link="signup">Sign Up</a>
          </li>
          <li>
            <a v-link="secretquote">Secret Quote</a>
          </li>
          <li>
            <a v-link="login">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>



<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
