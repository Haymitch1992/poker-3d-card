<script setup>
import { reactive, ref, onMounted } from 'vue';
defineOptions({
  name: 'Poker3dCard',
});
const card = ref();
const cardwrapper = ref();
const cardData = reactive({
  x: 100,
  y: 100,
  rX: 26,
  rY: 26,
  bgX: 40,
  bgY: 40,
});
onMounted(() => {
  const el = card._value;
  const wrap = cardwrapper._value;
  // const el = document.querySelector('.card');
  // const wrap = document.querySelector('.card__wrapper');
  let w = el.clientWidth;
  let h = el.clientHeight;
  let b = el.getBoundingClientRect();
  el.addEventListener('mousemove', (e) => {
    let X = (e.clientX - b.left) / w;
    let Y = (e.clientY - b.top) / h;

    cardData.rX = -(X - 0.5) * 26;
    cardData.rY = (Y - 0.5) * 26;

    cardData.bgX = 40 + 20 * X;
    cardData.bgY = 40 + 20 * Y;

    cardData.x = 100 * X;
    cardData.y = 100 * Y;

    let rX = -(X - 0.5) * 26;
    let rY = (Y - 0.5) * 26;

    let bgX = 40 + 20 * X;
    let bgY = 40 + 20 * Y;

    console.log(X, Y);

    document.documentElement.style.setProperty('--x', 100 * X + '%');
    document.documentElement.style.setProperty('--y', 100 * Y + '%');

    document.documentElement.style.setProperty('--bg-x', bgX + '%');
    document.documentElement.style.setProperty('--bg-y', bgY + '%');

    document.documentElement.style.setProperty('--r-x', rX + 'deg');
    document.documentElement.style.setProperty('--r-y', rY + 'deg');
  });
});
</script>

<template>
  <div class="container">
    <div class="card" ref="card">
      <div class="card__wrapper" ref="cardwrapper">
        <div class="card__3d">
          <div class="card__image">
            <slot></slot>
          </div>
          <div class="card__layer1"></div>
          <div class="card__layer2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
:root {
  --step: 5%;

  --rainbow: repeating-linear-gradient(
      0deg,
      rgb(255, 119, 115) calc(var(--step) * 1),
      rgba(255, 237, 95, 1) calc(var(--step) * 2),
      rgba(168, 255, 95, 1) calc(var(--step) * 3),
      rgba(131, 255, 247, 1) calc(var(--step) * 4),
      rgba(120, 148, 255, 1) calc(var(--step) * 5),
      rgb(216, 117, 255) calc(var(--step) * 6),
      rgb(255, 119, 115) calc(var(--step) * 7)
    )
    0% var(--bg-y) / 200% 700%;
  --diagonal: repeating-linear-gradient(
      128deg,
      #0e152e 0%,
      hsl(180, 10%, 60%) 3.8%,
      hsl(180, 10%, 60%) 4.5%,
      hsl(180, 10%, 60%) 5.2%,
      #0e152e 10%,
      #0e152e 12%
    )
    var(--bg-x) var(--bg-y) / 300%;
  --shade: radial-gradient(
      farthest-corner circle at var(--x) var(--y),
      rgba(255, 255, 255, 0.1) 12%,
      rgba(255, 255, 255, 0.15) 20%,
      rgba(255, 255, 255, 0.25) 120%
    )
    var(--bg-x) var(--bg-y) / 300%;
}
.container {
  .card {
    width: 380px;
    height: 467px;
    box-sizing: border-box;
    position: relative;
  }
  .card__wrapper {
    perspective: 600px;
    position: absolute;
    inset: 0;
  }
  .card__3d {
    transform: rotateY(var(--r-x)) rotateX(var(--r-y));
    position: absolute;
    inset: 0;
    clip-path: inset(0 0 0 0 round 48px);
  }
  .card__image {
    clip-path: inset(0 0 0 0 round 48px);
    background: #015f01;
    // background: repeating-linear-gradient(
    //   45deg,
    //   #015f01,
    //   #015f01 35px,
    //   #077407 35px,
    //   #077407 70px
    // );
    cursor: pointer;
    height: 300px;
    width: 200px;
  }
  .card__image img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }

  /* soft light */
  .card__layer1 {
    position: absolute;
    inset: 0;
    z-index: 20;
    mix-blend-mode: soft-light;
    clip-path: inset(0 0 1px 0 round 48px);
    background: radial-gradient(
      farthest-corner circle at var(--x) var(--y),
      rgba(255, 255, 255, 0.8) 10%,
      rgba(255, 255, 255, 0.65) 20%,
      rgba(255, 255, 255, 0) 90%
    );
  }
  /* first crazy blend  */
  .card__layer2 {
    position: absolute;
    inset: 0;
    z-index: 30;

    mix-blend-mode: color-dodge;
    will-change: background;
    transition-property: opacity;
    clip-path: inset(0 0 1px 0 round 48px);

    background-blend-mode: hue, hue, hard-light, overlay;
    background: url('http://allyourhtml.club/carousel/pattern.webp') center /
        75%,
      var(--rainbow), var(--diagonal);
  }
  /* second crazy blend  */
  .card__layer2:after {
    content: '';
    position: absolute;
    inset: 0;
    background: url('http://allyourhtml.club/carousel/pattern.webp') center /
        75%,
      var(--rainbow), var(--diagonal), var(--shade);
    mix-blend-mode: exclusion;
    background-size: 75%, 200% 400%, 800%, 200%;
    background-position: center, 0% var(--bg-y),
      calc(var(--bg-x) * -1) calc(var(--bg-y) * -1), var(--bg-x) var(--bg-y);
    background-blend-mode: soft-light, hue, hard-light;
  }
  .card {
    width: 200px;
    height: 300px;
    border-radius: 8px;
  }
}
</style>
