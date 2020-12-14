<template>
  <div>
    <div id="nav">
      <router-link to="/user/lake">lake用户详情</router-link> |
      <router-link to="/user/admin">admin用户详情</router-link>
    </div>
    <router-view :key="$route.path"/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
