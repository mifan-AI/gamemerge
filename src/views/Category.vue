<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div v-if="category" class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ category.name }}</h1>
      <p class="text-xl text-gray-600">{{ category.description }}</p>
    </div>

    <!-- 游戏列表 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="game in categoryGames" :key="game.id"
           class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
        <div class="relative">
          <img :src="game.thumbnail" :alt="game.name" class="w-full h-48 object-cover">
          <div class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-200"></div>
        </div>
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ game.name }}</h3>
          <p class="text-gray-600 mb-4">{{ game.description }}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tag in game.tags" :key="tag"
                  class="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
              {{ tag }}
            </span>
          </div>
          <router-link
            :to="{ name: 'game', params: { id: game.id }}"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            开始游戏
          </router-link>
        </div>
      </div>
    </div>

    <!-- 空状态 -->
    <div v-if="categoryGames.length === 0" class="text-center py-12">
      <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 class="mt-2 text-sm font-medium text-gray-900">暂无游戏</h3>
      <p class="mt-1 text-sm text-gray-500">该分类下暂时没有可玩的游戏。</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { categories, games } from '../data/games'

const route = useRoute()

const category = computed(() => {
  return categories.find(c => c.id === route.params.id)
})

const categoryGames = computed(() => {
  return games.filter(g => g.category === route.params.id)
})
</script> 