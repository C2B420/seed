<template>
  <div class="card"
       :style="{
          'width': width + 'px',
          'height': height + 'px',
          'background-color': bgColor,
          'color': color,
          'font-size': fontSize + 'px',
        }">
    <span :style="{'line-height': height + 'px'}">
      {{number}}
    </span>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'DigitalFlipCard',
  props: {
    width: {
      type: Number,
      default: 77,
    },
    height: {
      type: Number,
      default: 127,
    },
    bgColor: {
      type: String,
      default: '#323232',
    },
    color: {
      type: String,
      default: '#FFFFFF',
    },
    fontSize: {
      type: Number,
      default: 90,
    },
    number: {
      type: String,
      default: '0',
    },
  },
};
</script>

<style scoped lang="less">
  .card {
    position: relative;
    margin: 3px;
    border-radius: 12px;
    font-weight: bolder;
    text-align: center;
    box-shadow: 0 0 5px #323232;

    .line {
      .absolute_vertical_center();
      width: 100%;
      height: 1px;
      background-color: gray;
    }
  }
</style>
