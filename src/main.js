import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import Poker from './packages/index'
import "../node_modules/poker-3d-card/style.css"; 
import Poker from 'poker-3d-card'

const app = createApp(App);
app.use(Poker); //注册

app.mount("#app");