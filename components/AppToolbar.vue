<template>
  <div class="app-toolbar primary">
    <v-navigation-drawer
      v-model="drawer"
      color="primary"
      dark
      absolute
      temporary
      app
    >
      <img src="@/static/logo.png" alt="">
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
        >
          <v-list-item>
            <v-list-item-title>
              <v-icon left>
                fas fa-envelope
              </v-icon>
              <a
                style="color: #fff"
                :href="'mailto:' + mail"
                target="_blank"
                v-text="mail"
              />
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <v-icon left>
                fas fa-phone-alt
              </v-icon>
              <a
                :href="'tel:' + phone.one"
                style="color: #fff"
              >{{ phone.one }}</a>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <v-icon left>
                fab fa-instagram
              </v-icon>
              <a
                :href="insta"
                target="_blank"
                style="color: #fff"
                v-text="'@veneziarus /розница/'"
                @click="metrica"
              />
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <v-icon left>
                fab fa-instagram
              </v-icon>
              <a
                :href="instaopt"
                target="_blank"
                style="color: #fff"
                v-text="'@veneziaopt /опт/'"
                @click="metrica"
              />
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <p style="color: #fff">
                г. Иваново, ул. 8 Марта - 32
              </p>
              <p style="color: #fff">
                ТРЦ "Серебряный город"
              </p>
              <p style="color: #fff">
                1 уровень, атриум
              </p>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- верхнее меню -->
    <v-container>
      <v-toolbar color="#000000" dark>
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
        />

        <v-toolbar-title class="d-none d-sm-flex">
          <img src="@/static/logo.png" alt="">
        </v-toolbar-title>

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

        <!-- modal -->
        <call-me-modal />
        <!-- / modal -->
      </v-toolbar>
    </v-container>
  </div>
</template>

<script>
import CallMeModal from '@/components/modals/CallMeModal'

export default {
  components: { CallMeModal },
  data: () => ({
    mail: 'olya37@bk.ru',
    phone: {
      one: '8 (930) 344-46-94'
    },
    insta: 'https://www.instagram.com/veneziarus/',
    instaopt: 'https://www.instagram.com/veneziaopt/',
    adress: 'г. Иваново, ул. 8 Марта - 32<br> ТРЦ "Серебряный город"<br> 1 уровень, атриум',
    group: null,
    drawer: false
  }),
  methods: {
    metrica() {
      yaCounter55771003.reachGoal('INSTA')
      return true
    }
  },
  watch: {
    group () {
      this.drawer = false
    }
  }
}
</script>

<style lang="scss" scoped>
.app-toolbar span{
  padding: 0 10px;
  font-size: 14px
}
.v-icon {
  font-size: 20px;
}
a {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>
