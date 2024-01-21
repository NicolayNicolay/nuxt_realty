<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-3">
          <div class="d-flex justify-content-between justify-content-md-start align-items-center">
            <img src="/images/logo/Logo_ch.png" alt="" class="logo-footer">
            <a href="/armada" class="d-block d-sm-none fs-20">Выбрать квартиру</a>
          </div>
          <div class="policy d-none d-sm-block">
            <a href="#">
              Политика конфиденциальности
            </a>
          </div>
        </div>
        <div class="col-12 col-md-9">
          <div class="content position-relative">
            <div class="d-flex justify-content-between flex-column flex-lg-row">
              <a href="/armada" class="d-none d-sm-block fs-20">Выбрать квартиру</a>
              <div class="phone-wrapper d-flex align-items-center justify-content-between justify-content-lg-end flex-sm-row mt-m-10">
                <div class="phone-block d-flex align-items-center">
                  <icon-phone-grey />
                  <a href="tel:+81234567890">8 (123) 456-78-90</a>
                </div>
                <button class="btn btn-primary wts-btn d-none d-sm-block">
                  Написать в Whatsapp
                </button>
                <a target="_blank" href="https://www.youtube.com/channel/UCuUqxnSHAN-In_BLk1t218w" class="d-sm-none">
                  <icon-you-tube />
                </a>
              </div>
            </div>
            <div class="d-flex">
              <div class="items">
                <div class="item d-flex">
                  <icon-map />
                  <div class="text">
                    г. Владивосток, ул. Мусоргского, д. 2
                  </div>
                </div>
                <div class="item d-flex">
                  <icon-phone-grey />
                  <div class="text">
                    <a href="tel: +81235679012">8 (123) 567-90-12</a> (приемная)
                  </div>
                </div>
                <div class="item d-flex">
                  <icon-mail />
                  <div class="text">
                    <a href="mailto:zkchaika@mail.ru">zkchaika@mail.ru</a>
                  </div>
                </div>
                <div class="item d-sm-none">
                  <a href="#">
                    Политика конфиденциальности
                  </a>
                </div>
                <div class="links d-none d-sm-block">
                  <a target="_blank" href="https://www.youtube.com/channel/UCuUqxnSHAN-In_BLk1t218w">
                    <icon-you-tube />
                  </a>
                </div>
              </div>
            </div>
            <icon-wats class="d-sm-none" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import IconMap from '~/components/Icons/IconMap.vue'
import IconMail from '~/components/Icons/IconMail.vue'
import IconYouTube from '~/components/Icons/IconYouTube.vue'
import IconPhoneGrey from '~/components/Icons/IconPhoneGrey.vue'
import IconWats from '~/components/Icons/IconWats.vue'
</script>
