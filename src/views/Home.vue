<template>
  <div class="page">
    <div class="container">
      <h3 class="text-center text-info">
        Axios, custom filter, components.
      </h3>

      <b-row class="mt-3">
        <b-col cols="4" v-for="post in posts" :key="post.id">
          <Item :item="post" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
// libs
import axios from "axios";

import Item from "../components/Item/Item.vue";

export default {
  components: {
    Item,
  }, 

  data() {
    return {
      posts: [],
    };
  },

  async created() {
    // fetch data
    try {
      const data = await axios.get("/posts");

      const posts = data.data.filter((item, index) => index < 12);

      this.posts = posts;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style lang="scss"></style>
