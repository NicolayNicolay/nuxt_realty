<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7">
        <h3>
          Ход строительства
        </h3>
      </div>
      <div class="col-md-5">
        <div class="swiper-filter">
          <a href="#" class="h7 item" :class="activeYearFilter === 2021? 'active':''" @click.prevent="switchYear(2021)">
            2021
          </a>
          <a href="#" class="h7 item" :class="activeYearFilter === 2022? 'active':''" @click.prevent="switchYear(2022)">
            2022
          </a>
          <a href="#" class="h7 item" :class="activeYearFilter === 2023? 'active':''" @click.prevent="switchYear(2023)">
            2023
          </a>
        </div>
      </div>
    </div>
    <div class="position-relative construction-slider slider-light">
      <div class="position-relative">
        <div ref="swiperRef" class="swiper position-relative">
          <div class="swiper-wrapper">
            <div v-for="(item, index) in activeItems" :key="index" class="swiper-slide position-relative">
              <img data-fancybox="gallery-construction" :src="item.img" alt="">
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
      <div class="swiper-month-filter">
        <a href="#" class="item" :class="activeMonthFilter === 1? 'active':''" @click.prevent="switchMonth(1)">
          Январь
        </a>
        <a href="#" class="item" :class="activeMonthFilter === 2? 'active':''" @click.prevent="switchMonth(2)">
          Февраль
        </a>
        <a href="#" class="item" :class="activeMonthFilter === 3? 'active':''" @click.prevent="switchMonth(3)">
          Март
        </a>
        <a href="#" class="item" :class="activeMonthFilter === 4? 'active':''" @click.prevent="switchMonth(4)">
          Апрель
        </a>
        <a href="#" class="item" :class="activeMonthFilter === 5? 'active':''" @click.prevent="switchMonth(5)">
          Май
        </a>
        <a href="#" class="item" :class="activeMonthFilter === 6? 'active':''" @click.prevent="switchMonth(6)">
          Июнь
        </a>
        <a href="#" class="item" :class="activeMonthFilter === 7? 'active':''" @click.prevent="switchMonth(7)">
          Июль
        </a>
        <a href="#" class="item" :class="activeMonthFilter === 8? 'active':''" @click.prevent="switchMonth(8)">
          Август
        </a>
        <a href="#" class="item" :class="activeMonthFilter === 9? 'active':''" @click.prevent="switchMonth(9)">
          Сентябрь
        </a>
        <a href="#" class="item" :class="activeMonthFilter === 10? 'active':''" @click.prevent="switchMonth(10)">
          Октябрь
        </a>
        <a href="#" class="item" :class="activeMonthFilter === 11? 'active':''" @click.prevent="switchMonth(11)">
          Ноябрь
        </a>
        <a href="#" class="item" :class="activeMonthFilter === 12? 'active':''" @click.prevent="switchMonth(12)">
          Декабрь
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import IconCaretLeft from '~/components/Icons/IconCaretLeft.vue'
import IconCaretRight from '~/components/Icons/IconCaretRight.vue'

const swiperRef = ref()
const activeYearFilter = ref(0)
const activeMonthFilter = ref(0)
const activeItems = ref([])
const swiperSlider = ref()

onMounted(() => {
  swiperSlider.value = new Swiper(swiperRef.value, {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 3,
    spaceBetween: 24,
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
  activeItems.value = banners
})

const banners = [
  {
    img: '/images/sections/screen_12_1.jpg',
    year: 2021,
    month: 1
  },
  {
    img: '/images/sections/screen_12_2.jpg',
    year: 2021,
    month: 2
  },
  {
    img: '/images/sections/screen_12_3.jpg',
    year: 2022,
    month: 2
  },
  {
    img: '/images/sections/screen_12_1.jpg',
    year: 2023,
    month: 3
  },
  {
    img: '/images/sections/screen_12_2.jpg',
    year: 2023,
    month: 1
  },
  {
    img: '/images/sections/screen_12_3.jpg',
    year: 2023,
    month: 1
  }
]

function switchYear (number: Number) {
  activeYearFilter.value = activeYearFilter.value === Number(number) ? 0 : number
  filterElements()
  setTimeout(() => {
    swiperSlider.value.update()
  }, 300)
}
function switchMonth (number: Number) {
  activeMonthFilter.value = activeMonthFilter.value === Number(number) ? 0 : number
  filterElements()
  setTimeout(() => {
    swiperSlider.value.update()
  }, 300)
}
function filterElements ()
{
  let elements = banners
  if (activeYearFilter.value !== 0) {
    elements = elements.filter(i => i.year === activeYearFilter.value)
  }
  if (activeMonthFilter.value !== 0) {
    elements = elements.filter(i => i.month === activeMonthFilter.value)
  }
  activeItems.value = elements
}
</script>
<style scoped lang="scss">
.swiper-filter {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-bottom: 1rem;
  height: 100%;
}

.construction-slider {
  margin-top: 37px;

  .swiper-slide {
    width: 375px;
    height: 292px;
    cursor: pointer;
    img {
      border-radius: 15px;
      width: 100%;
      height: 100%;
    }
  }

  .swiper-month-filter {
    display: flex;
    justify-content: space-between;
    margin-top: 35px;

    a {
      font-size: 1.25rem;
      color: #007395;
      font-family: 'Gilroy', sans-serif;
    }

    a.active {
      color: #B9BFCB;
    }

    a:hover {
      color: #B9BFCB;
    }
  }
}

.swiper-pagination {
  position: absolute;
  bottom: -110px;
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

</style>
