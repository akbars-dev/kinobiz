<script setup>
import { ref } from 'vue';
import { RouterView, RouterLink } from 'vue-router';
import MovieIcon from './icons/movie-icon.vue';
import SearchIcon from './icons/search-icon.vue';
import BurgerIcon from './icons/burger-icon.vue';
import CloseIcon from './icons/close-icon.vue';

const isMenuOpen = ref(false);

const openBurger = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
    <button
        class="close-btn absolute z-[1000001] right-[10px] top-[20px] border-none bg-[rgba(193,194,196,0.1)] p-[5px] rounded-md"
        :class="{ hidden: !isMenuOpen, block: isMenuOpen }" @click="openBurger">
        <close-icon />
    </button>

    <ul class="absolute top-0 h-[100vh] pt-[50px] z-[100000] gap-[10px] text-white font-poppins items-center flex-col text-[20px] w-full bg-black transition-all duration-300"
        :class="{ hidden: !isMenuOpen, flex: isMenuOpen }">
        <li><router-link>Barchasi</router-link></li>
        <li><router-link>Kinolar</router-link></li>
        <li><router-link>Seriallar</router-link></li>
        <li><router-link>Animelar</router-link></li>
        <li><router-link>Multfilmar</router-link></li>
    </ul>

    <nav class="navbar bg-transparent py-[20px]">
        <div class="navbar-child z-0 flex items-center justify-between max-w-[1200px] px-[10px] first:px-[0px] mx-auto">
            <div class="navbar-left flex items-center gap-[30px]">
                <router-link to="/" class="flex items-center gap-[5px]">
                    <movie-icon />
                    <span class="text-[#fff] font-poppins text-[28px] font-bold">Kinobiz</span>
                </router-link>

                <ul class="hidden nav-list items-center gap-[20px] text-white font-poppins second:flex">
                    <li><router-link>Barchasi</router-link></li>
                    <li><router-link>Kinolar</router-link></li>
                    <li><router-link>Seriallar</router-link></li>
                    <li><router-link>Animelar</router-link></li>
                    <li><router-link>Multfilmar</router-link></li>
                </ul>
            </div>

            <div class="navbar-right flex items-center gap-[8px]">
                <button
                    class="border-none bg-[rgba(193,194,196,0.1)] p-[8px] w-[100px] text-white font-poppins rounded-md font-medium">Aloqa</button>
                <button class="border-none bg-[rgba(193,194,196,0.1)] p-[5px] rounded-md">
                    <search-icon />
                </button>
                <button class="border-none second:hidden block bg-[rgba(193,194,196,0.1)] p-[5px] rounded-md"
                    @click="openBurger">
                    <burger-icon />
                </button>
            </div>
        </div>
    </nav>
</template>