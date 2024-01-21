<template>
  <!-- Modal -->
  <div
    id="salesModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="salesModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content offer-index position-relative">
        <sales-from-component />
        <a href="#" data-bs-dismiss="modal">
          <icon-cross-modal />
        </a>
        <div class="container">
          <h5>
            Акции
          </h5>
          <hr class="separator-slider">
          <div class="h7 subtitle">
            Наши эксперты предложат акции, трейд-ин, условия госпрограмм, льготные и субсидирование ставки по ипотеке*!
          </div>
          <div class="gallery">
            <div class="row">
              <div class="col-md-8">
                <div class="item item-small">
                  <div class="background">
                    <img src="/images/banners/action_1.jpg" alt="">
                  </div>
                  <div class="content">
                    <div class="text-wrapper d-flex">
                      <img src="/images/forms/formIcon1.png">
                      <div class="d-flex flex-column ms-3">
                        <div class="h7">
                          Дарим аренду вашего жилья!
                        </div>
                        <div class="text-gold">
                          Если вы арендуете жилье или продаете свою квартиру, чтобы купить новую в ЖК Чайка, мы подарим аренду вашего жилья до сдачи дома. Ввод в эксплуатацию первого дома уже в 2023 году. Акция распространяется на квартиры
                          в
                          первом доме Бриз.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item item-small d-flex align-items-end">
                  <div class="background">
                    <img src="/images/banners/action_2.jpg" alt=""></div>
                  <div class="content">
                    <div class="text-wrapper d-flex">
                      <img src="/images/forms/formIcon2.png">
                      <div class="d-flex flex-column ms-3">
                        <div class="h7">
                          Выгодная программа Trade-in
                        </div>
                        <div class="text-gold">
                          Сделаем продажу вашей квартиры комфортной с программой Trade in (трейд-ин). Заботы по реализации вашей недвижимости берет на себя агентство партнер, без скрытых комиссий и платежей!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="item item-big">
                  <div class="background">
                    <img src="/images/banners/action_3.jpg" alt=""></div>
                  <div class="content">
                    <div class="text-wrapper">
                      <img src="/images/forms/formIcon3.png">
                      <div class="d-flex flex-column">
                        <div class="h7">
                          Дизайн проект в подарок!
                        </div>
                        <div class="text-gold">
                          Дизайн проект в подарок! Разработаем индивидуальный проект для вашей новой квартиры.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="h7 g-extra">
            Подробности в отделе продаж по тел. 8 (423) 294-80-88
          </div>
          <div class="after-text">
            <div class="text">
              Сроки проведения акций до 15.08.2023 г.
            </div>
            <div class="text">
              * Субсидирование ипотечной ставки действует на определенный ряд квартир, расчет субсидирования производится индивидуально. Подробности уточняйте у менеджера отдела продаж ГК Армада.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconCrossModal from '~/components/Icons/IconCrossModal.vue'
import SalesFromComponent from '~/components/Common/Badges/SalesFromComponent.vue'
</script>
<style scoped lang="scss">
.modal {
  --bs-modal-width: 1286px;

  .modal-content {
    padding: 50px 61px 45px 57px;

    svg {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }
  }

  .offer-index {
    border-radius: 0;
    background-color: #FFF;

    .separator-slider {
      border-top: 2px solid rgba(96, 195, 208, 1);
      margin-top: 30px;
      margin-bottom: 24px;
    }

    .gallery {
      margin-top: 34px;
      margin-bottom: 37px;

      .ms-3 {
        margin-left: 34px !important;
      }

      .item-small {
        .background {

          max-height: 244px;
        }
      }

      .item {
        .background {
          img {
            opacity: 0.4;
          }
        }

        .h7 {
          color: white;
        }

        .text-gold {
          color: #FADA8F !important;
          margin-top: 0.625rem;
        }
      }

      .item-big {
        .h7 {
          margin-top: 14px;
        }
      }
    }

    .subtitle {
      letter-spacing: 2px;
      max-width: 1032px;
    }

    .after-text {
      margin-top: 25px;

      .text:first-of-type {
        margin-bottom: 20px;
      }
    }

    .sales-badge {
      position: absolute;
      left: -112px;
      top: 46px;
      display: flex;
      background-color: #60C3D0;
      color: white;
      border-radius: 6px 6px 0 0;
      padding: 14px 28px;
      font-weight: 500;
      align-items: center;
      transform: rotate(270deg);
      font-size: 1.5rem;
      text-shadow: none;

      svg {
        margin-left: 0.5625rem;
        transform: rotate(90deg);
      }
    }
  }
}
</style>
