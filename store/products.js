export const state = () => ({
})

export const actions = {
  async fetch () {
    try {
      return await this.$axios.$get('https://wp.venezia-rus.ru/wp-json/wp/v2/posts/?per_page=100')
    } catch (e) {
      throw e
    }
  },
  async fetchRubric () {
    try {
      return await this.$axios.$get('https://wp.venezia-rus.ru/wp-json/wp/v2/categories')
    } catch (e) {
      throw e
    }
  }

}
