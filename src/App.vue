<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showText = ref([false, false, false])
const showMain = ref(false)

onMounted(() => {
  let delay = 0
  showText.value.forEach((_, i) => {
    setTimeout(() => {
      showText.value[i] = true
      setTimeout(() => {
        showText.value[i] = false
        if (i == showText.value.length - 1) {
          setTimeout(() => {
            showMain.value = true
          }, 1000)
        }
      }, 2000) // 2 seconds to stay on screen
    }, delay)
    delay += 3000 // 3 seconds delay for each heading
  })
})
</script>

<template>
  <header>
    <transition
      name="float"
      v-for="(text, index) in ['Hello!', 'You\'ve Made it.', 'It\'s Great You\'re Here.']"
      :key="index"
    >
      <h1 v-if="showText[index]">{{ text }}</h1>
    </transition>
  </header>

  <transition name="fade">
    <main v-if="showMain">
      This Site is a Folio Work in Progress for
      <a href="https://www.linkedin.com/in/zechariah-wicks/" target="_blank">Zechariah Wicks</a>
    </main>
  </transition>
</template>

<style>
body {
  overflow-y: hidden;
}

/* Your existing styles here */
@keyframes float {
  0% {
    transform: translateY(100vh);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
}

.float-enter-active {
  animation: float 2s ease-in-out;
  display: flex;
  place-items: center;
}

.float-enter,
.float-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
