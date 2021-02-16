export const state = () => ({
  films: []
})

export const mutations = {
  setFilms(state, films) {
    state.films = films.content
  }
}

export const actions = {
  async fetch({commit}) {
    const films = await this.$axios.$get('https://www.signalmediacorp.com/api/main_page')
    commit('setFilms', films)
  }
}

export const getters = {
  films: s => s.films
}