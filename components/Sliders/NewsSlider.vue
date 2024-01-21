<template>
  <section id="news-section" class="news-section slider-light b-title">
    <div class="container">
      <h3>
        Наши новости
      </h3>
      <div class="position-relative common-swiper">
        <div ref="swiperCommon" class="swiper position-relative">
          <div class="swiper-wrapper">
            <div v-for="(item, index) in banners" :key="index" class="swiper-slide position-relative">
              <img :src="item.img" alt="">
              <div class="content">
                <div class="h7">
                  {{ item.title }}
                </div>
                <div class="text">
                  {{ item.text }}
                </div>
                <div class="date">
                  {{ item.date }}
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
  </section>
</template>
<script setup lang="ts">
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import IconCaretLeft from '~/components/Icons/IconCaretLeft.vue'
import IconCaretRight from '~/components/Icons/IconCaretRight.vue'

const swiperCommon = ref()

onMounted(() => {
  new Swiper(swiperCommon.value, {
    modules: [Navigation, Pagination],
    slidesPerView: 3,
    spaceBetween: 24,
    mousewheel: {
      releaseOnEdges: true
    },
    navigation: {
      prevEl: swiperCommon.value.parentNode.querySelector('.menu-prev-btn'),
      nextEl: swiperCommon.value.parentNode.querySelector('.menu-next-btn')
    },
    pagination: {
      el: swiperCommon.value.parentNode.querySelector('.swiper-pagination'),
      clickable: true
    }
  })
})

const banners = [
  {
    date: '05.03.2023',
    title: 'НОВОСТЬ 01',
    text: 'Экосистема жилого комплекса с комфортной и доступной средой для всех возрастов, с детской развивающей и спортивной инфраструктурой в окружении живой природы. Транспортная развязка предусматривает движение во все направления, в 10 минутах ходьбы находятся остановки общественного транспорта с 17 маршрутами.',
    img: '/images/sections/section_18_1.png'
  },
  {
    date: '05.03.2023',
    title: 'НОВОСТЬ 02',
    text: 'Экосистема жилого комплекса с комфортной и доступной средой для всех возрастов, с детской развивающей и спортивной инфраструктурой в окружении живой природы. Транспортная развязка предусматривает движение во все направления, в 10 минутах ходьбы находятся остановки общественного транспорта с 17 маршрутами.',
    img: '/images/sections/section_18_2.png'
  },
  {
    date: '05.03.2023',
    title: 'НОВОСТЬ 03',
    text: 'Экосистема жилого комплекса с комфортной и доступной средой для всех возрастов, с детской развивающей и спортивной инфраструктурой в окружении живой природы. Транспортная развязка предусматривает движение во все направления, в 10 минутах ходьбы находятся остановки общественного транспорта с 17 маршрутами.',
    img: '/images/sections/section_18_3.png'
  },
  {
    date: '05.03.2023',
    title: 'НОВОСТЬ 01',
    text: 'Экосистема жилого комплекса с комфортной и доступной средой для всех возрастов, с детской развивающей и спортивной инфраструктурой в окружении живой природы. Транспортная развязка предусматривает движение во все направления, в 10 минутах ходьбы находятся остановки общественного транспорта с 17 маршрутами.',
    img: '/images/sections/section_18_1.png'
  },
  {
    date: '05.03.2023',
    title: 'НОВОСТЬ 02',
    text: 'Экосистема жилого комплекса с комфортной и доступной средой для всех возрастов, с детской развивающей и спортивной инфраструктурой в окружении живой природы. Транспортная развязка предусматривает движение во все направления, в 10 минутах ходьбы находятся остановки общественного транспорта с 17 маршрутами.',
    img: '/images/sections/section_18_2.png'
  },
  {
    date: '05.03.2023',
    title: 'НОВОСТЬ 03',
    text: 'Экосистема жилого комплекса с комфортной и доступной средой для всех возрастов, с детской развивающей и спортивной инфраструктурой в окружении живой природы. Транспортная развязка предусматривает движение во все направления, в 10 минутах ходьбы находятся остановки общественного транспорта с 17 маршрутами.',
    img: '/images/sections/section_18_3.png'
  }
]

</script>
<style scoped lang="scss">
//News section
.news-section {
  padding-top: 5rem;
  padding-bottom: 5rem;

  .common-swiper {
    margin-top: 2.8125rem;
  }
  .content{
    margin-top: 1.1875rem;
    .h7{
      color: #007395;
    }
    .text{
      margin-top: 0.375rem;
    }
    .date{
      color: #B9BFCB;
      margin-top: 1rem;
    }
  }
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
  margin-top: 137px;
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
  right: 0;
  top: -80px;
  text-align: right;
  width: auto !important;
  left: 90%;
  height: 2rem;
  --swiper-pagination-bullet-size: 16px;
  --swiper-pagination-bullet-inactive-color: #857d7d;
  --swiper-pagination-bullet-horizontal-gap: 4px;
  --swiper-pagination-color: white;
  --swiper-pagination-bullet-active: 16px;
}

.menu-btn-bg {
  position: absolute;
  top: calc(30% - 32px);
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

</style>
