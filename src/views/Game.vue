<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div v-if="game" class="bg-white rounded-lg shadow-lg overflow-hidden">
      <!-- 游戏信息 -->
      <div class="p-6 border-b border-gray-200">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ game.name }}</h1>
        <div class="flex flex-wrap gap-2 mb-4">
          <span v-for="tag in game.tags" :key="tag"
                class="px-3 py-1 text-sm font-medium bg-indigo-100 text-indigo-800 rounded-full">
            {{ tag }}
          </span>
        </div>
        <p class="text-gray-600">{{ game.description }}</p>
      </div>

      <!-- 游戏区域 -->
      <div class="relative">
        <iframe
          ref="gameFrame"
          :src="game.url"
          class="w-full border-0 bg-white h-[700px]"
          :allow="framePermissions"
          loading="lazy"
          @load="onFrameLoad"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          referrerpolicy="no-referrer"
        ></iframe>

        <!-- 全屏按钮 -->
        <button
          @click="toggleFullscreen"
          class="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <svg v-if="!isFullscreen" class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
          <svg v-else class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- 加载错误提示 -->
      <div v-if="loadError" class="p-4 bg-red-50 border-t border-red-200">
        <p class="text-red-600">
          游戏加载失败。请尝试直接访问：
          <a :href="game.url" target="_blank" rel="noopener noreferrer" class="underline">{{ game.url }}</a>
        </p>
      </div>
    </div>

    <!-- 加载状态 -->
    <div v-else class="flex justify-center items-center h-64">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { games } from '../data/games'

const route = useRoute()
const isFullscreen = ref(false)
const gameFrame = ref(null)
const loadError = ref(false)

const game = computed(() => {
  return games.find(g => g.id === route.params.id)
})

const framePermissions = computed(() => [
  'fullscreen',
  'accelerometer',
  'autoplay',
  'clipboard-write',
  'encrypted-media',
  'gyroscope',
  'picture-in-picture'
].join('; '))

const toggleFullscreen = async () => {
  isFullscreen.value = !isFullscreen.value
  
  if (isFullscreen.value) {
    try {
      if (gameFrame.value) {
        await gameFrame.value.requestFullscreen()
      } else {
        await document.documentElement.requestFullscreen()
      }
    } catch (err) {
      console.warn('Fullscreen request failed:', err)
    }
  } else {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen()
      }
    } catch (err) {
      console.warn('Exit fullscreen failed:', err)
    }
  }
}

const onFrameLoad = (event) => {
  try {
    // 尝试访问iframe内容来检查是否加载成功
    const frameContent = event.target.contentWindow
    if (!frameContent) {
      loadError.value = true
    }
  } catch (err) {
    console.warn('Frame load error:', err)
    loadError.value = true
  }
}
</script>

<style scoped>
iframe {
  /* 防止 iframe 内容溢出 */
  max-width: 100%;
  /* 添加平滑过渡效果 */
  transition: all 0.3s ease;
}

/* 全屏模式样式 */
:fullscreen iframe {
  width: 100vw;
  height: 100vh;
}
</style> 