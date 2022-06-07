import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Home from './views/home.vue'
import { Field, Icon,Button,Picker,Toast,Image, Popup  } from 'vant';

import 'amfe-flexible'
import '../src/assets/styles/normal.css'
createApp(App).use(store).use(router).use(Field).use(Icon).use(Button).use(Picker).use(Popup).use(Image).use(Toast).component('Home',Home).mount('#app')
