<script setup>
    import {defineProps} from 'vue'
    import {useRouter} from 'vue-router'

    const router = useRouter();
    const {country} = defineProps(["country"]);
</script>

<template>
    <div class="card" @click="router.push(`/details/${country.cca3}`)">
        <div class="flag">
            <img :src="country.flags.svg" :alt="country.flags.alt">
        </div>
        <div class="overview">
            <h3>{{ country.name.common }}</h3>
            <p><span>Population: </span>{{ (country.population).toLocaleString('en-US') }}</p>
            <p><span>Region: </span>{{ country.region }}</p>
            <p><span>Capital: </span>{{ country.capital ? country.capital[0] : "Unnown" }}</p> <!--Check if capital exists-->
        </div>
    </div>
</template>

<style lang="scss">
    @import '../assets/function';

    .card{
        cursor: pointer;
        border-radius: calcRem(5);
        background-color: var(--elements);
        color: var(--text-color);
        box-shadow: 21px 23px 40px rgba(0, 0, 0, 0.07);

        &:hover{box-shadow: 11px 13px 20px rgba(0, 0, 0, 0.4);}

        img{
            width: 100%;
            object-fit: cover;
            aspect-ratio: 320/200;
            border-radius: calcRem(5) calcRem(5) 0 0;
        }

        .overview{
            padding: calcRem(20);

            h3{
                font-weight: 800;
                margin-bottom: calcRem(10);
            }

            p{
                margin-bottom: calcRem(5);

                span{font-weight: 600;}
            }
        }
    }
</style>