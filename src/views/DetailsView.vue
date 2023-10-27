<script setup>
  import {useRoute, useRouter} from 'vue-router';
  import {ref} from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  const route = useRoute();
  const router = useRouter();
  const countryID = route.params.id;
  const countries = ref(null);
  const borders = ref(null);

  const getCountry = (countryCode,variable) => {
    fetch("https://restcountries.com/v3.1/alpha/"+countryCode)
        .then(response => response.json())
        .then(data => variable.value = data)
  }
  getCountry(countryID,countries);

  const getCountries = () => {
    fetch("https://restcountries.com/v3.1/all?fields=name,cca3")
        .then(response => response.json())
        .then(data => borders.value = data)
  }
  getCountries();

  const getBorder = (borders,code) => {
    const bdr = borders.find(b => b.cca3 === code);
    return bdr.name.common;
  }
</script>

<template>
  <div class="about container">
    <div><button type="button" class="card-ele" @click="router.push('/')"><font-awesome-icon icon="fa-solid fa-arrow-left"/> Back</button></div>
    <div class="details" v-for="country in countries">
      <div class="flag"><img :src="country.flags.svg" :alt="country.flags.alt"></div>
      <div class="info">
        <h2>{{ country.name.common }}</h2>
        <div class="metadata">
          <div class="data1">
            <p>Native Name: <span v-for="(value,name,index) of country.name.nativeName"><i v-if="index>0">, </i>{{ value.common }}</span></p>
            <p>Population: <span>{{ (country.population).toLocaleString('en-US') }}</span></p>
            <p>Region: <span>{{ country.region }}</span></p>
            <p>Sub Region: <span>{{ country.subregion }}</span></p>
            <p>Capital: <span>{{ country.capital ? country.capital[0] : "Unnown" }}</span></p>
          </div>
          <div class="data2">
            <p>Top Level Domain: <span>{{ country.tld[0] }}</span></p>
            <p>Currencies: <span v-for="(value,name,index) of country.currencies"><i v-if="index>0">, </i>{{ value.name }}</span></p>
            <p>Languages: <span v-for="(value,name,index) of country.languages"><i v-if="index>0">, </i>{{ value }}</span></p>
          </div>
          <div class="borders-div">
            <div><h4>Border Countries: </h4></div>
            <div class="borders">
              <span v-for="border of country.borders" class="card-ele">{{ getBorder(borders,border) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../assets/function';

  .card-ele{
    border: none;
    outline: none;
    background-color: var(--elements);
    color: var(--text-color);
    border-radius: calcRem(2);
    box-shadow:
      0.1px 0.4px 0.5px rgba(0, 0, 0, 0.056),
      0.3px 1px 1.4px rgba(0, 0, 0, 0.08),
      0.5px 1.9px 2.8px rgba(0, 0, 0, 0.1),
      1.1px 4px 5.8px rgba(0, 0, 0, 0.124),
      3px 11px 16px rgba(0, 0, 0, 0.18);
  }

  .about{
    padding: calcRem(45);
    font-size: calcRem(16);
    color: var(--text-color);

    button{
      padding: calcRem(8) calcRem(20);
      transition: all .4s ease-in;
      &:hover{padding: calcRem(8) calcRem(40);cursor: pointer;}
    }

    .details{
      display: grid;
      justify-content: space-between;
      align-items: center;
      margin-top: calcRem(45);

      .flag img{
        width: 100%;
        object-fit: cover;
      }

      .info{
        margin-top: calcRem(10);
        padding: calcRem(5);

        p{
          margin-bottom: calcRem(8);
          font-weight: 600;

          span{
            font-weight: 300;
          }
        }

        .metadata{
          margin-top: calcRem(10);
          div{
            margin-top: calcRem(10);
            padding: calcRem(10) 0;
          }

          .borders{
            display: flex;
            flex-wrap: wrap;
            gap: calcRem(5);
            align-items: flex-start;

            span{
              padding: calcRem(5) calcRem(10);
            }
          }
        }
      }
    }
  }

  @media screen and (min-width:calcRem(992)){
    .about{
      .details{
        grid-template-columns: repeat(2, 1fr);
        gap: calcRem(130);

        .info{
          padding: calcRem(5) calcRem(20);

          .metadata{
            display: grid;
            grid-template-areas:
              "data1 data2"
              "borders-div borders-div";
            
            .data1{grid-area: data1;}
            .data2{grid-area: data2;}
            .borders-div{
              display: flex;
              align-items: center;
              gap: calcRem(10);
              grid-area: borders-div;
            }
          }
        }
      }
    }
  }
</style>
