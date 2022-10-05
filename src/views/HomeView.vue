<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Hello World</h1>
    <button class="btn btn-primary" @click="goToDaybook()">Primary</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToDaybook() {
      this.$router.push({ name: 'daybook' });
    },
  },
};
</script>
