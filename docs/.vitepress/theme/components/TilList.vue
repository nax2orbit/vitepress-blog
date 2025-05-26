<script setup>
import { ref, computed } from 'vue'
import rawArticles from '../../til/til-list.json' // ビルド時生成のJSON

//Exclude articles with the title "TIL"
const articles = rawArticles.filter(article => article.title !== 'TIL')

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
    <div v-for="article in paginated" :key="article.url" class="til-entry-wrapper">
      <div class="til-entry">
        <div class="til-date">{{ article.date }}</div>
        <p>{{ article.summary }}</p>
      </div>
    </div>
    <div class="pagination">
      <button @click="prev" :disabled="page===1">Prev</button>
      <span>Page {{ page }} / {{ Math.ceil(total/pageSize) }}</span>
      <button @click="next" :disabled="page*pageSize>=total">Next</button>
    </div>
  </div>
</template>

<style scoped>
.til-entry-wrapper {
  margin-bottom: 1.5em;
}
.til-entry {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1em;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  white-space: pre-line;
}
.til-date {
  font-size: 0.95em;
  color: #888;
  margin-bottom: 0.5em;
}
</style>