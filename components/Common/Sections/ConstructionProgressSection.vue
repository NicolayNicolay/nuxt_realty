<template>
  <section id="construction-index" class="construction-index">
    <construction-slider />
  </section>
</template>
<script setup lang="ts">
import ConstructionSlider from '~/components/Sliders/ConstructionSlider.vue'
</script>
<style scoped lang="scss">
.construction-index {
  padding: 92px 0 135px 0;

  .swiper-filter {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding-bottom: 1rem;
    letter-spacing: 0;

    .item {
      margin-left: 1.75rem;
    }
  }
}
</style>
