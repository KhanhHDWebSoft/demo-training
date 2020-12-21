<template>
  <b-card
    :title="item.title | truncateText(10)"
    :img-src="`https://picsum.photos/600/300/?image=${randomNumber}`"

    img-alt="Image"
    img-top
    tag="article"
    class="mb-2"
  > 
    <b-card-text>
      {{ item.body | truncateText(50) }}
    </b-card-text>

  </b-card>
</template>

<script>
export default {

  props: {
    item: {
      type:Object,
      required: true
    }
  },

  data() {
    return {
      randomNumber: 0
    }
  },

  created() {
    const number = Math.ceil(Math.random() * 1000);
    this.randomNumber = number;
  }

};
</script>

<style></style>
