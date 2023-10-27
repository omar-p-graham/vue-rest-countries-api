import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Font Awsome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faArrowLeft, faMagnifyingGlass, faMoon, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'
/* add icons to the library */
library.add(faArrowLeft, faMagnifyingGlass, faSun, faMoon, faAngleDown, faAngleUp)

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
