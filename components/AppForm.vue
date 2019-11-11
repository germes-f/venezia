<template>
  <div class="app-form">
    <v-form v-model="valid" class="form">
      <v-container>
        <h2 class="text-center">
          Получить оптовый прайс
        </h2>
        <v-row>
          <v-col
            cols="12"
            md="3"
          >
            <v-text-field
              v-model="names"
              outlined
              solo
              flat
              :rules="nameRules"
              label="Имя"
              required
            />
          </v-col>

          <v-col
            cols="12"
            md="3"
          >
            <v-text-field
              v-model="phone"
              outlined
              solo
              flat
              :rules="nameRules"
              label="Телефон"
              required
            />
          </v-col>

          <v-col
            cols="12"
            md="3"
          >
            <v-text-field
              v-model="email"
              outlined
              solo
              flat
              :rules="emailRules"
              label="E-mail"
              required
            />
          </v-col>

          <v-col
            cols="12"
            md="3"
          >
            <v-btn
              x-large
              color="primary"
              block
              :disabled="!valid"
              :loading="loading"
              @click="onSubmit"
            >
              Получить
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    names: '',
    loading: false,
    phone: '',
    nameRules: [
      v => !!v || 'Обязательное поле'
    ],
    email: '',
    emailRules: [
      v => !!v || 'Обязательное поле',
      v => /.+@.+/.test(v) || 'Введите правильный e-mail'
    ]
  }),
  methods: {
    onSubmit () {
      const asyncLog = async (asyncLog) => {
        this.loading = true
        try {
          this.loading = true
          const formData = {
            names: this.names,
            email: this.email,
            phone: this.phone,
            zvonok: false,
            price: true
          }
          await await this.$axios.$post('./mail/post.php', formData)
          ym(55771003, 'reachGoal', 'PRICE')
          this.loading = false
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
      asyncLog()
    }
  }
}
</script>

<style lang="scss" scoped>
.app-form {
  .container {
    border: 1px solid #000;
  }
  input {
    border-radius: 0;
  }
}
</style>
