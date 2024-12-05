<script setup>
import card from '../components/card.vue';
import { ref } from 'vue';

const scrollContainer = ref(null);
const scrollAmount = 400; // Adjust this value based on your card width

const scroll = (direction) => {
    if (scrollContainer.value) {
        const newPosition = direction === 'left'
            ? scrollContainer.value.scrollLeft - scrollAmount
            : scrollContainer.value.scrollLeft + scrollAmount;

        scrollContainer.value.scrollTo({
            left: newPosition,
            behavior: 'smooth'
        });
    }
};
</script>

<template>
    <div class="slider-container relative">
        <div ref="scrollContainer"
            class="cards overflow-x-scroll flex mb-[20px] items-center gap-4 scroll-smooth hide-scrollbar">
            <card />
            <card />
            <card />
            <card />
            <card />
            <card />
            <card />
        </div>
        <button @click="scroll('left')"
            class="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-r">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
        </button>
        <button @click="scroll('right')"
            class="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-l">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
        </button>
    </div>
</template>

<style>
.hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.hide-scrollbar::-webkit-scrollbar {
    display: none;
}

.slider-container {
    padding: 0 40px;
}
</style>