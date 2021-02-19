<template>
  <div class="content">
    <FilmsList />
  </div>
</template>

<script>
import FilmsList from '~/components/FilmsList.vue';

export default {
  components: { FilmsList },

  async fetch({ store }) {
    await store.dispatch('films/fetch')
  },
}
</script>
