<template>
  <!-- Modal -->
  <div
    id="feedbackModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="feedbackModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content form-index position-relative">
        <a href="#" data-bs-dismiss="modal">
          <icon-cross-modal />
        </a>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="left-part">
                <img src="/images/logo/Logo_ch.png" alt="" class="mt-0">
                <div class="border-top-w">
                  <h6>Заполните форму и в ближайшее время с Вами свяжется наш менеджер</h6>
                </div>
              </div>
            </div>
            <div class="offset-md-1 col-md-5">
              <div class="right-part">
                <form class="form">
                  <div class="row">
                    <div class="col-md-12">
                      <label for="name" class="h7 form-label">Имя</label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        name="name"
                        placeholder="Введите имя"
                      >
                    </div>
                    <div class="col-md-12">
                      <label for="phone" class="h7 form-label">Телефон</label>
                      <input
                        type="text"
                        class="form-control"
                        id="phone"
                        name="phone"
                        placeholder="+7 (9ХХ) ХХХ ХХ ХХ"
                      >
                    </div>
                  </div>
                  <button class="btn btn-lg btn-primary">
                    Записаться на показ
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import IconCrossModal from '~/components/Icons/IconCrossModal.vue'
export default {
  components: { IconCrossModal }
}
</script>
<style scoped lang="scss">
.modal {
  --bs-modal-width: 1175px;

  .modal-content {
    padding: 128px 100px 100px 140px;
    border-radius: 20px;
    svg{
      position: absolute;
      top: 2rem;
      right: 2rem;
    }
    img {
      max-width: 300px;
      margin-bottom: 36px;
    }
  }

  .right-part {
    margin-top: 30px;
  }
}

.form-index {
  padding-bottom: 6.625rem;
  background: url(/images/banners/form_back.png) no-repeat;
}

.btn-lg {
  width: 100%;
  --bs-btn-padding-y: 18px;
}
</style>
