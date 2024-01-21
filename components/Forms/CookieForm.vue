<template>
  <div ref="cookie" class="cookie-wrapper w-100">
    <div id="cookie_note" class="cookie position-relative">
      <icon-cross @click.prevent="closeCookie" />
      <div class="row">
        <div class="col-md-7">
          <p class="h7 mb-0">
            Продолжая пользоваться сайтом, вы соглашаетесь с использованием cookie. <a href="#">Подробнее</a>
          </p>
        </div>
        <div class="col-md-5">
          <div class="d-flex">
            <button class="button cookie_not_accept btn btn-primary" @click.prevent="closeCookie">
              Не согласен
            </button>
            <button class="button cookie_accept btn btn-primary" @click.prevent="setCookie">
              Согласен
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconCross from '~/components/Icons/IconCross.vue'

const cookie = ref()

function closeCookie () {
  cookie.value.style.display = 'none'
}

function setCookie () {
  let expires = ''
  const name = 'cookies_policy'
  const value = true
  const days = 365
  const date = new Date()
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
  expires = '; expires=' + date.toUTCString()
  document.cookie = name + '=' + (value || '') + expires + '; path=/'
  closeCookie()
}

function getCookie (name) {
  const matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"))
  return matches ? decodeURIComponent(matches[1]) : undefined
}

function checkCookies () {
  // Если куки cookies_policy нет или она просрочена, то показываем уведомление
  if (getCookie('cookies_policy') !== 'true') {
    cookie.value.style.display = 'flex'
  }
}
onMounted(() => {
  checkCookies()
})
</script>
<style scoped lang="scss">
.cookie-wrapper {
  display: none;
  width: 100%;
  position: fixed;
  bottom: 15px;
  z-index: 100;
  justify-content: center;
}

.cookie {
  max-width: 950px;
  padding: 25px 35px 25px 35px;
  background-color: #f8f8f8;
  border-radius: 4px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.4);

  svg {
    cursor: pointer;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  .h7 {
    font-size: 20px;
    font-weight: bold;
  }

  a {
    color: #007395;
  }

  button {
    margin-right: 2.25rem;
  }
}

@media (min-width: 992px) {
  #cookie_note {
    //left: 50%;
    //max-width: 90%;
    //transform: translateX(-50%);
  }
}

@media (max-width: 992px) {
  #cookie_note {
    justify-content: space-between;
    margin: 0 15px;
    width: 95%;
  }
}
</style>
