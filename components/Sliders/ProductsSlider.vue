<script setup lang="ts">
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import IconCaretLeft from '~/components/Icons/IconCaretLeft.vue'
import IconCaretRight from '~/components/Icons/IconCaretRight.vue'
import { Product } from '~/types/Products'
import ProductListCard from '~/components/Catalog/ProductListCard.vue'

defineProps<{
  name: string,
  showAllUrl: string | null,
  products: Product[]
}>()

const swiperRef = ref()
const prevBtn = ref()
const nextBtn = ref()
const swiperPagination = ref()

onMounted(() => {
  new Swiper(swiperRef.value, {
    modules: [Navigation, Pagination],
    slidesPerView: 5,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 5,
        spaceBetween: 30
      }
    },
    mousewheel: {
      releaseOnEdges: true
    },
    navigation: {
      nextEl: nextBtn.value,
      prevEl: prevBtn.value
    },
    pagination: {
      el: swiperPagination.value,
      clickable: true
    }
  })
})

</script>
<template>
  <div ref="swiperRef" class="swiper position-relative">
    <div class="d-flex justify-content-between mb-4 align-items-center">
      <div class="h2 fw-bold mb-0">
        {{ name }}
      </div>
      <div class="d-flex align-items-center">
        <a v-if="showAllUrl" :href="showAllUrl" class="btn btn-secondary text-uppercase show-all-btn me-3">
          Смотреть все
        </a>
        <div class="swiper-nav-buttons">
          <div ref="prevBtn" class="menu-btn-bg menu-prev-btn" title="Назад">
            <button class="d-none d-md-inline-block btn btn-secondary slider-nav-btn me-2">
              <icon-caret-left class="icon-20" />
            </button>
          </div>
          <div ref="nextBtn" class="menu-btn-bg menu-next-btn">
            <button class="d-none d-md-inline-block btn btn-secondary slider-nav-btn" title="Вперед">
              <icon-caret-right class="icon-20" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="swiper-wrapper">
      <div v-for="(item, index) in products" :key="index" class="swiper-slide">
        <product-list-card :product="item" />
      </div>
    </div>

    <div ref="swiperPagination" class="swiper-pagination swiper-pagination-long-bullet" />
  </div>
</template>
<style scoped lang="scss">
.swiper {
  margin-top: 40px;
  padding: 0 1px;
}

.swiper-pagination {
  position: relative;
  margin-top: 20px;
  --swiper-pagination-bullet-size: 10px;
  --swiper-pagination-bullet-horizontal-gap: 10px;
  --swiper-pagination-color: var(--bs-primary);
}

.swiper-nav-buttons {
  display: flex;

  .slider-nav-btn {
    padding: 14px 14px;
    line-height: 1;
    border-radius: 50%;
  }
}

.show-all-btn {
  --bs-btn-padding-y: 18px;
  --bs-btn-padding-x: 30px;
  line-height: 1;
  --bs-btn-font-size: 12px;
}
</style>
