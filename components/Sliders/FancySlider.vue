<template>
  <section class="fancy-section b-title" :class="props.type === 1? 'fancy-1':'fancy-2'">
    <div class="container">
      <div class="row">
        <div :class="props.type === 1? 'order-2':'order-1'" class="col-lg-6">
          <fancy-component
            :options="{
              Carousel: {
                infinite: false,
              },
            }"
          >
            <div class="position-relative fancy-slider">
              <div ref="swiperRef" class="swiper position-relative">
                <div class="swiper-wrapper">
                  <div v-for="(item, number) in banners[props.numberSection]" :key="number" class="swiper-slide position-relative">
                    <div class="slide-wrapper">
                      <a :data-fancybox="'gallery-'+index" :href="item.img">
                        <img :src="item.img" alt="">
                      </a>
                    </div>
                  </div>
                </div>
                <div ref="swiperPagination" class="swiper-pagination swiper-pagination-long-bullet" />
              </div>
              <div ref="swiperThumb" thumbsslider="" class="swiper swiper-thumb" @swiper="setThumbsSwiper">
                <div class="swiper-wrapper" aria-live="polite">
                  <div
                    v-for="(item, index) in banners[props.numberSection]"
                    :key="index"
                    class="swiper-slide position-relative"
                    :style="[index >= 2 ? 'opacity: 0.4' :'', index === 1 ? 'opacity: 0.7' :'']"
                    role="group"
                    :aria-label="(index + 1) + '/'+ banners.length"
                  >
                    <img :src="item.img" width="176" height="115" alt="">
                  </div>
                </div>
                <span class="swiper-notification" aria-live="assertive" aria-atomic="true" />
              </div>
            </div>
          </fancy-component>
        </div>
        <div :class="props.type === 1? 'order-1':'order-2'" class="col-lg-6">
          <div class="fancy-content">
            <div class="h7">
              {{ props.subtitle }}
            </div>
            <h5>
              {{ props.title }}
            </h5>
            <hr class="separator-slider">
            <div class="text" v-html="props.text"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import Swiper, { Navigation, Pagination, Thumbs, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import FancyComponent from '~/components/Fancybox/FancyComponent.vue'

const swiperRef = ref()
const swiperThumb = ref()
const swiperPagination = ref()

let thumbSwiper = ref(0)
let mainSwiper = ref(0)

const props = defineProps({
  type: {
    type: Number,
    default: 1
  },
  index: {
    type: Number,
    default: 1
  },
  subtitle: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  },
  numberSection: {
    type: Number,
    default: 3
  }
})

onMounted(() => {
  thumbSwiper = new Swiper(swiperThumb.value, {
    modules: [Navigation, Pagination, Thumbs],
    spaceBetween: 10,
    slidesPerView: 3,
    mousewheel: {
      releaseOnEdges: true
    },
    freeMode: true,
    watchSlidesProgress: true
  })
  mainSwiper = new Swiper(swiperRef.value, {
    modules: [Navigation, Pagination, Thumbs, Autoplay],
    slidesPerView: 1,
    autoplay: {
      delay: 5000
    },
    mousewheel: {
      releaseOnEdges: true
    },
    pagination: {
      el: swiperPagination.value,
      clickable: true
    },
    thumbs: {
      swiper: thumbSwiper
    }
  })
})

const setThumbsSwiper = (swiper) => {
  mainSwiper.value = swiper
}

const banners = {
  3: [
    {
      img: '/images/sections/screen_3_1.jpg'
    },
    {
      img: '/images/sections/screen_3_2.jpg'
    },
    {
      img: '/images/sections/screen_3_3.jpg'
    },
    {
      img: '/images/sections/screen_3_4.jpg'
    }
  ],
  4: [
    {
      img: '/images/sections/screen_4_1.jpg'
    },
    {
      img: '/images/sections/screen_4_2.jpg'
    },
    {
      img: '/images/sections/screen_4_3.jpg'
    },
    {
      img: '/images/sections/screen_4_4.jpg'
    }
  ],
  5: [
    {
      img: '/images/sections/screen_5_1.jpg'
    },
    {
      img: '/images/sections/screen_5_2.jpg'
    },
    {
      img: '/images/sections/screen_5_3.jpg'
    },
    {
      img: '/images/sections/screen_5_4.jpg'
    }
  ]
}

</script>
<style scoped lang="scss">
.fancy-1 {
  background-color: #ECF7F9;

  .fancy-content {
    padding-right: 6.25rem;
  }

  .swiper-pagination {
    right: 1.25rem;
  }
}

.fancy-2 {
  .fancy-content {
    padding-left: 6.25rem;
  }

  .swiper-pagination {
    left: 1.25rem;
  }
}

.btn-secondary {
  --bs-btn-hover-bg: var(--bs-primary);
  --bs-btn-hover-border-color: var(--bs-primary);
}

.swiper-slide {
  position: relative;
  overflow: hidden;

  img {
    border-radius: 1rem;
  }
}

.swiper-pagination {
  position: absolute;
  text-align: right;
  width: auto;
  bottom: 0.625rem;
  --swiper-pagination-bullet-size: 1rem;
  --swiper-pagination-bullet-inactive-color: #857d7d;
  --swiper-pagination-bullet-horizontal-gap: .2rem;
  --swiper-pagination-color: white;
  --swiper-pagination-bullet-active: 1rem;
}

</style>
