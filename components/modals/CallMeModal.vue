<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          class="mx-10"
          color="#fff"
          tile
          light
          v-on="on"
        >
          Заказать звонок
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Закажите обратный звонок
        </v-card-title>

        <v-form
          ref="form"
          v-model="valid"
          class="top-form"
          :lazy-validation="lazy"
        >
          <v-text-field
            ref="names"
            v-model="names"
            class="top-input"
            outlined
            solo
            flat
            :rules="[rules.required]"
            placeholder="Имя"
            required
          />

          <v-text-field
            ref="phone"
            v-model="phone"
            outlined
            solo
            flat
            :rules="[rules.required, rules.counter]"
            minlength="6"
            placeholder="Телефон"
            required
          />
          <v-card-actions>
            <v-btn
              dark
              x-large
              class="mb-3"
              color="#000000"
              :disabled="!valid"
              :loading="loading"
              @click="submit"
            >
              Перезвоните мне
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    dialog: false,
    lazy: false,
    valid: false,
    loading: false,
    names: '',
    phone: '',
    email: '',
    subject: '',
    rules: {
      required: value => !!value || 'Обязательное поле.',
      counter: value => value.length >= 6 || 'Минимально 6 цифр'
    }
  }),
  methods: {
    submit () {
      const formCallMe = async (formCallMe) => {
        this.loading = true
        try {
          this.loading = true
          await axios({
            method: 'post',
            url: './mail/post.php',
            data: {
              names: this.names,
              phone: this.phone,
              email: 'olya37@bk.ru',
              zvonok: true,
              price: false
            }
          })
          yaCounter55771003.reachGoal('ZAKAZ_ZVONKA')
          this.loading = false
          this.dialog = false
          this.$toasted.show('Ваше сообщение успешно отправлено!', {
            theme: 'outline',
            position: 'top-center',
            duration: 5000
          })
        } catch (e) {
          this.loading = false
          throw e
        }
      }
      formCallMe()
    }
  }
}
</script>

<style lang="scss" scoped>
 .top-form {
    padding: 20px 40px;
    background: #e1d7c4;
  }
  .theme--dark.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
    background-color: #212121!important;
    color: #fff!important;
}
</style>
