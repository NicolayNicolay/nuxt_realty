<template>
  <div class="position-relative options-swiper slider-light">
    <div class="swiper-filter text-sm-end">
      <a href="#" class="h7" :class="activeFilter === 0? 'active':''" @click.prevent="switchRoomNumber(0)">
        Все
      </a>
      <a
        v-if="pageHeader.type === 2"
        href="#"
        class="h7"
        :class="activeFilter === 1? 'active':''"
        @click.prevent="switchRoomNumber(1)"
      >
        1 комн
      </a>
      <a href="#" class="h7" :class="activeFilter === 2? 'active':''" @click.prevent="switchRoomNumber(2)">
        2 комн
      </a>
      <a href="#" class="h7" :class="activeFilter === 3? 'active':''" @click.prevent="switchRoomNumber(3)">
        3 комн
      </a>
    </div>
    <div class="position-relative">
      <div ref="swiperRef" class="swiper position-relative">
        <div class="swiper-wrapper">
          <div v-for="(item, index) in activeBanners" :key="index" class="swiper-slide position-relative">
            <div class="slide-wrapper">
              <div class="row">
                <div class="col-12 text-center d-block d-lg-none">
                  <h6>
                    {{ item.title }}
                  </h6>
                </div>
                <div class="col-12 col-lg-7 hs-100">
                  <div class="img-wrapper d-flex justify-content-center justify-content-lg-start align-items-center">
                    <img :src="item.img" alt="">
                  </div>
                </div>
                <div class="col-12 col-lg-5">
                  <div class="slide-content">
                    <h6 class="d-none d-lg-block">
                      {{ item.title }}
                    </h6>
                    <div class="area-block d-flex justify-content-between align-items-end">
                      <div class="h7">
                        Общая площадь
                      </div>
                      <div class="h7 value">
                        {{ item.area }} м<sup>2</sup>
                      </div>
                    </div>
                    <a href="#" class="btn btn-lg btn-primary" data-bs-toggle="modal" data-bs-target="#feedbackModal">Узнать стоимость</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref="prevBtn" class="menu-btn-bg menu-prev-btn" title="Назад">
        <button class="d-inline-block slider-nav-btn me-2">
          <icon-caret-left class="icon-60" />
        </button>
      </div>
      <div ref="nextBtn" class="menu-btn-bg menu-next-btn">
        <button class="d-inline-block slider-nav-btn" title="Вперед">
          <icon-caret-right class="icon-60" />
        </button>
      </div>
      <div ref="swiperPagination" class="swiper-pagination swiper-pagination-long-bullet" />
    </div>
  </div>
</template>
<script setup lang="ts">
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import IconCaretLeft from '~/components/Icons/IconCaretLeft.vue'
import IconCaretRight from '~/components/Icons/IconCaretRight.vue'
import { useHeaderType } from '~/composables/useHeaderType.js'

const pageHeader = useHeaderType()
const swiperRef = ref()
const activeBanners = ref([])
const activeFilter = ref(0)
const swiperSlider = ref()
const banners = ref(0)

function switchRoomNumber(res: Number) {
  if (res !== 0) {
    activeBanners.value = banners.value.filter(i => i.count === res)
  } else {
    activeBanners.value = banners.value
  }
  activeFilter.value = res
  setTimeout(() => {
    swiperSlider.value.update()
  }, 300)
}

onMounted(() => {
  banners.value = pageHeader.value.type === 1 ? banners1 : banners2
  swiperSlider.value = new Swiper(swiperRef.value, {
    modules: [Navigation, Pagination, Autoplay],
    // autoplay: {
    //   delay: 5000
    // },
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    mousewheel: {
      releaseOnEdges: true
    },
    navigation: {
      prevEl: swiperRef.value.parentNode.querySelector('.menu-prev-btn'),
      nextEl: swiperRef.value.parentNode.querySelector('.menu-next-btn')
    },
    pagination: {
      el: swiperRef.value.parentNode.querySelector('.swiper-pagination'),
      clickable: true
    }
  })
  activeBanners.value = banners.value
})

const banners1 = [
  {
    title: '3-комнатная квартира для семьи с детьми',
    area: '95',
    count: 3,
    url: '/',
    img: '/images/sections/screen_7_1.jpg'
  },
  {
    title: '2-комнатная квартира для семьи с детьми',
    area: '195',
    count: 2,
    url: '/',
    img: '/images/sections/screen_7_1.jpg'
  }
]
const banners2 = [
  {
    title: '3-комнатная квартира для семьи с детьми',
    area: '95',
    count: 3,
    url: '/',
    img: '/images/sections/screen_7_1.jpg'
  },
  {
    title: '2-комнатная квартира для семьи с детьми',
    area: '195',
    count: 2,
    url: '/',
    img: '/images/page2/section3_1.jpg'
  }
]

</script>
