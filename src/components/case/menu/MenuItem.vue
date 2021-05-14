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
    width: 60px;
    height: 60px;
    border-radius: 50%;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.35);

    &:hover {
      background-color: rgba(255, 255, 255, 0.5);

      span {
        font-size: 35px;
      }
    }

    span {
      color: rgba(255, 255, 255, 0.65);
      line-height: 60px;
      font-size: 30px;
    }
  }
</style>
