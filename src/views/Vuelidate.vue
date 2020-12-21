<template>
  <b-card title="Vuelidate Form" class="mx-auto" style="max-width:30rem">
    <b-card-text>
      <form>
       <CustomInput type="text" v-model="$v.name.$model" label="name" />
        <p class="error" v-if="$v.name.$error">
          Name is required and must have at least
          {{ $v.name.$params.minLength.min }} letters.
        </p>

        <CustomInput
          type="password"
          v-model="$v.password.$model"
          label="password"
        />
        <p class="error" v-if="$v.password.$error">
           Password is required and must have at least
          {{ $v.name.$params.minLength.min }} letters.
        </p>
        <CustomInput
          type="password"
          v-model="$v.confirmPassword.$model"
          label="confirm password"
        />
        <p class="error" v-if="$v.confirmPassword.$error">
          Password must be indentical
        </p>

        <CustomInput
          type="text"
          v-model="$v.async.$model"
          label="Async validator"
        />
        <p class="error" v-if="$v.async.$error">Chuỗi phải là 123456 </p>

        <button class="btn btn-primary mt-4" @click="$v.$touch()">
          Submit
        </button>
      </form>
    </b-card-text>
  </b-card>
</template>

<script>
import CustomInput from "../components/CustomInput/CustomInput.vue";
import { required, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  components: {
    CustomInput,
  },

  data() {
    return {
      name: null,
      password: null,
      confirmPassword: null,
      async: "",
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(6),
    },

    password: {
      required,
      minLength: minLength(6),
    },

    confirmPassword: {
      sameAsPassword: sameAs("password"),
    },

    async: {
      required, 
      isCorrect(value) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(value === '123456')
          },1500)
        })
      }
    }
  },
};
</script>

<style lang="scss">
.error {
  color: red;
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
