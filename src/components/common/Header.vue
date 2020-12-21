<template>
  <header class="bg-dark light-text">
      <div class="container">
        <nav class="navbar ">
          <h3 class="navbar__logo text-primary">Demo</h3>
          <ul class="navbar__list d-flex">
            <li class="mr-2"><router-link  to="/">Home</router-link></li>
            <li ><router-link to="/nested">Nested Route</router-link></li>
          </ul> 
        </nav>
      </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0.5rem 0;
  z-index:1000;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:0;

  &__logo {
    font-size: 2rem;
    margin:0;
  }

  &__list {
    margin:0;

    li {
      a {
        color:white;
      }
    }
  }

}
</style>
