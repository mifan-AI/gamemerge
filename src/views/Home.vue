<template>
  <div>
    <!-- 英雄区域 -->
    <div class="relative bg-indigo-800">
      <div class="absolute inset-0">
        <img class="w-full h-full object-cover" src="/hero-bg.jpg" alt="游戏背景">
        <div class="absolute inset-0 bg-indigo-800 mix-blend-multiply"></div>
      </div>
      <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          发现好玩的游戏
        </h1>
        <p class="mt-6 text-xl text-indigo-100 max-w-3xl">
          在GameMerge，你可以找到并玩到各种有趣的网页游戏。从经典到创新，从休闲到策略，总有一款适合你。
        </p>
      </div>
    </div>

    <!-- 热门游戏 -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-8">热门游戏</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="game in games" :key="game.id" 
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
    </div>

    <!-- 游戏分类 -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-8">游戏分类</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="category in categories" :key="category.id" 
             class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ category.name }}</h3>
            <p class="text-gray-600 mb-4">{{ category.description }}</p>
            <router-link
              :to="{ name: 'category', params: { id: category.id }}"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              浏览游戏
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- 特色功能 -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-8">为什么选择GameMerge</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="flex justify-center mb-4">
            <svg class="h-12 w-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">快速加载</h3>
          <p class="text-gray-600">优化的游戏加载速度，让你快速开始游戏体验。</p>
        </div>
        <div class="text-center">
          <div class="flex justify-center mb-4">
            <svg class="h-12 w-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">响应式设计</h3>
          <p class="text-gray-600">完美适配各种设备，随时随地享受游戏乐趣。</p>
        </div>
        <div class="text-center">
          <div class="flex justify-center mb-4">
            <svg class="h-12 w-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">定期更新</h3>
          <p class="text-gray-600">持续添加新的游戏内容，保持新鲜感。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { categories, games } from '../data/games'
</script> 