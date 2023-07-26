<template>
  <div class="no-entry-container d-flex justify-content-center">
    <div class="d-flex justify-content-center">
      <h1 class="align-self-center">Nothing selected</h1>
    </div>
    <Fab />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    Fab: defineAsyncComponent(() => import('../components/Fab.vue')),
  },
};
</script>

<style lang="scss" scoped>
.no-entry-container {
  height: 100%;
}
</style>
