<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const isMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav :class="['navbar', isScrolled ? 'scrolled' : '', 'max-w-[1200px]', 'w-full', 'py-[20px]', 'px-[10px]', 'm-auto']">
    <div class="w-full flex items-center justify-between">
      <!-- Left Section -->
      <div class="nav-right flex items-center gap-[30px] lg:gap-[50px]">
        <!-- Brand -->
        <div class="nav-brand flex items-center gap-[5px]">
          <box-icon class="w-[20px]" name="movie-play" type="solid" color="#ff2c1f"></box-icon>
          <span class="text-2xl font-bold text-white font-poppins">Kinobiz</span>
        </div>

        <!-- Navbar List (Desktop) -->
        <ul class="navbar-list hidden lg:flex items-center gap-[30px]">
          <li class="text-white"><router-link to="/about">Barchasi</router-link></li>
          <li class="text-white"><router-link to="/about">Kinolar</router-link></li>
          <li class="text-white"><router-link to="/about">Seriallar</router-link></li>
          <li class="text-white"><router-link to="/about">Animelar</router-link></li>
          <li class="text-white"><router-link to="/about">Multfilmar</router-link></li>
        </ul>

        <!-- Navbar List (Mobile) -->
        <ul
          :style="isMenuOpen ? { top: '70px' } : { top: '-500px' }"
          class="navbar-list flex flex-col items-center absolute left-0 w-full bg-background gap-[20px] transition-all duration-300 lg:hidden"
        >
          <li class="text-white"><router-link to="/about">Barchasi</router-link></li>
          <li class="text-white"><router-link to="/about">Kinolar</router-link></li>
          <li class="text-white"><router-link to="/about">Seriallar</router-link></li>
          <li class="text-white"><router-link to="/about">Animelar</router-link></li>
          <li class="text-white"><router-link to="/about">Multfilmar</router-link></li>
        </ul>
      </div>

      <!-- Right Section -->
      <div class="nav-left flex items-center gap-[10px] text-white">
        <button class="nav-btn p-[10px] flex-shrink-0">EN</button>
        <button class="nav-btn p-[10px] flex-shrink-0 flex items-center justify-center">
          <box-icon name="search" color="#ffff"></box-icon>
        </button>
        <button @click="toggleMenu" class="lg:hidden nav-btn p-[10px] flex items-center justify-center">
          <box-icon :name="isMenuOpen ? 'x' : 'menu-alt-right'" color="#ffff"></box-icon>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: transparent;
  color: var(--text-color) !important;
  position: sticky;
  width: 100% !important;
  top: 0;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
  backdrop-filter: none;
}

.navbar.scrolled {
  background-color: rgba(29, 31, 30, 0.5);
  backdrop-filter: blur(10px);
}

.navbar-list {
  z-index: 1000;
}

.nav-btn {
  width: 45px;
  height: 45px;
  border-radius: 5px;
  color: #ffff;
  background-color: rgba(255, 255, 255, 0.1);
}

@media (max-width: 900px) {
  .nav-right {
    gap: 20px;
  }
}
</style>
