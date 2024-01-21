<template>
  <section id="calculate-index" class="calculate-index">
    <div class="container">
      <div class="row">
        <div class="col-md-6 p-0 calc-block">
          <h5>
            Лучшие предложения от банков-партнеров
          </h5>
          <div class="content">
            <div class="calculate-block">
              <div class="h7">
                Стоимость, ₽
              </div>
              <label for="price" class="form-label h7">
                {{ correctPriceFormat(price) }} ₽
              </label>
              <div class="wrapper">
                <div ref="mozColor" class="moz-el" />
                <input
                  id="price"
                  ref="calcInput"
                  type="range"
                  :min="startRangePrice"
                  :max="maxRangePrice"
                  step="1"
                  class="calcInput"
                  :value="startValueRangePrice"
                  @input="progressPriceChange"
                >
              </div>
              <div class="range-values d-flex justify-content-between">
                <div class="item">
                  1 млн
                </div>
                <div class="item">
                  5 млн
                </div>
                <div class="item">
                  10 млн
                </div>
              </div>
            </div>
            <div class="calculate-block">
              <div class="h7">
                Первоначальный взнос, ₽
              </div>
              <label for="price" class="form-label h7">
                {{ correctPriceFormat(initialPrice) }} ₽
              </label>
              <div class="wrapper">
                <input
                  id="initialPrice"
                  ref="initialPriceRef"
                  type="range"
                  :min="startInitialRangePrice"
                  :max="maxInitialRangePrice"
                  step="1"
                  class="calcInput calcInputInitial"
                  :value="startInitialValueRangePrice"
                  @input="progressInitialPriceChange"
                >
              </div>
              <div class="range-values d-flex justify-content-between">
                <div class="item">
                  100 тыс
                </div>
                <div class="item">
                  1.25 млн
                </div>
                <div class="item">
                  2.5 млн
                </div>
              </div>
            </div>
            <div class="calculate-block">
              <div class="h7">
                Срок кредитования, лет
              </div>
              <label for="years" class="form-label h7 text-center w-100 d-flex justify-content-between">
                <div class="cursor-pointer" @click="minusYear">
                  <icon-minus />
                </div>
                {{ getYears() }}
                <div class="cursor-pointer" @click="plusYear">
                  <icon-plus />
                </div>
              </label>
              <div class="wrapper">
                <input
                  id="years"
                  ref="yearsRef"
                  type="range"
                  :min="startYearsRange"
                  :max="maxYearsRange"
                  step="1"
                  class="calcInput calcInputYears"
                  :value="startYearsValueRange"
                  @input="progressYearsChange"
                >
              </div>
              <div class="range-values d-flex justify-content-between">
                <div class="item">
                  1 год
                </div>
                <div class="item">
                  15 лет
                </div>
                <div class="item">
                  30 лет
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 p-0">
          <div class="position-relative calc-swiper">
            <div ref="swiperCalc" class="swiper position-relative">
              <div class="swiper-wrapper">
                <div v-for="(item, index) in banks" :key="index" class="swiper-slide position-relative">
                  <div v-for="(bank, y) in item" :key="y" class="card position-relative">
                    <div class="d-flex justify-content-between">
                      <img :src="bank.logo" alt="">
                      <div class="d-flex flex-column">
                        <div class="h7">
                          {{ bank.title }}
                        </div>
                        <div class="text card-subtitle">
                          Первоначальный взнос от {{ bank.initialBid }}%
                        </div>
                      </div>
                      <div class="btn-wrapper">
                        <button class="btn">
                          Оставить заявку
                        </button>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between card-footer">
                      <div class="item">
                        <div class="text">
                          Ежемесячный платеж
                        </div>
                        <div class="h7">
                          {{ correctPriceFormat(bank.monthPrice) }} ₽
                        </div>
                      </div>
                      <div class="item">
                        <div class="text">
                          Ставка
                        </div>
                        <div class="values">
                          <span class="text">от</span>
                          <span class="h7">{{ bank.bid }} %</span>
                        </div>
                      </div>
                      <div class="item">
                        <div class="text">
                          Срок
                        </div>
                        <div class="values">
                          <span class="text">до</span>
                          <span class="h7">{{ bank.years }} лет</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div ref="swiperPagination" class="swiper-pagination swiper-pagination-long-bullet" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import IconMinus from '~/components/Icons/IconMinus.vue'
import IconPlus from '~/components/Icons/IconPlus.vue'
import 'swiper/css'
import 'swiper/css/pagination'

const calcInput = ref()
const initialPriceRef = ref()
const yearsRef = ref()
const mozColor = ref()
const price = ref(0)
const initialPrice = ref(0)
const years = ref(0)
const swiperCalc = ref()
// Стоимость
const maxRangePrice = 10000000
const startRangePrice = 1000000
const startValueRangePrice = 5000000
// Первоначальный взнос
const maxInitialRangePrice = 2500000
const startInitialRangePrice = 100000
const startInitialValueRangePrice = 1250000
// Срок кредитования
const maxYearsRange = 30
const startYearsRange = 1
const startYearsValueRange = 15

function progressPriceChange() {
  price.value = calcInput.value.value
  const priceValue = ((calcInput.value.value - startRangePrice) * 100) / (maxRangePrice - startRangePrice)
  calcInput.value.style = `background: -webkit-linear-gradient(left, #000 0%, #000 ${priceValue}%, #fff ${priceValue}%, #fff 100%);`
  mozColor.value.style = `--sq-color: -webkit-linear-gradient(left, #000 0%, #000 ${priceValue}%, #fff ${priceValue}%, #fff 100%);`
}

function progressInitialPriceChange() {
  initialPrice.value = initialPriceRef.value.value
  const priceValue = ((initialPriceRef.value.value - startInitialRangePrice) * 100) / (maxInitialRangePrice - startInitialRangePrice)
  initialPriceRef.value.style = `background: -webkit-linear-gradient(left, #000 0%, #000 ${priceValue}%, #fff ${priceValue}%, #fff 100%);`
  mozColor.value.style = `--sw-color: -webkit-linear-gradient(left, #000 0%, #000 ${priceValue}%, #fff ${priceValue}%, #fff 100%);`
}

function progressYearsChange() {
  years.value = yearsRef.value.value
  const yearValue = ((yearsRef.value.value - startYearsRange) * 100) / (maxYearsRange - startYearsRange)
  yearsRef.value.style = `background: -webkit-linear-gradient(left, #000 0%, #000 ${yearValue}%, #fff ${yearValue}%, #fff 100%);`
  mozColor.value.style = `--se-color: -webkit-linear-gradient(left, #000 0%, #000 ${yearValue}%, #fff ${yearValue}%, #fff 100%);`
}

function correctPriceFormat(price) {
  return Number(price).toLocaleString()
}

function minusYear() {
  if (Number(yearsRef.value.value) > 1) {
    yearsRef.value.value--
  }
  progressYearsChange()
}

function plusYear() {
  if (Number(yearsRef.value.value) < 30) {
    yearsRef.value.value++
  }
  progressYearsChange()
}

function getYears() {
  return years.value + declination(years.value, [' год', ' года', ' лет'])
}

function declination(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2]
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
}

function startCalculate() {
  // Стоимость
  price.value = startValueRangePrice
  const priceValue = ((price.value - startRangePrice) * 100) / (maxRangePrice - startRangePrice)
  calcInput.value.style = `background: -webkit-linear-gradient(left, #000 0%, #000 ${priceValue}%, #fff ${priceValue}%, #fff 100%);`
  mozColor.value.style = `--sq-color: -webkit-linear-gradient(left, #000 0%, #000 ${priceValue}%, #fff ${priceValue}%, #fff 100%);`
  // Первоначальный взнос
  initialPrice.value = startInitialValueRangePrice
  const initialPriceValue = ((initialPrice.value - startInitialRangePrice) * 100) / (maxInitialRangePrice - startInitialRangePrice)
  initialPriceRef.value.style = `background: -webkit-linear-gradient(left, #000 0%, #000 ${initialPriceValue}%, #fff ${initialPriceValue}%, #fff 100%);`
  mozColor.value.style = `--sw-color: -webkit-linear-gradient(left, #000 0%, #000 ${initialPriceValue}%, #fff ${initialPriceValue}%, #fff 100%);`
  // Срок кредитования
  years.value = startYearsValueRange
  const yearValue = ((years.value - startYearsRange) * 100) / (maxYearsRange - startYearsRange)
  yearsRef.value.style = `background: -webkit-linear-gradient(left, #000 0%, #000 ${yearValue}%, #fff ${yearValue}%, #fff 100%);`
  mozColor.value.style = `--se-color: -webkit-linear-gradient(left, #000 0%, #000 ${yearValue}%, #fff ${yearValue}%, #fff 100%);`
}

onMounted(() => {
  startCalculate()
  new Swiper(swiperCalc.value, {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    autoplay: {
      delay: 15000
    },
    mousewheel: {
      releaseOnEdges: true
    },
    pagination: {
      el: swiperCalc.value.parentNode.querySelector('.swiper-pagination'),
      clickable: true
    }
  })
})

const banks = [
  [
    {
      logo: '/images/logo/dom_rf.png',
      title: 'ДОМ РФ Банк',
      initialBid: '15',
      monthPrice: '17323',
      bid: '1,4',
      years: '20'
    },
    {
      logo: '/images/logo/sberbank.png',
      title: 'Сбербанк',
      initialBid: '15',
      monthPrice: '17323',
      bid: '1,4',
      years: '20'
    },
    {
      logo: '/images/logo/vtb.png',
      title: 'ВТБ',
      initialBid: '15',
      monthPrice: '17323',
      bid: '1,4',
      years: '20'
    }
  ],
  [
    {
      logo: '/images/logo/dom_rf.png',
      title: 'ДОМ РФ Банк',
      initialBid: '15',
      monthPrice: '17323',
      bid: '1,4',
      years: '20'
    },
    {
      logo: '/images/logo/sberbank.png',
      title: 'Сбербанк',
      initialBid: '15',
      monthPrice: '17323',
      bid: '1,4',
      years: '20'
    },
    {
      logo: '/images/logo/vtb.png',
      title: 'ВТБ',
      initialBid: '15',
      monthPrice: '17323',
      bid: '1,4',
      years: '20'
    }
  ]
]
</script>
