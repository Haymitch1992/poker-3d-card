<script setup></script>

<template>
  <ul>
    <li>
      <Poker3dCard>
        <div class="title">交控科技</div>
      </Poker3dCard>
    </li>
    <li>
      <Poker3dCard>
        <div class="title">北京地铁</div>
      </Poker3dCard>
    </li>
    <li>
      <Poker3dCard>
        <div class="title">深圳地铁</div>
      </Poker3dCard>
    </li>
    <li>
      <Poker3dCard></Poker3dCard>
    </li>
    <li>
      <Poker3dCard></Poker3dCard>
    </li>
    <li>
      <Poker3dCard></Poker3dCard>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  width: 1200px;
}
li {
  display: inline-block;
  padding: 10px;
  margin: 0;
}
.title {
  color: #fff;
  font-size: 40px;
  line-height: 467px;
  text-align: center;
}
</style>
