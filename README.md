# poker-3d-card

## Description

## Install

```bash
yarn add poker-3d-card
```

## Usage

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

## Example

```vue
<template>
      <Poker3dCard>
        <div class="title">交控科技</div>
      </Poker3dCard>
</template>
```