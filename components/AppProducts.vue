<template>
  <div>
    <v-card>
      <img
        :src="product.acf.image || ''"
        class="img-fluid"
        alt="product.acf.title || ''"
      >

      <v-card-text>
        <vue-markdown>{{ product.acf.title || 'нет описания' }}</vue-markdown>
      </v-card-text>

      <v-card-title
        v-text="product.acf.price + ' ₽' || '0.00'"
      />

      <v-card-actions>
        <v-btn
          tile
          dark
          block
          small
          color="primary"
          @click="dialog = !dialog"
        >
          Получить оптовый прайс
        </v-btn>
      </v-card-actions>

      <v-card-actions>
        <v-btn
          outlined
          tile
          :href="product.acf.instalink || ''"
          target="_blank"
          block
          small
          color="primary"
          @click="dialog = !dialog"
        >
          Купить в розницу
        </v-btn>
      </v-card-actions>

      <v-card-actions>
        <div class="flex-grow-1" />

        <v-btn
          tile
          outlined
          small
          block
          href="https://www.instagram.com/veneziarus/"
          target="_blank"
          color="#000"
          @click="metrica"
        >
          Перейти в инстаграм
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <get-price-modal />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import GetPriceModal from '@/components/modals/GetPriceModal'

export default {
  components: { GetPriceModal },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    metrica() {
      yaCounter55771003.reachGoal('INSTA')
      return true
    }
  }
}
</script>>

<style lang="scss" scoped>
.v-card__text {
  height: 120px;
  overflow: hidden;
}
</style>
