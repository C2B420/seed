<template>
  <div class="item">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
};
</script>

<style scoped lang="less">
  .item {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.35);

    &:hover {
      background-color: rgba(255, 255, 255, 0.5);

      span {
        font-size: 30px;
      }
    }

    span {
      color: rgba(255, 255, 255, 0.65);
      line-height: 50px;
      font-size: 26px;
    }
  }
</style>
