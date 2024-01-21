<template>
  <main class="order-3">
    <advantages-section />
    <fancy-slider
      :index="1"
      :type="1"
      :subtitle="'Окружение'"
      :title="'Здесь легко дышать, интересно гулять, безопасно жить и здорово заниматься спортом!'"
      :text="'Жителям очень повезло с окружением: морской воздух, панорамные виды, экосистема и близость к главной дороге города делают жилой комплекс уникальным и востребованным. До центра на машине всего 15 минут, до остановки общественного транспорта с 17 маршрутами 5 минут пешком.'"
      :number-section="3"
    />
    <fancy-slider
      :index="2"
      :type="2"
      :subtitle="'Территория'"
      :title="'Активный образ жизни заряжает тебя на новые достижения'"
      :text="'Для этого мы предусмотрели: бассейн 25 метров, теннисный корт, поля для игры в волейбол, баскетбол, мини-футбол и бадминтон, воркаут и площадка для занятий йогой, тропа здоровья 1,3 км с безопасным покрытием для прогулок и пробежек.'"
      :number-section="4"
    />
    <fancy-slider
      :index="3"
      :type="1"
      :subtitle="'Качество жизни'"
      :title="'Комфортная среда для отдыха восстанавливает силы и продлевает жизнь'"
      :text="'<b>Для отдыха детей и взрослых</b>: оборудованные дизайнерские площадки с тихими и уютными местами для общения и максимального комфорта, а для домашних питомцев предусмотрена закрытая функциональная площадка с оборудованием.<br><b>Жизнь с видом на море</b>. Выбор различных вариантов планировочных решений: однокомнатные, двухкомнатные и трёхкомнатные квартиры площадью от 40 до 110 квадратных метров, с остекленными просторными лоджиями для максимального естественного света и панорамными видами на Амурский залив.'"
      :number-section="5"
    />
    <common-slider />
    <options-section />
    <form-section />
    <map-section />
    <completion-date-section />
    <construction-progress-section />
    <cause-section />
    <form-section />
    <offer-section />
    <calculate-section />
    <feedback-section />
    <news-slider />
  </main>
</template>
<script setup lang="ts">
import AdvantagesSection from '~/components/Common/Sections/AdvantagesSection.vue'
import FancySlider from '~/components/Sliders/FancySlider.vue'
import CommonSlider from '~/components/Sliders/CommonSlider.vue'
import OptionsSection from '~/components/Common/Sections/OptionsSection.vue'
import FormSection from '~/components/Common/Sections/FormSection.vue'
import MapSection from '~/components/Common/Sections/MapSection.vue'
import CompletionDateSection from '~/components/Common/Sections/CompletionDateSection.vue'
import ConstructionProgressSection from '~/components/Common/Sections/ConstructionProgressSection.vue'
import CauseSection from '~/components/Common/Sections/CauseSection.vue'
import OfferSection from '~/components/Common/Sections/OfferSection.vue'
import CalculateSection from '~/components/Common/Sections/CalculateSection.vue'
import FeedbackSection from '~/components/Common/Sections/FeedbackSection.vue'
import NewsSlider from '~/components/Sliders/NewsSlider.vue'
import { useHeaderType } from '~/composables/useHeaderType'

const pageHeader = useHeaderType()
pageHeader.value.type = 1

</script>
