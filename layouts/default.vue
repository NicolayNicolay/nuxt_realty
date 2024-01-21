<template>
  <div class="gs-app d-flex flex-column min-vh-100">
    <div class="d-flex flex-column">
      <div class="d-none order-2" />
      <slot />
      <header-component v-if="pageHeader.type === 1" />
      <header-component-type2 v-else />
    </div>
    <footer-component />
    <feedback-form />
    <sales-form />
    <client-only>
      <cookie-form />
    </client-only>
  </div>
</template>
<script setup lang="ts">
import HeaderComponent from '~/components/Common/Header/HeaderComponent.vue'
import FooterComponent from '~/components/Common/Footer/FooterComponent.vue'
import { useHeaderType } from '~/composables/useHeaderType.js'
import HeaderComponentType2 from '~/components/Common/Header/HeaderComponentType2.vue'
import CookieForm from '~/components/Forms/CookieForm.vue'
import FeedbackForm from '~/components/Forms/FeedbackForm.vue'
import SalesForm from '~/components/Forms/SalesForm.vue'

const pageHeader = useHeaderType()
</script>
