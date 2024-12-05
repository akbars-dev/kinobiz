<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

defineProps({
    title: { type: String },
    link: { type: String }
});

</script>

<template>
    <div class="indicator mt-[50px] flex  items-center justify-between">
        <h1 class="font-poppins text-white text-3xl uppercase font-bold">{{ title }}</h1>
        <button class="h-[40px] w-[150px] font-poppins uppercase font-medium rounded-md text-white px-[10px] py-[5px] bg-main">
            <RouterLink class="text-[14px]" :to="link">Barchasi > </RouterLink>
        </button>
    </div>
</template>