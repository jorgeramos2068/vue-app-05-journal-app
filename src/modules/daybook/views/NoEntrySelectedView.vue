<template>
  <div class="no-entry-container d-flex justify-content-center">
    <div class="d-flex justify-content-center">
      <h1 class="align-self-center">Nothing selected</h1>
    </div>
    <Fab @on-click="createEntry()" />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'NoEntrySelectedView',
  components: {
    Fab: defineAsyncComponent(() => import('../components/Fab.vue')),
  },
  methods: {
    createEntry() {
      this.$router.push({ name: 'entry', params: { id: 'new' } });
    },
  },
};
</script>

<style lang="scss" scoped>
.no-entry-container {
  height: 100%;
}
</style>
