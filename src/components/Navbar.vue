<script setup>
    import {ref,watch} from 'vue';

    const dark = ref(false);
    const mode = ref('Light Mode');
    const iconImg = ref('fa-regular fa-sun');

    const changeMode = () => {
        dark.value = !dark.value;
        mode.value = dark.value ? 'Dark Mode':'Light Mode';
        iconImg.value = dark.value ? 'fa-solid fa-moon':'fa-regular fa-sun';
        if(dark.value){document.querySelector('body').classList.add('dark');}else{document.querySelector('body').classList.remove('dark');} //Toggle light/dark modes
    }
</script>

<template>
    <header>
        <nav class="shadow">
            <div class="container">
                <h1>Where in the world?</h1>
                <div class="mode" @click="changeMode">
                    <font-awesome-icon :icon="iconImg" /> {{ mode }}
                </div>
            </div>
        </nav>
    </header>  
</template>

<style scoped lang="scss">
    @import '../assets/function';

    nav{
        display: flex;
        align-items: center;
        padding: calcRem(20) 0;
        color: var(--text-color);

        .container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            .mode:hover{cursor: pointer;}
        }
    }
</style>
