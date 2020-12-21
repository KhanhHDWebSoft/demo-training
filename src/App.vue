<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/common/Footer.vue";
import Header from "./components/common/Header.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  font-size: 62.5%;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
span,
ul,
a {
  margin: 0;
  padding: 0;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.router-link-exact-active {
  color: #007bff !important;
}

.router-link.active {
  color: #007bff !important;
}

.page {
  margin: 5rem 0;
}
</style>
