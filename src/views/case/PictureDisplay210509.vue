<template>
  <div class="picture-display-background"
       :style="{'background-image': 'url('+backgroundImageUrl+')'}">
  </div>
  <div class="picture-display-container">
    <ul>
      <li>
        <img :src="imgUrl[0]" :alt="imgUrl[0]" @click="backgroundImageUrl=imgUrl[0]">
      </li>
      <li>
        <img :src="imgUrl[1]" :alt="imgUrl[1]" @click="backgroundImageUrl=imgUrl[1]">
      </li>
      <li>
        <img :src="imgUrl[2]" :alt="imgUrl[2]" @click="backgroundImageUrl=imgUrl[2]">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PictureDisplay210509',
  data() {
    return {
      imgUrl: [
        'https://source.unsplash.com/jUPOXXRNdcA',
        'https://source.unsplash.com/8GNkoWJTchc',
        'https://source.unsplash.com/1Shk_PkNkNw',
      ],
      backgroundImageUrl: 'https://source.unsplash.com/8GNkoWJTchc',
    };
  },
};
</script>

<style scoped lang="less">
  .picture-display-background {
    .bg_blur();
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .picture-display-container {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: auto;

    ul {
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;

      li {
        width: 300px;
        height: 400px;
        overflow: hidden;
        margin: 0 5px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>
