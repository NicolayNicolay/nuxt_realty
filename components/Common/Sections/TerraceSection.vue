<template>
  <section id="terrace-index" class="terrace-index offer-index position-relative">
    <chevron-component />
    <div class="container">
      <div class="gallery position-relative mt-0">
        <div class="row">
          <div class="col-md-8">
            <h5>
              Любуйтесь морем с вашей лоджии или террасы!
            </h5>
          </div>
        </div>
        <div class="slider-light position-relative">
          <div ref="swiperRef" class="swiper position-relative">
            <div class="swiper-wrapper">
              <div class="swiper-slide position-relative">
                <div class="row">
                  <div class="col-md-8">
                    <div class="item item-small">
                      <div class="background">
                        <img src="/images/page2/section2_1.jpg" alt="">
                      </div>
                      <div class="content d-flex align-items-end">
                        <div class="text-wrapper d-flex">
                          <div class="text h7">
                            Потрясающий <br>вид на море
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="item item-small d-flex align-items-end">
                      <div class="background">
                        <img src="/images/page2/section2_2.jpg" alt=""></div>
                      <div class="content d-flex align-items-end">
                        <div class="text-wrapper d-flex">
                          <div class="text h7">
                            Теплое панорамное<br>остекление
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="item item-big">
                      <div class="background">
                        <img src="/images/page2/section2_3.jpg" alt=""></div>
                      <div class="content d-flex align-items-end">
                        <div class="text-wrapper">
                          <div class="text h7">
                            Эксклюзивная<br>планировка
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide position-relative">
                <div class="row">
                  <div class="col-md-4">
                    <div class="item item-big">
                      <div class="background">
                        <img src="/images/page2/section2_4.jpg" alt=""></div>
                      <div class="content d-flex align-items-end">
                        <div class="text-wrapper">
                          <div class="text h7">
                            Рассрочка без переплат,<br> скрытых платежей <br>и комиссий
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="row h-50">
                      <div class="col-md-6">
                        <div class="item item-extra-small">
                          <div class="background">
                            <img src="/images/page2/section2_5.jpg" alt="">
                          </div>
                          <div class="content d-flex align-items-end">
                            <div class="text-wrapper d-flex">
                              <div class="text h7">
                                VRV система для комфортной атмосферы в любое время года
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="item item-extra-small">
                          <div class="background">
                            <img src="/images/page2/section2_6.jpg" alt="">
                          </div>
                          <div class="content d-flex align-items-end">
                            <div class="text-wrapper d-flex">
                              <div class="text h7">
                                Собственные террасы
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="item item-small d-flex align-items-end">
                      <div class="background">
                        <img src="/images/page2/section2_7.jpg" alt=""></div>
                      <div class="content d-flex align-items-end">
                        <div class="text-wrapper d-flex">
                          <div class="text h7">
                            В подарок к каждой квартире кладовая и машино-место в подземном паркинге
                          </div>
                        </div>
                      </div>
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
    </div>
  </section>
</template>
<script setup lang="ts">
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import IconCaretLeft from '~/components/Icons/IconCaretLeft.vue'
import IconCaretRight from '~/components/Icons/IconCaretRight.vue'
import ChevronComponent from '~/components/Common/Badges/ChevronComponent.vue'

const swiperRef = ref()

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
</script>
<style scoped lang="scss">
.terrace-index {
  padding-top: 10.125rem;
  padding-bottom: 4.0625rem;
  background-color: white;

  .gallery {
    margin-bottom: 3.25rem;

    .item-extra-small .content, .item-small .content {
      padding-bottom: 3rem;
      padding-left: 2rem;

      .text {
        margin-left: 0;
      }
    }

    .item-big {
      .text {
        max-width: 276px;
      }
    }

    .item-small {
      .text {
        max-width: 469px;
      }
    }

    .item-extra-small {
      max-height: 284px;
      height: 284px;

      .text {
        max-width: 295px;
      }
    }

    .swiper-pagination {
      position: absolute;
      right: 0;
      top: -80px;
      text-align: right;
      width: auto;
      height: 2rem;
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
  }

  .gallery > .row {
    margin-bottom: 3.25rem;
  }

  .chevron-badge {
    position: absolute;
    top: 5.25rem;
    left: 50%;
  }
}
</style>
