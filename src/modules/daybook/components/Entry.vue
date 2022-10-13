<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: entry.id } })"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">{{ month }}</span>
      <span class="mx-1 fs-5">{{ day }}, </span>
      <span class="mx-2 fw-light">{{ year }}</span>
    </div>
    <div class="entry-description">
      {{ shortText }}
    </div>
  </div>
</template>

<script>
import getCustomDate from '../helpers/getCustomDate';

export default {
  props: {
    entry: {
      type: Object,
      required: true,
    },
  },
  computed: {
    shortText() {
      return this.entry.text.length > 150
        ? `${this.entry.text.substring(0, 150)}...`
        : this.entry.text;
    },
    day() {
      const { day } = getCustomDate(this.entry.date);
      return day;
    },
    month() {
      const { month } = getCustomDate(this.entry.date);
      return month;
    },
    year() {
      const { year } = getCustomDate(this.entry.date);
      return year;
    },
  },
};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>
