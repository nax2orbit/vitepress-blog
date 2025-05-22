// scripts/generate-til-list.js
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const fm = require('front-matter');

// til 配下の .md ファイルを全部取得
const files = glob.sync('docs/til/*.md');

const articles = files.map(file => {
  const content = fs.readFileSync(file, 'utf8');
  const { attributes, body } = fm(content);
  const basename = path.basename(file, '.md');
  return {
    title: attributes.title || basename,
    date: attributes.date || basename,
    summary: body.slice(0, 100), // 先頭100文字だけ
    url: `/til/${basename}.html`
  }
});

// 日付で新しい順にソート
articles.sort((a, b) => new Date(b.date) - new Date(a.date));

// JSONとして出力
fs.writeFileSync('docs/.vitepress/til/til-list.json', JSON.stringify(articles, null, 2));