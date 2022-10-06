<template>
  <div class="entry-container mb-3 pointer p-2">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">October</span>
      <span class="mx-1 fs-5">06, </span>
      <span class="mx-2 fw-light">2022</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu
      malesuada ante. Quisque magna sapien, tincidunt vel ornare sed, pharetra
      sit amet sapien. Nam pellentesque augue sit amet purus viverra fermentum.
      Vivamus vel ex tristique, porta nunc id, congue ex. Sed in nibh dolor.
      Nulla posuere efficitur sem in sodales. Vivamus iaculis metus ac velit
      lacinia gravida. Proin mattis nisi id nulla dignissim feugiat quis non
      sapien.
    </div>
  </div>
</template>

<script>
export default {};
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
