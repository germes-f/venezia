<template>
  <div class="top-baner">
    <v-container fluid>
      <v-row>
        <v-col md="7" lg="8" class="d-none d-md-flex">
          <h1 class="h1">
            Элитная обувь из Италии
          </h1>
        </v-col>
        <v-col cols-12 md="4" lg="3" class="text-center">
          <h2 class="mb-5">
            Получить <br>оптовый прайс
          </h2>
          <get-price-modal />
          <h3 class="mt-5">
            Эксклюзивный дистрибьютор <br>
            VENEZIA в России
          </h3>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import GetPriceModal from '@/components/modals/GetPriceModal'

export default {
  components: { GetPriceModal }
}
</script>

<style lang="scss" scoped>
.top-baner {
  background: url('../static/top-fon.jpg');
  background-size: cover;
  background-position: center
}
.h1 {
    font-weight: 300;
    font-size: 35px;
    background: rgba(0, 0, 0, 0.49);
    text-align: center;
    color: #fff;
    margin: auto;
    width: 70%;
    max-height: 50px;
  }
@media only screen and (max-width: 768px) {
  .top-baner {
    background: #cca272;
  }
}
</style>
