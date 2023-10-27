<script setup>
  import {ref} from 'vue';
  import Card from '../components/Card.vue';
  import Search from '../components/Search.vue';

  const sortJSON = (arr, key, asc=true) => {
    return arr.sort((a, b) => {
      let x = a[key];
      let y = b[key];
      if (asc) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
      else { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
    });
  }

  const countries = ref(null)
  const getCountries = (searchType=null,searchFor='All') => {
    let api = "https://restcountries.com/v3.1/";
    if(searchFor==""){searchFor='All';}

    if(searchFor=='All'){ //Get all countries
      api = api+'all';
    }else if(searchType=='Region'){ //Get countries by region
      api = api+"region/"+searchFor;
    }else{ //Get countries by name
      api = api+"name/"+searchFor;
    }
    fetch(api)
      .then(response => response.json())
      .then(data => countries.value = sortJSON(data, "cca3"))
  }
  getCountries()
</script>

<template>
  <Search @filter-search="getCountries"/>
  <main class="contents">
    <div class="container">
      <Card v-for="country in countries" :key="country.cca3" :country="country"/>
    </div>
  </main>
</template>

<style lang="scss">
    @import '../assets/function';

    .container{
        display: grid;
        gap: calcRem(40);
        font-size: calcRem(14);
    }

    @media screen and (min-width: calcRem(992)){
      .container{
        grid-template-columns: repeat(4, 1fr);
        gap: calcRem(50);
      }
    }
</style>
