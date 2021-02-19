<template>
  <section 
    class="film"
    v-bind:class="{vertical: isVertical}"
  >
    <div class="wrapper" v-bind:class="{verticalWrapper: isVertical}">
      <img 
        :src="`https://www.signalmediacorp.com//b/c/${selectFilm.cover.id}.jpg`" 
        alt="Film poster"
        class="poster"
        v-bind:class="{ verticalPoster: isVertical }"
      />
    </div>
    <div class="detailBlock">
      <h1 class="title">{{ selectFilm.title }}</h1>
      <div class="detail">
        <p class="date">
          date of creation: 
          <span>{{ dateRForm(selectFilm.created_at) }}</span></p>
        <p>
          languages: 
          <span
            v-for="lang in selectFilm.languages"
            :key="lang.id"
          >
            {{ lang.title }}
          </span>
        </p>
      </div>
    </div>
    <NuxtLink class="backBTN" to="/">&times;</NuxtLink>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    isVertical: true
  }),

   async fetch({ store, params }) {
      return store.dispatch('films/fetchFilm', {id: params.id});
   },

  mounted() {
    if(this.selectFilm.cover.height > this.selectFilm.cover.width) {
      this.isVertical = false
    }
  },

  methods: {
    dateRForm(date) {
      const splitDate = date.split(' ')
      return splitDate[0].split('-').reverse().join('.')
    }
  },

  computed: {
    ...mapGetters('films', ["selectFilm"]),
  },
}
</script>

<style scoped>
  .film {
    position: relative;
    display: flex;
    flex-direction: start;
  }

  .backBTN {
    position: absolute;
    top: 0;
    left: 94vw;
    font-size: 2rem;
    font-weight: 100;
    text-decoration: none;
  }

  .vertical {
    flex-direction: column;
    align-items: center;
  }

  .wrapper {
    position: relative;
    display: flex;
    justify-content: center; 
    align-items: center;
    width: 30%;
    height: 100%;
    overflow: hidden;
  }

  .verticalWrapper {
    width: 70vw;
    height: 70vh;
  }

  .wrapper::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 10px 10px #050A1D;
  }

  .poster {
    height: 100%;
    width: auto;
  }
  .verticalPoster {
    height: auto;
    width: 100%;
  }

  .detailBlock {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65%;
  }

  .title {
    color: rgb(173, 36, 36);
    font-size: 3rem;
    letter-spacing: .1rem;
    margin: 2vh auto;
  }

  .detail {
    color: rgb(128, 128, 128);
    font-size: 1rem;
  }

  .detail span {
    color: white;
    font-weight: 600;
  }

  .date {
    margin-bottom: .8vh;
  }

  @media (max-width: 1024px) {
    .film {
      flex-direction: column;
      align-items: center;
    }

    .detailBlock {
      width: 90%;
      text-align: center;
    }

    .title {
      font-size: 1.5rem;
    }

    .wrapper {
      width: 95vw;
      height: 95vh;
    }

    .verticalWrapper {
      height: 30vh;
    }
  }
</style>