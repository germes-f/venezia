<template>
  <no-ssr>
    <div
      v-masonry
      transition-duration="1s"
      item-selector=".item"
      class="masonry-container"
    >
      <div class="grid-sizer" />

      <div v-masonry-tile class="item item6">
        <img class="cat1" src="@/static/category/01.jpg">
        <br>
        <p class="cat5">
          Ботинки женские
        </p>
      </div>

      <div v-masonry-tile class="item item6">
        <img class="cat2" src="@/static/category/02.jpg">
        <br>
        <p class="cat6">
          Полусапоги
        </p>
      </div>

      <div v-masonry-tile class="item item2 ml-md-7">
        <p class="cat7 text-right">
          Сапоги из <span class="d-none d-md-inline">натуральной</span>  замши
        </p>
      </div>

      <div v-masonry-tile class="item item8">
        <img class="cat4" src="@/static/category/04.jpg">
      </div>

      <div v-masonry-tile class="item4 stamp">
        <img class="cat3" src="@/static/category/03.jpg">
        <br>
        <p class="cat8">
          Ботинки <br>мужские
        </p>
      </div>
    </div>
  </no-ssr>
</template>

<script>
import NoSSR from 'vue-no-ssr'

export default {
  components: {
    'no-ssr': NoSSR
  },
  mounted () {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin bp($bp) {
$h: $bp/12;

.item {
  width: calc(#{$h} - 30px);
  padding: 15px;
  float: left;
}
.item2 {
  width: calc(#{$h} * 2 - 30px);
  float: left;
}
.item4 {
  width: calc(#{$h} * 4 - 30px);
}
.item6 { width: calc(#{$h} * 6 - 30px); }
.item7 { width: calc(#{$h} * 7 - 30px); }
.item8 { width: calc(#{$h} * 8 - 30px); }
.masonry-container {
    margin: 0 auto;
    max-width: $bp;
  }
  .stamp {
  position: absolute;
  left: calc(#{$h} * 8 - 30px);
  left:-webkit-calc(#{$h} * 8 - 30px);
  left:-moz-calc(#{$h} * 8 - 30px);
  top: 40%;
  padding: 15px;
  float: left;
}
}
@media only screen and (max-width: 599px) {
  @include bp(500px);
}
@media only screen and (min-width: 600px) and (max-width: 959px) {
  @include bp(520px);
  p {
    font-size: 14px
  }
  .cat7 {
    padding-top: 0;
}
.item2 {
  width: calc(520px / 12 * 4 - 30px);
  float: left;
}
}
@media only screen and (min-width: 960px) and (max-width: 1263px) {
  @include bp(900px);
}
@media only screen and (min-width: 1264px) and (max-width: 1903px) {
  @include bp(1200px);
}
@media only screen and (min-width: 1904px) {
  @include bp(1200px);
}
p {
  font-weight: bold;
}

img {
  max-width: 100%;
  height: auto;;
}
.cat8 {
  margin-bottom: 0;
  margin-top: 50px;
}
p {
  margin-bottom: 0;
}
</style>
