<template>
  <div class="wrapper">
    <div class="inner">
      <div class="menu-icon" :class="{'menu-unfold': isUnfold}" @click="isUnfold = !isUnfold">
        <div class="menu-icon-line"></div>
        <div class="menu-icon-line"></div>
        <div class="menu-icon-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuDisplay210514',
  data() {
    return {
      isUnfold: true,
    };
  },
};
</script>

<style scoped lang="less">
  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, #ffba5a, #ff6c6e);

    .inner {
      .absolute_center();
      width: 62px;
      height: 45px;
      .menu-icon {
        &.menu-unfold {
          .menu-icon-line:nth-child(1){
            transform: translateY(13px) rotateZ(-45deg);
          }

          .menu-icon-line:nth-child(2) {
            opacity: 0;
          }

          .menu-icon-line:nth-child(3) {
            transform: translateY(-13px) rotateZ(45deg);
          }
        }

        .menu-icon-line {
          width: 50px;
          height: 7px;
          margin: 6px;
          background-color: rgba(255, 255, 255, 0.65);
          border-radius: 3px;
          transition: opacity 1s, transform 1s;
        }
      }
    }
  }
</style>
