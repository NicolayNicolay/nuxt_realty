<template>
  <div class="container">
    <div class="position-relative main-swiper">
      <div ref="swiperRef" class="swiper position-relative">
        <div v-if="pageHeader.type === 1" class="swiper-wrapper">
          <div v-for="(item, index) in banners" :key="index" class="swiper-slide position-relative">
            <div class="slide-wrapper">
              <div class="slide-text">
                <div class="slide-logo">
                  <img :src="item.logo" alt="">
                </div>
                <h1 v-html="item.text" />
                <div class="slide-btn">
                  <button class="btn btn-lg btn-primary" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                    {{ item.text_btn }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="swiper-wrapper">
          <div v-for="(item, index) in banners_2" :key="index" class="swiper-slide position-relative">
            <div class="slide-wrapper">
              <div class="slide-text">
                <h4 class="mt-0 mb-0" v-html="item.title_1" />
                <h1 class="mt-0 mb-0" v-html="item.title_2" />
                <h4 class="mt-3" v-html="item.title_3" />
                <div class="subtitle">
                  <h6>
                    Квартиры с террасами и панорамными видами на Амурский залив
                  </h6>
                </div>
                <div class="slide-btn">
                  <button class="btn btn-lg btn-primary" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                    {{ item.text_btn }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
import { useHeaderType } from '~/composables/useHeaderType'

const swiperRef = ref()
const pageHeader = useHeaderType()

onMounted(() => {
  new Swiper(swiperRef.value, {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    autoplay: {
      delay: 5000
    },
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
})

const banners = [
  {
    text_btn: 'Записаться на показ',
    text: 'Ваш дом <br> с видом на море',
    url: '/',
    logo: '/images/logo/Logo_ch.png'
  },
  {
    text_btn: 'Записаться на показ',
    text: 'Ваш дом <br> с видом на море 2',
    url: '/',
    logo: '/images/logo/Logo_ch.png'
  }
]

// eslint-disable-next-line camelcase
const banners_2 = [
  {
    text_btn: 'Записаться на показ',
    text: 'Ваш дом <br> с видом на море',
    title_1: 'Для тех, кто ищет',
    title_2: 'уникальные',
    title_3: 'предложения',
    url: '/'
  },
  {
    text_btn: 'Записаться на показ',
    text: 'Ваш дом <br> с видом на море',
    title_1: 'Для тех, кто ищет',
    title_2: 'уникальные',
    title_3: 'предложения',
    url: '/'
  }
]

</script>
<style scoped lang="scss">
.main-swiper {
  margin-top: 220px;

  h1 {
    margin-top: 2rem;
  }

  .slide-btn {
    margin-top: 50px;
  }

  .slide-logo {
    img {
      max-width: 378px;
      height: auto;
    }
  }

  .slide-wrapper {
    max-width: 100%;
    height: 500px;
  }

  .btn-secondary {
    --bs-btn-hover-bg: var(--bs-primary);
    --bs-btn-hover-border-color: var(--bs-primary);
  }

  .swiper-slide {
    position: relative;
    overflow: hidden;
    border-radius: 15px;
  }

  .swiper-pagination {
    position: absolute;
    text-align: right;
    left: 100% !important;
    width: 5rem !important;
    bottom: 10px;
    --swiper-pagination-bullet-size: 16px;
    --swiper-pagination-bullet-inactive-color: #857d7d;
    --swiper-pagination-bullet-horizontal-gap: 4px;
    --swiper-pagination-color: white;
    --swiper-pagination-bullet-active: 16px;
  }

  .menu-btn-bg {
    position: absolute;
    top: calc(50% - 32px);
  }

  .menu-prev-btn {
    left: -7.1875rem;
  }

  .menu-next-btn {
    right: -7.1875rem;
  }

  .slide-text {
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
}
h4 {
  font-weight: 800;
  font-family: "Gilroy-extrabold", sans-serif;
}

.subtitle {
  max-width: 818px;
  border-top: 1px solid #FFFFFF;

  h6 {
    margin-top: 1.25rem;
  }
}

</style>
