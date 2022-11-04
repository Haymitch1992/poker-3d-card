# poker-3d-card

## Install

```bash
yarn add poker-3d-card
```

## usage

main.js

```js
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "../node_modules/poker-3d-card/style.css"; 
import Poker from 'poker-3d-card'

const app = createApp(App);
app.use(Poker); //注册
app.mount("#app");
```

## example

```vue
<template>
      <Poker3dCard>
        <div class="title">交控科技</div>
      </Poker3dCard>
</template>
```