<template>
  <div class="container">
    <div class="position-relative construction-slider">
      <div class="position-relative">
        <div ref="swiperRef" class="swiper position-relative">
          <div class="swiper-wrapper">
            <div v-for="(item, index) in items" :key="index" class="swiper-slide position-relative">
              <div class="slide-wrapper">
                <img :src="item.img" alt="">
                <div class="h7" v-html="item.text"></div>
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

onMounted(() => {
  new Swiper(swiperRef.value, {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 4,
    autoplay: {
      delay: 10000
    },
    mousewheel: {
      releaseOnEdges: true
    },
    navigation: {
      prevEl: swiperRef.value.parentNode.querySelector('.menu-prev-btn'),
      nextEl: swiperRef.value.parentNode.querySelector('.menu-next-btn')
    }
  })
})

const items = [
  {
    img: '/images/sections/section_12_1.png',
    text: 'Закрытая охраняемая территория, круглосуточное видео-<br>наблюдение'
  },
  {
    img: '/images/sections/section_12_2.png',
    text: 'Удобная транспортная доступность<br>по всем направлениям'
  },
  {
    img: '/images/sections/section_12_3.png',
    text: 'Экологически чистый район<br>в зеленой зоне<br>с мягким микроклиматом'
  },
  {
    img: '/images/sections/section_12_4.png',
    text: 'Энергосберегаю-щие технологии строительства'
  },
  {
    img: '/images/sections/section_12_5.png',
    text: 'Экологически чистый район<br>в зеленой зоне<br>с мягким микроклиматом'
  },
  {
    img: '/images/sections/section_12_6.png',
    text: 'Экологически чистый район<br>в зеленой зоне<br>с мягким микроклиматом'
  },
  {
    img: '/images/sections/section_12_7.png',
    text: 'Экологически чистый район<br>в зеленой зоне<br>с мягким микроклиматом'
  },
  {
    img: '/images/sections/section_12_8.png',
    text: 'Экологически чистый район<br>в зеленой зоне<br>с мягким микроклиматом'
  },
  {
    img: '/images/sections/section_12_9.png',
    text: 'Экологически чистый район<br>в зеленой зоне<br>с мягким микроклиматом'
  },
  {
    img: '/images/sections/section_12_10.png',
    text: 'Экологически чистый район<br>в зеленой зоне<br>с мягким микроклиматом'
  }
]

</script>
<style scoped lang="scss">
.construction-slider {
  margin-top: 2rem;
  .slide-wrapper {
    img {
      width: 112px;
      height: 112px;
    }
    .h7{
      margin-top: 1.75rem;
      padding-right: 2rem;
      word-wrap: break-word;
      font-weight: 600;
      color: #5F6678;
    }
  }
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
