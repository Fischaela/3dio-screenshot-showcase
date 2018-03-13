<template>
  <div id="app">
    <header-bar></header-bar>
    <router-view></router-view>
  </div>
</template>

<script>

import HeaderBar from './components/header-bar'

export default {
  name: 'app',
  components: {
    'header-bar': HeaderBar
  },
  methods: {
    initApp () {
      this.$store.dispatch('loadApp', 'default_setup')
    }
  },
  mounted: function () {
    this.initApp()
  }
}
</script>

<style lang="less">
@import './styles/config.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @grey-80;
  margin-top: 0;
  font-size: 16px;
  letter-spacing: 0.3px;
}

* {
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
}

ul {
  padding: 0;
  list-style-type: none;
}

h1, h2 {
  // font-weight: normal;
}

button {
  border: none;
  outline: none;
  font-size: 16px;
}
</style>
