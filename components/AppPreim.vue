<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(item, key) in items"
        :key="key"
        cols="6"
        md="3"
        class="alt-font"
      >
        <v-row>
          <v-col cols="3">
            <v-icon
              left
              x-large
              v-text="item.icon"
            />
          </v-col>

          <v-col cols="9">
            {{ item.title }}
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-divider />
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      { icon: 'fas fa-tasks', title: 'Заказы любых объемов качественно и в срок' },
      { icon: 'fas fa-file-invoice', title: 'Долгосрочное взаимовыгодное сотрудничество' },
      { icon: 'fas fa-shipping-fast', title: 'Поставка продукции во все регионы СНГ и России' },
      { icon: 'fas fa-users', title: 'Высокий уровень мастерства сотрудников' }
    ]
  })
}
</script>

<style>

</style>
