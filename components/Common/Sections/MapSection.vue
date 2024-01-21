<template>
  <section id="map-index" class="map-index b-title">
    <div class="row">
      <div class="col-md-6 p-0">
        <img src="/images/sections/map_block.png" alt="" class="w-100">
      </div>
      <div class="col-md-6 p-0">
        <div class="content">
          <h3>Расположение</h3>
          <hr class="separator-slider">
          <div class="text">
            Удобно, когда все рядом - магазины и торговые комплексы, аптеки, спортивные центры, медицинские учреждения, образовательные учреждения, общественный транспорт
          </div>
          <div class="icons-block d-flex flex-column">
            <div v-for="(item, index) in items" :key="index" class="item position-relative">
              <component :is="item.img" />
              <div class="h7">
                {{ item.title }}
              </div>
              <div class="text">
                {{ item.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import IconCart from '~/components/Icons/IconCart.vue'
import IconBear from '~/components/Icons/IconBear.vue'
import IconCalc from '~/components/Icons/IconCalc.vue'
import IconHospital from '~/components/Icons/IconHospital.vue'
import IconBus from '~/components/Icons/IconBus.vue'
const items = [
  {
    title: 'Продуктовый магазин',
    text: '436 метров',
    img: IconCart
  },
  {
    title: 'Детский сад',
    text: '394 метра',
    img: IconBear
  },
  {
    title: 'Школа-сад',
    text: '934 метров',
    img: IconCalc
  },
  {
    title: 'Медицинский центр',
    text: '730 метров',
    img: IconHospital
  },
  {
    title: 'Автобусная остановка',
    text: '670 метров',
    img: IconBus
  }
]

</script>
<style scoped lang="scss">
.map-index {
  img {
    max-height: 985px;
    height: 985px;
  }

  .content {
    padding: 4.875rem 0 6.625px 4.4375rem;
    max-width: 38.5rem;
    .icons-block {
      margin-top: 3.8125rem;

      .item {
        margin-top: 2.4375rem;
        padding-left: 6.25rem;
        svg{
          position: absolute;
          left: 0;
          top: 0;
        }
        .h7 {
          color: #323846;
          font-weight: 600;
        }

        .text {
          font-size: 1.25rem;
          margin-top: 1.25rem;
        }
      }
      .item:first-of-type{
        margin-top: 0;
      }
    }
  }
}
</style>
