<template>
  <span class="login100-form-title p-b-41">Register</span>
  <form
    @submit.prevent="onSubmit"
    class="login100-form validate-form p-b-33 p-t-5"
  >
    <div class="wrap-input100 validate-input" data-validate="Enter username">
      <input
        v-model="userForm.name"
        class="input100"
        type="text"
        placeholder="Name"
        required
      />
      <span class="focus-input100" data-placeholder="&#xe82a;"></span>
    </div>

    <div class="wrap-input100 validate-input" data-validate="Enter email">
      <input
        v-model="userForm.email"
        class="input100"
        type="email"
        placeholder="Email"
        required
      />
      <span class="focus-input100" data-placeholder="&#xe818;"></span>
    </div>

    <div class="wrap-input100 validate-input" data-validate="Enter password">
      <input
        v-model="userForm.password"
        class="input100"
        type="password"
        placeholder="Contraseña"
        required
      />
      <span class="focus-input100" data-placeholder="&#xe80f;"></span>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <button type="submit" class="login100-form-btn">Create account</button>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <router-link :to="{ name: 'login' }">
        Already have an account?
      </router-link>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue';
import useAuth from '@/modules/auth/composables/useAuth';

export default {
  name: 'RegisterView',
  setup() {
    const userForm = ref({
      name: '',
      email: '',
      password: '',
    });
    const { createUser } = useAuth();

    return {
      userForm,
      onSubmit: async () => {
        const { ok, message } = await createUser(userForm.value);
        console.log({ ok, message });
      },
    };
  },
};
</script>
