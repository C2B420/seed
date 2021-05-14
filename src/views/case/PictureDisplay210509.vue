<template>
  <div class="loading" :class="{'show': isLoading, 'hidden': !isLoading}">
    <div class="loading-tips">
      <i class="fa fa-spinner" :class="{'rotate': isLoading}" v-show="isLoading"></i>
      <i class="fa fa-check" v-show="!isLoading"></i>
      loading
    </div>
  </div>
  <div class="picture-display-background"
       :style="{'background-image': 'url(' + backgroundImageUrl + ')'}">
    <div class="mask"></div>
  </div>
  <div class="picture-display-container" :class="{'show': !isLoading, 'hidden': isLoading}">
    <div class="wrapper">
      <div class="inner" v-for="(img, index) in imgInfo" :key="index + '-' + img.url"
           :class="{
              'left': imgActiveIndex === (index + 1) % 3,
              'middle': imgActiveIndex === index,
              'right': imgActiveIndex === (index + 2) % 3,
            }">
        <img :src="img.url" :alt="img.title">
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
      <div class="text-content" v-for="(img, index) in imgInfo" :key="index + '-' + img.title"
           :class="{'show': imgActiveIndex === index, 'hidden': imgActiveIndex !== index}">
        <div class="text-title">
          {{img.title}}
        </div>
        <div class="line"></div>
        <div class="text-description">
          {{img.description}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PictureDisplay210509',
  data() {
    return {
      isLoading: true,
      imgActiveIndex: 1,
      imgInfo: [{
        url: 'https://source.unsplash.com/8GNkoWJTchc',
        title: 'Steak',
        description: 'Chunky beef is one of the most common foods in Western cuisine. Steak cooking methods are mainly fried and barbecued.',
      }, {
        url: 'https://source.unsplash.com/jUPOXXRNdcA',
        title: 'Salad',
        description: 'It is a common dish in western food, usually as a side dish or appetizer, sometimes as a main dish.',
      }, {
        url: 'https://source.unsplash.com/cVqNYbeN1WY',
        title: 'Hamburger',
        description: 'It is a food with ground meat in a round bread, which is a sandwich by definition, and is now a recognized representative of American fast food.',
      }],
    };
  },
  computed: {
    backgroundImageUrl() {
      return this.imgInfo[this.imgActiveIndex].url;
    },
  },
  mounted() {
    let flag = 0;
    this.imgInfo.forEach((item) => {
      const img = new Image();
      img.src = item.url;
      img.onload = () => {
        flag += 1;
        this.isLoading = flag / this.imgInfo.length < 1;
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
      .absolute_translate_vertical_center();
      .arrow_common();
      left: @_arrow_distance;

    }

    .right-arrow {
      .absolute_translate_vertical_center();
      .arrow_common();
      right: @_arrow_distance;
    }

    .text-content {
      .absolute_translate_center();
      margin-top: 100px;
      z-index: 3;
      width: 400px;
      height: 300px;
      color: white;
      font-family: Monospaced, sans-serif, serif;
      overflow: hidden;
      transition: opacity 1.2s;

      &.show {
        opacity: 1;
      }

      &.hidden {
        opacity: 0;
      }

      .text-title {
        position: relative;
        margin-top: 50px;
        font-size: 60px;
        font-weight: bolder;
      }

      .line {
        width: 50%;
        height: 5px;
        border-radius: 2px;
        margin: 10px 0;
        background-color: white;
      }

      .text-description {
        font-size: 20px;
        line-height: 1.3;

        &:first-letter {
          font-size: 40px;
        }
      }
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
      .absolute_translate_center();
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
