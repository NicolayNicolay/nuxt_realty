<template>
  <section id="form-index" class="form-index form-index-2 position-relative">
    <img src="/images/sections/formBackground.png" alt="" class="background-img">
    <div class="container">
      <h5 class="color-w">
        Индивидуальный подход к каждому клиенту <br>по подбору квартиры и условий приобретения
      </h5>
      <div class="row">
        <div class="col-12 col-lg-8">
          <div class="left-part">
            <h6 class="mt-0">Хотите увидеть эксклюзивные предложения, закажите презентацию. Оставьте свой телефон и нажмите кнопку “Получить”</h6>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="right-part">
            <form class="form">
              <label for="phone" class="h7 form-label mt-0">Телефон</label>
              <input
                type="text"
                class="form-control"
                id="phone"
                name="phone"
                placeholder="+7 (9ХХ) ХХХ ХХ ХХ"
              >
              <button class="btn btn-lg btn-primary d-none d-sm-block">
                Получить
              </button>
              <button class="btn btn-lg btn-primary d-block d-sm-none w-100">
                Запись на консультацию
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.form-index {
  padding-top: 5.375rem;

  .left-part {
    max-width: 100%;
  }
  .row{
    margin-top: 3.0625rem;
  }
  button{
    margin-top: 2rem;
  }
}
</style>
