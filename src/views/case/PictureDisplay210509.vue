<template>
  <div class="picture-display-background"
       :style="{'background-image': 'url(' + backgroundImageUrl + ')'}">
    <div class="mask"></div>
  </div>
  <div class="picture-display-container">
    <div class="wrapper">
      <div class="inner" v-for="(imgUrl, index) in imgUrl" :key="index + '-' + imgUrl"
           :class="{
              'left': imgActiveIndex === (index + 1) % 3,
              'middle': imgActiveIndex === index,
              'right': imgActiveIndex === (index + 2) % 3,
            }">
        <img :src="imgUrl" :alt="imgUrl">
        <div :class="{'mask': imgActiveIndex !== index}"></div>
      </div>
      <div class="left-arrow"
           @click="imgActiveIndex = imgActiveIndex - 1 < 0 ? 2 : imgActiveIndex - 1">
        <i class="fa fa-chevron-left"></i>
      </div>
      <div class="right-arrow"
           @click="imgActiveIndex = imgActiveIndex + 1 > 2 ? 0 : imgActiveIndex + 1">
        <i class="fa fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PictureDisplay210509',
  data() {
    return {
      imgUrl: [
        'https://source.unsplash.com/8GNkoWJTchc',
        'https://source.unsplash.com/jUPOXXRNdcA',
        'https://source.unsplash.com/cVqNYbeN1WY',
      ],
      imgActiveIndex: 1,
    };
  },
  computed: {
    backgroundImageUrl() {
      return this.imgUrl[this.imgActiveIndex];
    },
  },
};
</script>

<style scoped lang="less">
  @_arrow_distance: 70px;
  .arrow_common {
    z-index: 99;
    width: 30px;
    height: 30px;
    text-align: center;

    i {
      font-size: 30px;
      line-height: 30px;
      color: white;
    }
  }

  .picture-display-background {
    .bg_blur();
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;

    .background-1 {
      .bg_blur();
      position: absolute;
      width: 100%;
      height: 100%;
      margin-left: -100%;
    }

    .mask {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0.5;
    }
  }

  .picture-display-container {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: auto;

    .wrapper {
      position: relative;
      display: flex;
      width: 1000px;
      height: 100%;
      margin: auto;
      justify-content: center;
      align-items: center;
      perspective: 800px;

      .inner {
        position: absolute;
        width: 300px;
        height: 500px;
        margin: 0 5px;
        border-radius: 5px;
        overflow: hidden;
        transition: transform 0.8s, z-index 0.8s;
        transform-style: preserve-3d;

        &.left {
          transform: rotateY(30deg) translate3d(-230px, 0, -320px);
          z-index: 1;
        }

        &.middle {
          transform: rotateY(0) translate3d(0, 0, 0);
          z-index: 3;
        }

        &.right {
          transform: rotateY(-30deg) translate3d(230px, 0, -320px);
          z-index: 2;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        div {
          opacity: 0;
          transition: opacity 1s;

          &.mask {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #6a6a6a;
            opacity: 0.4;
          }
        }
      }
    }

    .left-arrow {
      .absolute_vertical_center();
      .arrow_common();
      left: @_arrow_distance;

    }

    .right-arrow {
      .absolute_vertical_center();
      .arrow_common();
      right: @_arrow_distance;
    }
  }
</style>
