<template>
  <div class="page">
    <b-container>
      <h1 class="text-info text-center">Nested Router, custom component with 2way binding, directive</h1>
        <ul class="d-flex d-block mx-auto justify-content-center nested-nav">
          <li class="mr-2 nested-nav__item"><router-link to="/nested/vuelidate">Vuelidate Form</router-link></li>
          <li class="nested-nav__item"><router-link to="/nested/veelidate">Veelidate Form</router-link></li>
        </ul>
    </b-container>

    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.nested-nav {
  &__item {
    a {
      color:black;
    }
  }
}

</style>