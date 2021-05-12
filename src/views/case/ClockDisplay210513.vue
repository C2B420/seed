<template>
  <div class="wrapper">
    <div class="inner"></div>
  </div>
</template>

<script>
export default {
  name: 'ClockDisplay',
};
</script>

<style scoped lang="less">
  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: pink;

    .inner {
      .absolute_center();
      width: 500px;
      height: 100px;
      background-color: deeppink;
    }
  }
</style>
