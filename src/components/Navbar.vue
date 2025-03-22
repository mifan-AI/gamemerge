<template>
  <nav class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/" class="text-2xl font-bold text-indigo-600">
              GameMerge
            </router-link>
          </div>

          <!-- 导航链接 -->
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <router-link
              v-for="category in categories"
              :key="category.id"
              :to="{ name: 'category', params: { id: category.id }}"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-indigo-600"
              :class="{ 'border-b-2 border-indigo-500': isCurrentCategory(category.id) }"
            >
              {{ category.name }}
            </router-link>
          </div>
        </div>

        <!-- 移动端菜单按钮 -->
        <div class="flex items-center sm:hidden">
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">打开主菜单</span>
            <svg
              class="h-6 w-6"
              :class="{ 'hidden': isMobileMenuOpen, 'block': !isMobileMenuOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              class="h-6 w-6"
              :class="{ 'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- 移动端菜单 -->
    <div class="sm:hidden" :class="{ 'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }">
      <div class="pt-2 pb-3 space-y-1">
        <router-link
          v-for="category in categories"
          :key="category.id"
          :to="{ name: 'category', params: { id: category.id }}"
          class="block pl-3 pr-4 py-2 text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-gray-50"
          :class="{ 'bg-indigo-50 border-l-4 border-indigo-500': isCurrentCategory(category.id) }"
          @click="isMobileMenuOpen = false"
        >
          {{ category.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { categories } from '../data/games'

const route = useRoute()
const isMobileMenuOpen = ref(false)

const isCurrentCategory = (categoryId) => {
  return route.name === 'category' && route.params.id === categoryId
}
</script> 