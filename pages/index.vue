<template>
  <v-app>
    <app-toolbar />
    <app-top-baner />
    <app-preim />
    <v-container class="d-none d-sm-block">
      <app-category />
    </v-container>
    <!-- <v-container class="d-block d-sm-none">
      <app-category-mobile />
    </v-container> -->
    <app-form />
    <v-container class="mt-10 products">
      <v-tabs color="primary" right>
        <v-tab
          v-for="(rubric, i) in rubrics"
          :key="i"
          :href="`#tab-${rubric.id}`"
        >
          {{ rubric.name }}
        </v-tab>

        <v-tab-item
          v-for="(product, id) in products"
          :key="id"
          class="product"
          :value="'tab-' + product.categories[0]"
        >
          <app-products :product="product" />
        </v-tab-item>
      </v-tabs>
    </v-container>
    <app-seo-text />
  </v-app>
</template>

<script>
import AppToolbar from '@/components/AppToolbar'
import AppTopBaner from '@/components/AppTopBaner'
import AppPreim from '@/components/AppPreim'
import AppCategory from '@/components/AppCategory'
import AppForm from '@/components/AppForm'
import AppProducts from '@/components/AppProducts'
import AppSeoText from '@/components/AppSeoText'
import axios from 'axios'

export default {
  components: {
    AppToolbar,
    AppTopBaner,
    AppPreim,
    AppCategory,
    AppForm,
    AppProducts,
    AppSeoText
  },
  data: () => ({
    tabs: null
  }),
  async asyncData ({ store }) {
    const products = await store.dispatch('products/fetch')
    const rubrics = await store.dispatch('products/fetchRubric')
    return { products, rubrics }
  }

  // async asyncData ({}) {
  //   const products = await axios.get('https://wp.venezia-rus.ru/wp-json/wp/v2/categories')
  //   const rubrics = await axios.get('https://wp.venezia-rus.ru/wp-json/wp/v2/posts/?per_page=100')
  //   return { products, rubrics }
  // }



}
</script>

<style lang="scss" scoped>
.v-window__container {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  margin-right: -12px;
  margin-left: -12px;
}
$h: percentage(1/4);
.products {
  background-color: #fff;
}
.product {
  max-width: calc(#{$h} - 15px);
  float: left;
  margin: 7px;
}
@media only screen and (max-width: 599px) {
  $h: percentage(1/1);
.products {
  background-color: #fff;
}
.product {
  max-width: calc(#{$h} - 15px);
  float: left;
  margin: 7px;
}
}
@media only screen and (min-width: 600px) and (max-width: 959px) {
  $h: percentage(1/2);
.products {
  background-color: #fff;
}
.product {
  max-width: calc(#{$h} - 15px);
  float: left;
  margin: 7px;
}
}
@media only screen and (min-width: 960px) and (max-width: 1263px) {
  $h: percentage(1/3);
.products {
  background-color: #fff;
}
.product {
  max-width: calc(#{$h} - 15px);
  float: left;
  margin: 7px;
}
}
</style>
