<template>
  <div class="custom-input">
    <label class="custom-input__label" > {{ label }}</label>
    <input class="custom-input__input" :value="value" @input="e => updateValue(e.target.value)" :type="type" >
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type:String,
      required: true
    },

    type: {
      type: String,
      required: true
    },
    value: {
      type:String
    }

  },

  methods: {
    updateValue (value) {
      this.$emit('input',value)
    }
  }
}
</script>

<style lang="scss">
  .custom-input {
    margin:.5rem 0;
    &__label {
      display:block;
      font-size:1.2rem;
      text-transform: capitalize;
    }

    &__input {
      width:100%;
      outline:none;

    }
  }
</style>