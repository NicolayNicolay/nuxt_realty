<template>
  <section id="form-index" class="form-index">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="left-part">
            <img src="/images/logo/Logo_ch.png" alt="">
            <div class="border-top-w">
              <h6>это современная экосистема, где приобретают комфортное будущее, а не просто квартиру!</h6>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="right-part">
            <h5>Выбрать лучшее <br>очень просто:</h5>
            <form class="form">
              <div class="row">
                <div class="col-md-6">
                  <label for="name" class="h7 form-label">Имя</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    placeholder="Введите имя"
                  >
                </div>
                <div class="col-md-6">
                  <label for="phone" class="h7 form-label">Телефон</label>
                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    name="phone"
                    placeholder="+7 (9ХХ) ХХХ ХХ ХХ"
                  >
                </div>
                <div class="col-md-6">
                  <label for="connect" class="h7 form-label">Связь</label>
                  <select id="connect" class="form-select form-select-lg mb-3" name="connect" aria-label=".form-select-lg example">
                    <option selected>
                      Выберите способ
                    </option>
                    <option value="1">
                      One
                    </option>
                    <option value="2">
                      Two
                    </option>
                    <option value="3">
                      Three
                    </option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for="from" class="h7 form-label">С</label>
                  <select id="from" class="form-select form-select-lg mb-3" name="from" aria-label=".form-select-lg example">
                    <option selected>
                      18:00
                    </option>
                    <option value="1">
                      One
                    </option>
                    <option value="2">
                      Two
                    </option>
                    <option value="3">
                      Three
                    </option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for="to" class="h7 form-label">До</label>
                  <select id="from" class="form-select form-select-lg mb-3" name="to" aria-label=".form-select-lg example">
                    <option selected>
                      21:00
                    </option>
                    <option value="1">
                      One
                    </option>
                    <option value="2">
                      Two
                    </option>
                    <option value="3">
                      Three
                    </option>
                  </select>
                </div>

              </div>
              <button class="btn btn-lg btn-primary">
                Запись на консультацию
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
