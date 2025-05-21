import DefaultTheme from 'vitepress/theme'
import './style.css'
import DocsList from './components/DocsList.vue'
import TilList from './components/TilList.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('DocsList', DocsList)
    app.component('TilList', TilList)
  }
}