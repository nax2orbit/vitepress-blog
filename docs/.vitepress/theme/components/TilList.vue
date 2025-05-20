<script setup>
import { ref, computed } from 'vue'
import articles from '../../til/til-list.json' // ビルド時生成のJSON

const pageSize = 10
const page = ref(1)
const total = articles.length
const paginated = computed(() => {
  const start = (page.value - 1) * pageSize
  return articles.slice(start, start + pageSize)
})

function next() {
  if (page.value * pageSize < total) page.value++
}
function prev() {
  if (page.value > 1) page.value--
}
</script>

<template>
  <div>
    <div v-for="article in paginated" :key="article.url" class="til-entry">
      <h2>
        <a :href="article.url">{{ article.title }}</a>
      </h2>
      <p>{{ article.summary }}</p>
    </div>
    <div class="pagination">
      <button @click="prev" :disabled="page===1">Prev</button>
      <span>Page {{ page }} / {{ Math.ceil(total/pageSize) }}</span>
      <button @click="next" :disabled="page*pageSize>=total">Next</button>
    </div>
  </div>
</template>