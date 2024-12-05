<script setup>
import swiper from '../components/swiper.vue'
import indicator from '../components/indicator.vue';
import slider from '../components/slider.vue';
</script>

<template>
    <swiper />

    <!-- /kinolar  -->
    <indicator title="Kinolar" link="/movies" />
    <slider />

    <!-- /seriallar  -->
    <indicator title="Seriallar" link="/movies" />
    <slider />

    <!-- /multfilmlar  -->
    <indicator title="Multfilmlar" link="/movies" />
    <slider />

    <!-- /animelar  -->
    <indicator title="Animelar" link="/movies" />
    <slider />
</template>

<style scoped></style>