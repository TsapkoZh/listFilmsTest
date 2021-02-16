<template>
  <div class="content">
    <ContentList />
  </div>
</template>

<script>
import ContentList from '~/components/ContentList.vue';

export default {
  components: { ContentList },

  async fetch({ store }) {
    if (store.getters['films/films'].length === 0) {
      await store.dispatch('films/fetch')
    }
  },

  data: () => ({
    pageTitle: 'Home'
  }),
}
</script>

<style>
</style>
