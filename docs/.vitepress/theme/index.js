import DefaultTheme from 'vitepress/theme'
import './style.css'
import DocsList from './components/DocsList.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('DocsList', DocsList)
  }
}