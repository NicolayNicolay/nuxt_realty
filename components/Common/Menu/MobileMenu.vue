<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
              <h6 class="g-extra">
                О проекте
              </h6>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
            <div class="accordion-body">
              <ul>
                <li>
                  <a href="#">О проекте</a>
                </li>
                <li>
                  <a href="#">Преимущества</a>
                </li>
                <li>
                  <a href="#">Записаться</a>
                </li>
                <li>
                  <a href="#">Расположение</a>
                </li>
                <li>
                  <a href="#">Сроки сдачи</a>
                </li>
                <li>
                  <a href="#">Квартиры</a>
                </li>
                <li>
                  <a href="#">Ход строительства</a>
                </li>
                <li>
                  <a href="#">Условия</a>
                </li>
                <li>
                  <a href="#">Партнеры</a>
                </li>
                <li>
                  <a href="#">Новости</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              <h6 class="g-extra">
                Выбрать квартиру
              </h6>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div class="accordion-body">
              <ul>
                <li>
                  <a href="#">О проекте</a>
                </li>
                <li>
                  <a href="#">Преимущества</a>
                </li>
                <li>
                  <a href="#">Планировки</a>
                </li>
                <li>
                  <a href="#">Каталог</a>
                </li>
                <li>
                  <a href="#">Выбор квартир</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column border-top">
        <div class="phone-block d-flex align-items-center">
          <icon-phone-dark-blue />
          <a href="tel:+84232948088">8 (423) 294 80 88</a>
        </div>
        <button class="btn btn-primary wts-btn ms-0">
          Написать в Whatsapp
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import IconPhoneDarkBlue from '~/components/Icons/IconPhoneDarkBlue.vue'

export default {
  name: 'MobileMenu',
  components: {IconPhoneDarkBlue}
}
</script>

<style scoped lang="scss">
.offcanvas {
  a {
    text-shadow: none;
  }

  h6 {
    font-size: 1.875rem;
    color: #007395;
    line-height: 2.25rem;
  }

  .offcanvas-body {
    padding: 0 1.3125rem;

    .border-top {
      margin-top: 1.3125rem;
      border-top: 1px solid #60C3D0 !important;
    }

    .accordion-item {
      border: none;
      margin-bottom: 0.75rem;

      .accordion-body {
        padding: 0;

        ul {
          list-style: none;
          margin: 0;
          padding: 0;

          li {
            margin-top: 1rem;

            a {
              color: #007395;
              font-size: 1.5rem;
            }
          }
        }
      }

      .accordion-button::after {
        width: 1.25rem;
        height: 0.75rem;
        --bs-accordion-btn-icon: url(/images/svg/chevron-down-menu.svg);
        --bs-accordion-btn-active-icon: url(/images/svg/chevron-down-menu.svg);
      }
      .accordion-button:focus{
        box-shadow: none;
      }
      .accordion-button:not(.collapsed) {
        box-shadow: none;

        h6 {
          color: #5F6678;
        }
      }

      .accordion-button {
        padding: 0;
        background: white;
      }
    }
  }

  .btn-close {
    --bs-btn-close-bg: url(/images/svg/cross.svg);
    --bs-btn-close-opacity: 1;
  }

  .offcanvas-header {
    justify-content: flex-end;
    --bs-offcanvas-padding-y: 3rem;
    --bs-offcanvas-padding-x: 1.3125rem;
  }

  .phone-block {
    margin-top: 1.6875rem;

    a {
      font-size: 1.75rem;
      color: #60C3D0;
      letter-spacing: 3px;
    }

    svg {
      g {
        stroke: #60C3D0;
      }
    }
  }

  .wts-btn {
    margin-top: 1.25rem;
  }
}
</style>
