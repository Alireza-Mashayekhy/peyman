<template>
  <div class="search">
    <div class="faSearch irancell" v-if="language == 'fa'">
      <Header lang="fa" @change="change" />
      <div class="searchDiv">
        <div class="inputDiv">
          <input type="search" placeholder="جستجو" />
          <img src="/icons/search.svg" alt="search" />
        </div>
      </div>
      <Footer lang="fa" />
    </div>
    <div class="enSearch mont" v-else>
      <Header lang="en" @change="change" />
      <div class="searchDiv">
        <div class="inputDiv">
          <input type="search" placeholder="search" />
          <img src="/icons/search.svg" alt="search" />
        </div>
      </div>
      <Footer lang="en" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: "",
    };
  },
  mounted() {
    this.language = this.$store.state.lang;
  },
  methods: {
    change() {
      this.$store.commit("change");
    },
  },
  watch: {
    "$store.state.lang"() {
      this.language = this.$store.state.lang;
    },
  },
};
</script>

<style>
</style>