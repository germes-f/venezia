<template>
  <v-app>
    <nuxt />
    <section class="primary">
      <v-footer
        dark
        color="#000000"
        class="app-footer container"
      >
        <span>&copy; Все права защищены / 2019</span>
        <div class="flex-grow-1" />
        <div class="d-none d-md-flex">
          <v-icon color="rgb(121, 120, 120)">
            fas fa-envelope
          </v-icon>
          <span v-text="mail" />

          <v-icon color="rgb(121, 120, 120)">
            fas fa-phone-alt
          </v-icon>
          <span v-text="phone.one" />
        </div>
        <a href="https://malibu-studio.ru"><img src="@/static/malibu.png"></a>
      </v-footer>
    </section>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    mail: 'olya37@bk.ru',
    phone: {
      one: '8 (930) 344-46-94'
    }
  })
}
</script>

<style lang="scss" scoped>
.app-footer span{
  padding: 0 10px;
  font-size: 14px
}
</style>
