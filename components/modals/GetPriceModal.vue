<template>
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

    <v-text-field
      ref="email"
      v-model="email"
      outlined
      solo
      flat
      :rules="[rules.required, rules.email]"
      placeholder="E-mail"
      required
    />
    <v-btn
      dark
      x-large
      class="mb-3"
      color="#000000"
      :disabled="!valid"
      :loading="loading"
      @click="onSubmit"
    >
      получить прайс
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    loading: false,
    lazy: false,
    names: '',
    phone: '',
    email: '',
    rules: {
      required: value => !!value || 'Обязательное поле.',
      counter: value => value.length >= 6 || 'Минимально 6 цифр',
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Введите правильный e-mail.'
      }
    }
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
          await this.$axios.$post('./mail/post.php', formData)
          yaCounter55771003.reachGoal('PRICE')
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
    },
  }
}
</script>

<style lang="scss" scoped>
.top-form {
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 20px;
  background: #e1d7c4;
}
.top-input .v-input__slot {
  background: #f2ece8;
  border: 2px solid #fff;
}
.theme--dark.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
    background-color: #212121!important;
    color: #fff!important;
}
</style>
