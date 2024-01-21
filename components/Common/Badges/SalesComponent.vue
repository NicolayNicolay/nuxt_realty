<template>
  <a href="#" data-bs-toggle="modal" data-bs-target="#salesModal" class="sales-badge">
    <div class="sales-badge-text">Акции</div>
    <icon-sales />
  </a>
</template>

<script>
import IconSales from '~/components/Icons/IconSales.vue'
export default {
  components: { IconSales }
}
</script>
