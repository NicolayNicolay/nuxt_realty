<template>
  <main class="order-3">
    <!--    <terrace-section />-->
    <options-section />
    <form-section-type2 />
    <common-section />
  </main>
</template>
<script setup lang="ts">
import OptionsSection from '~/components/Common/Sections/OptionsSection.vue'
import CommonSection from '~/components/Common/Sections/CommonSection.vue'
import { useHeaderType } from '~/composables/useHeaderType.js'
import TerraceSection from '~/components/Common/Sections/TerraceSection.vue'
import FormSectionType2 from '~/components/Common/Sections/FormSectionType2.vue'

const pageHeader = useHeaderType()
pageHeader.value.type = 2

</script>
