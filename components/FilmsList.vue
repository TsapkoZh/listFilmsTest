<template>
  <div>
    <div class="genreTable" v-for="categories in films" :key="categories.id">
      <h2 class="title">{{categories.title}}</h2>

      <ul class="table">
        <li class="card" v-for="cont in categories.content" :key="cont.id">
          <div v-if="cont.cover.id">
            <NuxtLink :to="`/film/${cont.id}`">
              <div class="wrapper">
                <img 
                  :src="`https://www.signalmediacorp.com//b/c/${cont.cover.id}.jpg`" 
                  alt="Film poster"
                />
              </div>
              <h5 class="filmTitle">{{cont.title}}</h5>
            </NuxtLink>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
  ...mapGetters('films', ["films"]),
  },
}
</script>

<style scoped>
  .genreTable {
    margin: 6vh 0 1vh 0;
  }

  .title {
    font-size: 2rem;
    margin: 4vh 0 0 1vw;
    color: #c93429;
  }

  .table {
    display: flex;
    padding: 0;
    overflow: auto;
    scrollbar-color: #5e0527 rgba(255, 255, 255, 0);
    scrollbar-width: thin;
  }

  .table::-webkit-scrollbar {
    height: 1vh;
  }
  .table::-webkit-scrollbar-thumb {
    background-color: #5e0527;
  }

  .card {
    margin: 4vh 0;
  }

  .wrapper {
    width: 32vw;
    height: 90vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: .6rem .3rem;
  }

  .wrapper img {
    height: 100%;
    width: auto;
    transition: filter .3s, transform .7s;
    cursor: pointer;
    filter: brightness(.7);
  }

  img:hover {
    filter: brightness(1);
    transform: scale(1.05);
  }

  .filmTitle {
    color: #c3c9d4;
    margin-left: 5px;
  }

  @media (max-width: 1024px) {
    .wrapper {
      height: 30vh;
    }
  }
</style>