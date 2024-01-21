<template>
  <div ref="swiperRef" class="swiper position-relative">
    <div class="swiper-wrapper">
      <div v-for="(item, index) in banners" :key="index" class="swiper-slide position-relative">
        <img :src="item.image" loading="lazy" class="img-fluid slide-image" alt="">
        <div class="slide-text">
          <div class="slide-title fz-large fw-semibold">
            {{ item.name }}
          </div>
          <div class="slide-desc">
            {{ item.text }}
          </div>
          <div class="slide-btn">
            <button class="btn btn-secondary">
              Подробнее
            </button>
          </div>
        </div>
      </div>
    </div>
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
    <div ref="swiperPagination" class="swiper-pagination swiper-pagination-long-bullet" />
  </div>
</template>
<script setup lang="ts">
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import IconCaretLeft from '~/components/Icons/IconCaretLeft.vue'
import IconCaretRight from '~/components/Icons/IconCaretRight.vue'

const swiperRef = ref()
const prevBtn = ref()
const nextBtn = ref()
const swiperPagination = ref()

onMounted(() => {
  new Swiper(swiperRef.value, {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
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

const banners = [
  {
    name: 'Аксессуары для мобильной жизни',
    text: 'В наличии более 2 000 аксессуаров: наушники, колонки, чехлы, зарядки, карты памяти, защитные стёкла и многое другое',
    url: '/',
    image: '/images/banners/homepage1.png'
  },
  {
    name: 'Аксессуары для мобильной жизни',
    text: 'В наличии более 2 000 аксессуаров: наушники, колонки, чехлы, зарядки, карты памяти, защитные стёкла и многое другое',
    url: '/',
    image: '/images/banners/homepage1.png'
  },
  {
    name: 'Аксессуары для мобильной жизни',
    text: 'В наличии более 2 000 аксессуаров: наушники, колонки, чехлы, зарядки, карты памяти, защитные стёкла и многое другое',
    url: '/',
    image: '/images/banners/homepage1.png'
  },
  {
    name: 'Аксессуары для мобильной жизни',
    text: 'В наличии более 2 000 аксессуаров: наушники, колонки, чехлы, зарядки, карты памяти, защитные стёкла и многое другое',
    url: '/',
    image: '/images/banners/homepage1.png'
  }
]

</script>
<style scoped lang="scss">
.btn-secondary {
  --bs-btn-hover-bg: var(--bs-primary);
  --bs-btn-hover-border-color: var(--bs-primary);
}

.swiper {
  margin-top: 40px;
}

.swiper-slide {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
}

.swiper-pagination {
  bottom: 40px;
  text-align: left;
  padding-left: 80px;
  --swiper-pagination-bullet-size: 10px;
  --swiper-pagination-bullet-inactive-color: #fff;
  --swiper-pagination-bullet-horizontal-gap: 10px;
  --swiper-pagination-color: var(--bs-secondary);
}

.swiper-nav-buttons {
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 3;
  display: flex;

  .slider-nav-btn {
    padding: 14px 14px;
    line-height: 1;
    border-radius: 50%;
  }
}

.slide-text {
  position: absolute;
  max-width: 470px;
  top: 65px;
  left: 80px;
  color: #ffffff;

  .slide-title {
    line-height: 1.1;
    margin-bottom: 10px;
  }

  .slide-desc {
    margin-bottom: 25px;
    font-size: 18px;
  }
}

</style>
