<template>
  <div id="app">
    <router-view></router-view>
    <Tab></Tab>
  </div>
</template>

<script>
  import Tab from './base/Tab'
  export default {
    data() {
      return {}
    },
    methods: {},
    computed: {},
    components: {
        Tab
    }
  }
</script>

<style>
  body,html{
    padding: 0;
    margin: 0;
  }
  ul,li{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a{
    text-decoration: none;
    outline: none;
    color: lightseagreen;
  }

</style>
