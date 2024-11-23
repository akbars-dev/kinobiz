<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const slideId = ref(0);
const sliderData = [
    {
        category: "Multfilm",
        janre: "Komediya",
        image: "https://image.tmdb.org/t/p/original/z1s7yuQbDOhJE2zvvADofBCL9j1.jpg",
        title: "Boss Baby",
    },
    {
        category: "Multfilm",
        janre: "Komediya",
        image: "https://image.tmdb.org/t/p/original/z1s7yuQbDOhJE2zvvADofBCL9j1.jpg",
        title: "Boss Baby 2",
    },
    {
        category: "Multfilm",
        janre: "Komediya",
        image: "https://image.tmdb.org/t/p/original/z1s7yuQbDOhJE2zvvADofBCL9j1.jpg",
        title: "Boss Baby 3",
    },
];

let interval;

const startAutoplay = () => {
    interval = setInterval(() => {
        slideId.value = (slideId.value + 1) % sliderData.length;
    }, 3000);
};

const stopAutoplay = () => {
    clearInterval(interval);
};

onMounted(() => startAutoplay());
onUnmounted(() => stopAutoplay());
</script>

<template>
    <div class="swiper relative w-full h-[70vh] overflow-hidden" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
        <div class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${slideId * 100}%)` }">
            <div v-for="(slide, index) in sliderData" :key="index"
                class="swiper-slide w-full flex-shrink-0 relative h-full">
                <img :src="slide.image" alt="Slide Image" class="w-full h-full object-cover rounded-md" />

                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent blind"></div>

                <div
                    class="text flex flex-col items-start gap-4 absolute bottom-[20%] left-[8%] text-white z-10 space-y-3">

                    <span class="text-[30px] h-[0px] space-x-2 flex items-center font-bebas font-medium">
                        <box-icon class="pb-[2px]" name="hot" type="solid" color="#ff2c1f"></box-icon>
                        {{ slide.category }}
                    </span>

                    <h1 class="text-[60px] h-[40px] font-bebas font-bold">{{ slide.title }}</h1>
                    <span class="text-3xl h-[10px] space-y-0 font-bebas text-yellow-400 font-bold">
                        Janr:
                        <b class="text-white font-normal font-bebas text-2xl">{{ slide.janre }}</b>
                    </span>
                    <button
                        class="mt-[10px] w-[200px] flex items-center justify-center bg-main rounded-lg h-[40px] font-semibold hover:bg-main-light transition">
                        Ko'rish
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.swiper {
    width: 100%;
    height: 70vh;
}



h1 {
    margin: 0px !important;
}

.swiper-slide {
    position: relative;
    transition: 0.3s;
}

.blind {
    background: rgb(0, 0, 0);
    background: linear-gradient(0deg,
            rgba(0, 0, 0, 0.563) 28%,
            rgba(0, 0, 0, 0.238) 66%,
            rgba(0, 0, 0, 0.238) 75%);
    opacity: 1;
}

.text {
    position: absolute;
    bottom: 30%;
    left: 8%;
    z-index: 1000;
}
</style>
