<script>
export default {
  data() {
    return {
      docs: []
    };
  },
  created() {
    const files = import.meta.glob('/blog/*.md', { eager: true });

    console.log('取得したファイル一覧:', files);

    this.docs = Object.keys(files)
      .filter(path => !path.includes('index.md'))
      .map(path => {
        const cleanPath = path.replace('/blog/', '').replace('.md', '');
        return {
          title: files[path].frontmatter?.title || cleanPath,
          link: `/blog/${cleanPath}`
        };
      });

    console.log('変換後の docs:', this.docs);
  }
};
</script>

<template>
  <ul>
    <li v-for="doc in docs" :key="doc.link">
      <a :href="doc.link">{{ doc.title }}</a>
    </li>
  </ul>
</template>