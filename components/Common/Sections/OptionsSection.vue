<template>
  <section id="options-index" class="options-index">
    <div class="container">
      <h3 v-if="pageHeader.type === 1" class="text-center">
        Варианты для семей с детьми и молодых пар
      </h3>
      <h3 v-else class="text-center">
        Выбирайте планировку по своим потребностям
      </h3>
      <options-slider />
    </div>
  </section>
</template>
<script setup lang="ts">
import { useHeaderType } from '~/composables/useHeaderType.js'
import OptionsSlider from '~/components/Sliders/OptionsSlider.vue'

const pageHeader = useHeaderType()
</script>
