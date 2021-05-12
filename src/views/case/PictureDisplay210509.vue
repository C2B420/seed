<template>
  <div class="loading" :class="{'show': isLoading, 'hidden': !isLoading}">
    <div class="loading-tips">
      <i class="fa fa-spinner" :class="{'rotate': isLoading}"></i> loading
    </div>
  </div>
  <div class="picture-display-background"
       :style="{'background-image': 'url(' + backgroundImageUrl + ')'}">
    <div class="mask"></div>
  </div>
  <div class="picture-display-container" :class="{'show': !isLoading, 'hidden': isLoading}">
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
      isLoading: true,
    };
  },
  computed: {
    backgroundImageUrl() {
      return this.imgUrl[this.imgActiveIndex];
    },
  },
  mounted() {
    let flag = 0;
    this.imgUrl.forEach((imgUrl) => {
      const img = new Image();
      img.src = imgUrl;
      img.onload = () => {
        flag += 1;
        this.isLoading = flag / this.imgUrl.length < 1;
      };
    });
  },
};
</script>

<style scoped lang="less">
  @keyframes loadingRotate {
    from {
      transform: rotateZ(0);
    }
    to {
      transform: rotateZ(360deg);
    }
  }

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
    transition: top 1s ease-out;

    &.show {
      top: 0
    }

    &.hidden {
      top: -100%
    }

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

  .loading {
    z-index: 99;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.7;
    transition: top 1s ease-in;

    &.show {
      top: 0;
    }

    &.hidden {
      top: -100%;
    }

    .loading-tips {
      .absolute_center();
      width: 150px;
      height: 30px;
      line-height: 30px;
      font-size: 20px;
      color: rgba(255, 255, 255, .3);
      text-align: center;
      background-image: linear-gradient(to right, red, yellow);
      background-repeat: no-repeat;
      -webkit-background-clip: text;

      .rotate {
        color: orangered;
        animation: loadingRotate 2s infinite linear;
      }
    }
  }
</style>
