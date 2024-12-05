<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const slides = ref([
    {
        title: "Kichkina xo'jayin: oilaviy biznes",
        tags: ['Multfilm', 'Komediya'],
        age: '6+',
        image:
            'https://lumiere-a.akamaihd.net/v1/images/image_456f0a61.jpeg?region=0,0,1800,776',
    },
    {
        title: 'Avengers: Endgame',
        tags: ['Action', 'Adventure'],
        age: '13+',
        image:
            'https://avatars.mds.yandex.net/i?id=2cd12999ceb0f1e258ffc8922db350da_l-5383056-images-thumbs&n=13',
    },
    {
        title: 'Spider-Man: No Way Home',
        tags: ['Action', 'Adventure'],
        age: '13+',
        image: 'https://i.ytimg.com/vi/oQgTi2iyfKs/maxresdefault.jpg',
    },
]);

const currentSlide = ref(0);
const autoplayInterval = ref(null);

const visibleSlides = computed(() => {
    return [
        slides.value[slides.value.length - 1],
        ...slides.value,
        slides.value[0],
    ];
});

const nextSlide = () => {
    currentSlide.value++;
    if (currentSlide.value >= visibleSlides.value.length - 1) {
        setTimeout(() => {
            currentSlide.value = 1;
        }, 500);
    }
};

const startAutoplay = () => {
    autoplayInterval.value = setInterval(nextSlide, 3000);
};

const stopAutoplay = () => {
    clearInterval(autoplayInterval.value);
};

onMounted(() => {
    startAutoplay();
});

onBeforeUnmount(() => {
    stopAutoplay();
});
</script>


<template>
    <div class="swiper-container overflow-hidden relative w-full">
        <div class="swiper-track flex transition-transform duration-500"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div class="swiper-slide flex-shrink-0 w-full h-full" v-for="(slide, index) in visibleSlides" :key="index">
                <div class="swiper-item h-[300px] md:h-[500px]  relative w-full">
                    <div class="blind absolute top-0 left-0"></div>
                    <div class="text z-[11] absolute middle:bottom-[20%] bottom-[10%] left-[50px]">
                        <h1
                            class="text-2xl sm:text-3xl lg:text-6xl lg:max-w-[400px] sm:max-w-[200px] font-bebas max-w-[150px] font-bold text-white">
                            {{ slide.title }}</h1>
                        <ul
                            class="flex sm:text-[12px] lg:text-[14] text-[8px] gap-1 text-main font-poppins text-yellow font-medium">
                            <li v-for="(tag, i) in slide.tags" :key="i">{{ tag }},</li>
                            <li>{{ slide.age }}</li>
                        </ul>
                        <button
                            class="text-[12px] sm:text-[16px] lg:text-[24px] lg:w-[200px] font-bebas flex items-center justify-center pt-[7px] w-[150px] text-center bg-main text-white py-[3px] rounded-md">Tomosha
                            qilish</button>
                    </div>
                    <img class="image w-full h-[700px] object-cover rounded-sm" :src="slide.image" :alt="slide.title" />
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.swiper-container {
    width: 100%;
    height: 100%;
}

.swiper-track {
    display: flex;
    width: 100%;
}

.swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
}

.blind {
    background: linear-gradient(0deg,
            rgba(0, 0, 0, 0.5) 30%,
            rgba(0, 0, 0, 0.2) 70%);
    z-index: 10;
    width: 100%;
    height: 100%;
}

.image {
    object-fit: cover;
    height: 100%;
    width: 100%;
}
</style>