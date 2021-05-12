<template>
  <div class="colon" :style="{
    'width': w + 'px',
    'height': h + 'px'
  }">
    <div class="dot" :style="{
      'width': w + 'px',
      'height': w + 'px',
      'background-color': color,
      'margin-left': -w/2 + 'px',
      'margin-top': -w/2 + 'px',
      'transform': 'translateY(' + -w + 'px)',
    }"></div>
    <div class="dot" :style="{
      'width': w + 'px',
      'height': w + 'px',
      'background-color': color,
      'margin-left': -w/2 + 'px',
      'margin-top': -w/2 + 'px',
      'transform': 'translateY(' + h/5 + 'px)',
    }"></div>
  </div>
</template>

<script>
export default {
  name: 'Colon',
  props: {
    w: {
      type: Number,
      default: 10,
    },
    h: {
      type: Number,
      default: 127,
    },
    color: {
      type: String,
      default: '#000000',
    },
  },
};
</script>

<style scoped lang="less">
  .colon {
    position: relative;
    padding: 0 3px;

    .dot {
      position: absolute;
      left: 50%;
      top: 50%;
      border-radius: 50%;
    }
  }
</style>
