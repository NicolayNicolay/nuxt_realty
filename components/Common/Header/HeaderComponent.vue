<template>
  <header class="bd-header order-1">
    <div class="bd-header-start position-relative">
      <div ref="header" class="header">
        <div class="container">
          <div class="row align-items-center header-first-row">
            <div class="col-4 col-md-3">
              <router-link to="/" class="text-decoration-none">
                <logo-armada />
              </router-link>
            </div>
            <div class="col-md-3 text-center d-none d-lg-block">
              <a href="#" class="fs-20">Выбрать квартиру</a>
            </div>
            <div class="col-md-6 d-none d-lg-block">
              <div class="d-flex align-items-center justify-content-end">
                <div class="phone-block d-flex align-items-center">
                  <icon-phone />
                  <a href="tel:+84232948088">8 (423) 294 80 88</a>
                </div>
                <button class="btn btn-primary wts-btn">
                  Написать в Whatsapp
                </button>
              </div>
            </div>
            <div class="col-8 d-block d-lg-none">
              <div class="mobile-menu text-end">
                <icon-phone-blue class="icon" />
                <icon-wats class="icon" />
                <icon-menu class="icon" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" />
              </div>
              <mobile-menu />
            </div>
          </div>
          <div class="row align-items-center header-second-row d-none d-lg-block">
            <div class="col-12">
              <div class="menu-wrapper">
                <div class="menu d-flex justify-content-between">
                  <div v-for="(item, index) in menuItems" :key="index" class="menu-item">
                    <a href="#">
                      {{ item }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main-slider />
    </div>
    <div class="bd-header-background">
      <img src="~assets/images/main_screen.jpg" alt="" class="d-none d-md-block">
    </div>
    <sales-component />
    <circle-component />
    <chevron-component />
  </header>
</template>
<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import LogoArmada from '~/components/Common/Header/LogoArmada.vue'
import IconPhone from '~/components/Icons/IconPhone.vue'
import MainSlider from '~/components/Sliders/MainSlider.vue'
import SalesComponent from '~/components/Common/Badges/SalesComponent.vue'
import CircleComponent from '~/components/Common/Badges/CircleComponent.vue'
import ChevronComponent from '~/components/Common/Badges/ChevronComponent.vue'
import MobileMenu from '~/components/Common/Menu/MobileMenu.vue'
import IconWats from '~/components/Icons/IconWats.vue'
import IconMenu from '~/components/Icons/IconMenu.vue'
import IconPhoneBlue from '~/components/Icons/IconPhoneBlue.vue'

const { y } = useWindowScroll()
const header = ref()

watch(y, (scroll) => {
  if (Number(scroll) > 0 && header.value.style.background !== '#323846') {
    setTimeout(() => {
      header.value.style.background = '#323846'
    }, 150)
  } else if (Number(scroll) === 0) {
    setTimeout(() => {
      header.value.style.background = 'none'
    }, 150)
  }
})
const menuItems = [
  'О проекте', 'Преимущества', 'Записаться', 'Расположение', 'Сроки сдачи', 'Квартиры', 'Ход строительства', 'Условия', 'Партнеры', 'Новости'
]
</script>
<style scoped lang="scss">
.header-alert {
  position: absolute;
  bottom: 0;
  width: 100%;

  .alert {
    padding-top: 2.6rem;
    padding-bottom: 3rem;

    .h7, .text {
      color: white;
    }

    .text {
      margin-top: 0.625rem;
    }
  }
}

.background {
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #323846;
  opacity: 0.5;
}
</style>
