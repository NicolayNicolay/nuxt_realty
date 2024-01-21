<template>
  <section class="slider-section slider-light b-title">
    <div class="container">
      <div class="position-relative common-swiper">
        <div ref="swiperCommon" class="swiper position-relative">
          <div class="swiper-wrapper">
            <div v-for="(item, index) in banners" :key="index" class="swiper-slide position-relative">
              <div class="row">
                <div class="col-lg-6">
                  <img :src="item.img" class="w-100 h-100" alt="">
                </div>
                <div class="col-lg-6">
                  <div class="content">
                    <div class="h7" v-html="item.subtitle"></div>
                    <h5 v-html="item.title"></h5>
                    <hr class="separator-slider">
                    <div class="text" v-html="item.text"></div>
                    <button class="btn btn-lg btn-primary">
                      Выбрать
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div ref="swiperPagination" class="swiper-pagination swiper-pagination-long-bullet" />
        </div>
        <div ref="prevBtn" class="menu-btn-bg menu-prev-btn" title="Назад">
          <button class="d-none d-md-inline-block slider-nav-btn me-2">
            <icon-caret-left class="icon-60" />
          </button>
        </div>
        <div ref="nextBtn" class="menu-btn-bg menu-next-btn">
          <button class="d-none d-md-inline-block slider-nav-btn" title="Вперед">
            <icon-caret-right class="icon-60" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import IconCaretLeft from '~/components/Icons/IconCaretLeft.vue'
import IconCaretRight from '~/components/Icons/IconCaretRight.vue'

const swiperCommon = ref()
const swiperPagination = ref()

onMounted(() => {
  new Swiper(swiperCommon.value, {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    autoplay: {
      delay: 5000
    },
    mousewheel: {
      releaseOnEdges: true
    },
    navigation: {
      prevEl: swiperCommon.value.parentNode.querySelector('.menu-prev-btn'),
      nextEl: swiperCommon.value.parentNode.querySelector('.menu-next-btn')
    },
    pagination: {
      el: swiperPagination.value,
      clickable: true
    }
  })
})

const banners = [
  {
    subtitle: 'Паркинг',
    title: 'Для <br>автомобилистов',
    text: 'Подземный теплый паркинг под домом Океан на 297 машино мест, открытый трехэтажный паркинг на 169 машино-мест и 3 гостевых паркинга на 50 мест.',
    img: '/images/sections/screen_6.jpg'
  },
  {
    subtitle: 'Паркинг 2',
    title: 'Для <br> автомобилистов 2',
    text: 'Подземный теплый паркинг под домом Океан на 290 машино мест, открытый трехэтажный паркинг на 169 машино-мест и 3 гостевых паркинга на 50 мест.',
    img: '/images/main_screen.jpg'
  }
]

</script>
