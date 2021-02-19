export const state = () => ({
  films: [],
  selectFilm: {}
})

export const mutations = {
  setFilms(state, films) {
    state.films = films.content
  },

  setSelectFilm(state, selectFilm) {
    state.selectFilm = selectFilm;
  },
}

export const actions = {
  async fetch({commit}) {
    const films = await this.$axios.$get('/api/main_page')
    commit('setFilms', films)
  },

  async fetchFilm({commit}, payload) {
    const { content } = await this.$axios.$get(`api/content/byId/${payload.id}`)
    commit('setSelectFilm', content)
  }
}

export const getters = {
  films: s => s.films,
  selectFilm: s => s.selectFilm
}