<template lang="pug">
.grid.gap-2.rounded-lg.overflow-hidden.bg-zinc-800(v-for="collection, index in collections" :key="index" class="sm:flex")
  ElImage(
    class="sm:(w-50 h-75)"
    :src="collection.src"
    :preview-src-list="[collection.src]"
    fit="cover"
    lazy
    hide-on-click-modal
  )
  article.flex-1.grid.content-start.gap-2.p-2
    a.text-blue-400(v-if="collection.link" target="_blank" :href="collection.link") {{ collection.title }}
      Icon.ms-2.mb-1.align-middle(name="mdi:link-variant")
    p.text-amber-400(v-else) {{ collection.title }}
    .flex.gap-2(v-if="collection.tag")
      ElTag(v-for="tag in collection.tag" :key="tag" effect="dark" round) {{ tag }}
    p {{ collection.descript }}
</template>

<script setup lang="ts">
import collections from '@/data/collections'
</script>