<template>
  <b-card title="Veelidate Form" class="mx-auto" style="max-width:40rem">
    <b-card-text>
      <ValidationObserver ref="form" v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)">
          <ValidationProvider
            name="name"
            rules="required|min:6"
            v-slot="{ errors }"
          >
            <CustomInput type="text" v-model="name" label="name" />
            <p class="error" v-tooltip>{{ errors[0] }}</p>
          </ValidationProvider>

          <ValidationProvider
            name="password"
            rules="required|min:6"
            v-slot="{ errors }"
          >
            <CustomInput type="password" v-model="password" label="password" />
            <p class="error">{{ errors[0] }}</p>
          </ValidationProvider>

          <ValidationProvider
            name="confirmPassword"
            rules="required|confirmed:password"
            v-slot="{ errors }"
          >
            <CustomInput
              type="password"
              v-model="confirmPassword"
              label="confirm password"
            />
            <p class="error">{{ errors[0] }}</p>
          </ValidationProvider>


          <button class="btn btn-primary mt-4">
            Submit
          </button>
        </form>
      </ValidationObserver>
    </b-card-text>
  </b-card>
</template>

<script>
import CustomInput from "../components/CustomInput/CustomInput.vue";


export default {
  components: {
    CustomInput,
  },

  data() {
    return {
      name: "",
      password: "",
      confirmPassword: "",
      async: "",
    };
  },

  methods: {
    onSubmit() {
      console.log("submit");
      this.$refs.form.validate();
    },
  },

  
};
</script>

<style></style>
