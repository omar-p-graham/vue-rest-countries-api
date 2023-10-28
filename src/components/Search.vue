<script setup>
    import {ref, defineEmits} from 'vue';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

    const emit = defineEmits(["filterSearch"]);
    const expanded = ref(false);
    const typedValue = ref("");
    const selected = ref("Filter by Region");
    const inputFocus = () => {document.querySelector('input').focus();}

    const getSearchParams = (searchType,searchFor) => {
        emit("filterSearch",searchType,searchFor=='Filter by Region'?'All':searchFor);
    }
</script>

<template>
    <div class="search-nav">
        <div class="container">
            <div class="input shadow" @click="inputFocus">
                <span><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></span>
                <input type="text" name="input-field" id="input-field" placeholder="Search for a country..." v-model.trim="typedValue" @input="getSearchParams('Name',typedValue);selected='Filter by Region'" @focus="expanded=false">
            </div>
            <div class="dropdown shadow">
                <ul class="selection" @click="expanded = !expanded" @focusout="expanded=false">
                    <li class="default-option">{{ selected }} <span><font-awesome-icon :icon="expanded? 'fa-solid fa-angle-up':'fa-solid fa-angle-down'" /></span></li>
                    <ul class="options shadow" :class="expanded ? 'show':''">
                        <li class="option" @click="selected='Filter by Region';getSearchParams('Region',selected)" v-show="selected!='Filter by Region'">All</li>
                        <li class="option" @click="selected='Africa';getSearchParams('Region',selected)">Africa</li>
                        <li class="option" @click="selected='America';getSearchParams('Region',selected)">America</li>
                        <li class="option" @click="selected='Asia';getSearchParams('Region',selected)">Asia</li>
                        <li class="option" @click="selected='Europe';getSearchParams('Region',selected)">Europe</li>
                        <li class="option" @click="selected='Oceania';getSearchParams('Region',selected)">Oceania</li>
                    </ul>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import '../assets/function';

    .search-nav{
        font-size: calcRem(14);
        padding: calcRem(35) 0;

        .container{
            .input{
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                align-items: center;
                color: var(--input);
                background-color: var(--elements);
                padding-inline: calcRem(20);
                border-radius: calcRem(5);
                
                span{
                    background-color: transparent;
                    border: none;
                }

                input{
                    border: none;
                    outline: none;
                    background-color: transparent;
                    padding: calcRem(10) calcRem(15);
                    color: var(--input);

                    &::placeholder{color: var(--input);}
                }
            }
      

            .dropdown{
                width: 50%;
                margin-top: calcRem(20);
                .selection{
                    width: 100%;
                    position: relative;
                    border-radius: calcRem(5);

                    &:hover{cursor: pointer;}

                    li{
                        list-style-type: none;
                        padding: calcRem(10) calcRem(20);
                        background-color: var(--elements);
                        color: var(--text-color);
                    }

                    .default-option{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        border-radius: calcRem(5);
                    }

                    .options{
                        position: absolute;
                        top: calcRem(45);
                        z-index: 99;
                        border-radius: calcRem(10);
                        display: none;
                        width: 100%;

                        &.show{display: block;}

                        .option:first-child{border-radius: calcRem(5) calcRem(5) 0 0;}
                        .option:last-child{border-radius: 0 0 calcRem(5) calcRem(5);}
                        .option:hover{
                            cursor: pointer;
                            background-color: var(--hover-bg);
                            color: var(--hover-txt);
                            font-weight: 600;
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: calcRem(992)){
      .search-nav{
        .container{
            display: flex;
            justify-content: space-between;
            padding: calcRem(45) auto;

            .input{width: calcRem(475);}

            .dropdown{
                margin-top: 0;
                width: calcRem(205);
            }
        }
      }

      
    }
</style>
