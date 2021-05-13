<template>
  <div class="card"
       :style="{
          'width': width + 'px',
          'height': height + 'px',
          'color': color,
          'font-size': fontSize + 'px',
        }">
    <div class="back" :data-number="preNumber" :style="{'line-height': height + 'px'}"></div>
    <div class="font" :data-number="number" :class="{'flip': isFlip}"
         :style="{'line-height': height + 'px'}"></div>
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
    preNumber: {
      type: String,
      default: '0',
    },
  },
  data() {
    return {
      isFlip: false,
    };
  },
  watch: {
    number() {
      this.isFlip = true;
      setTimeout(() => {
        this.isFlip = false;
      }, 500);
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
    perspective: 200px;

    .back, .font {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 12px;
      transform-style: preserve-3d;

      &::before {
        display: block;
        position: absolute;
        width: 100%;
        height: 50%;
        content: attr(data-number);
        overflow: hidden;
        border-radius: 12px 12px 0 0;
        background-color: #323232;
      }

      &::after {
        display: block;
        position: absolute;
        width: 100%;
        height: 50%;
        top: 50%;
        content: attr(data-number);
        overflow: hidden;
        border-radius: 0 0 12px 12px;
        line-height: 0;
        background-color: #323232;
      }
    }

    .font::after {
      transform-origin: top center;
    }

    .flip::after {
      animation: flip 500ms ease-in-out both;
    }

    .line {
      .absolute_vertical_center();
      width: 100%;
      height: 1px;
      background-color: gray;
    }
  }

  @keyframes flip {
    from {
      transform: rotateX(179deg);
    }
    to {
      transform: rotateX(0);
    }
  }
</style>
