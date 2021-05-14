<template>
  <div class="wrapper">
    <div class="inner">
      <ul>
        <li :class="itemClass">
          <menu-item><i class="fa fa-qq"></i></menu-item>
        </li>
        <li :class="itemClass">
          <menu-item><i class="fa fa-weixin"></i></menu-item>
        </li>
        <li :class="itemClass">
          <menu-item><i class="fa fa-facebook"></i></menu-item>
        </li>
        <li :class="itemClass">
          <menu-item><i class="fa fa-twitter"></i></menu-item>
        </li>
        <li :class="itemClass">
          <menu-item><i class="fa fa-github"></i></menu-item>
        </li>
        <li :class="itemClass">
          <menu-item><i class="fa fa-gitlab"></i></menu-item>
        </li>
      </ul>
      <div class="menu-icon" :class="{'menu-unfold': isUnfold}" @click="isUnfold = !isUnfold">
        <div class="menu-icon-line"></div>
        <div class="menu-icon-line"></div>
        <div class="menu-icon-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from 'components/case/menu/MenuItem.vue';

export default {
  name: 'MenuDisplay210514',
  components: {
    MenuItem,
  },
  data() {
    return {
      isUnfold: false,
    };
  },
  computed: {
    itemClass() {
      return { 'item-show': this.isUnfold, 'item-hidden': !this.isUnfold };
    },
  },
};
</script>

<style scoped lang="less">

  @_offset_distance: 90px;

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
        position: relative;

        &:hover {
          .menu-icon-line {
            background-color: rgba(255, 255, 255, 0.8);
          }
        }

        &.menu-unfold {
          .menu-icon-line:nth-child(1) {
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
          transition: opacity 900ms, transform 900ms;
        }
      }

      ul {
        .absolute_center();

        li {
          .absolute_hasWH_center(50, 50);
          list-style: none;
          opacity: 0;

          &.item-show:nth-child(1) {
            animation: showItem1 150ms linear both;
          }

          &.item-show:nth-child(2) {
            animation: showItem2 300ms linear both;
          }

          &.item-show:nth-child(3) {
            animation: showItem3 450ms linear both;
          }

          &.item-show:nth-child(4) {
            animation: showItem4 600ms linear both;
          }

          &.item-show:nth-child(5) {
            animation: showItem5 750ms linear both;
          }

          &.item-show:nth-child(6) {
            animation: showItem6 900ms linear both;
          }

          &.item-hidden:nth-child(1) {
            animation: hiddenItem1 150ms 750ms linear both;
          }

          &.item-hidden:nth-child(2) {
            animation: hiddenItem2 300ms 600ms linear both;
          }

          &.item-hidden:nth-child(3) {
            animation: hiddenItem3 450ms 450ms linear both;
          }

          &.item-hidden:nth-child(4) {
            animation: hiddenItem4 600ms 300ms linear both;
          }

          &.item-hidden:nth-child(5) {
            animation: hiddenItem5 750ms 150ms linear both;
          }

          &.item-hidden:nth-child(6) {
            animation: hiddenItem6 900ms linear both;
          }
        }
      }
    }
  }

  @keyframes showItem1 {
    100% {
      opacity: 1;
      transform: translate(-@_offset_distance, 0);
    }
  }

  @keyframes hiddenItem1 {
    0% {
      opacity: 1;
      transform: translate(-@_offset_distance, 0);
    }
    100% {
      opacity: 0;
      transform: translate(0, 0);
    }
  }

  @keyframes showItem2 {
    50% {
      opacity: 1;
      transform: translate(-@_offset_distance, 0);
    }
    100% {
      opacity: 1;
      transform: translate(-0.5*@_offset_distance, -0.866*@_offset_distance);
    }
  }

  @keyframes hiddenItem2 {
    0% {
      opacity: 1;
      transform: translate(-0.5*@_offset_distance, -0.866*@_offset_distance);
    }
    50% {
      opacity: 1;
      transform: translate(-@_offset_distance, 0);
    }
    100% {
      opacity: 0;
      transform: translate(0, 0);
    }
  }

  @keyframes showItem3 {
    33.33% {
      opacity: 1;
      transform: translate(-@_offset_distance, 0);
    }
    66.67% {
      opacity: 1;
      transform: translate(-0.5*@_offset_distance, -0.866*@_offset_distance);
    }
    100% {
      opacity: 1;
      transform: translate(0.5*@_offset_distance, -0.866*@_offset_distance);
    }
  }

  @keyframes hiddenItem3 {
    0% {
      opacity: 1;
      transform: translate(0.5*@_offset_distance, -0.866*@_offset_distance);
    }
    33.33% {
      opacity: 1;
      transform: translate(-0.5*@_offset_distance, -0.866*@_offset_distance);
    }
    66.67% {
      opacity: 1;
      transform: translate(-@_offset_distance, 0);
    }
    100% {
      opacity: 0;
      transform: translate(0, 0);
    }
  }

  @keyframes showItem4 {
    25% {
      opacity: 1;
      transform: translate(-@_offset_distance, 0);
    }
    50% {
      opacity: 1;
      transform: translate(-0.5*@_offset_distance, -0.866*@_offset_distance);
    }
    75% {
      opacity: 1;
      transform: translate(0.5*@_offset_distance, -0.866*@_offset_distance);
    }
    100% {
      opacity: 1;
      transform: translate(@_offset_distance, 0);
    }
  }

  @keyframes hiddenItem4 {
    0% {
      opacity: 1;
      transform: translate(@_offset_distance, 0);
    }
    25% {
      opacity: 1;
      transform: translate(0.5*@_offset_distance, -0.866*@_offset_distance);
    }
    50% {
      opacity: 1;
      transform: translate(-0.5*@_offset_distance, -0.866*@_offset_distance);
    }
    75% {
      opacity: 1;
      transform: translate(-@_offset_distance, 0);
    }
    100% {
      opacity: 0;
      transform: translate(0, 0);
    }
  }

  @keyframes showItem5 {
    20% {
      opacity: 1;
      transform: translate(-@_offset_distance, 0);
    }
    40% {
      opacity: 1;
      transform: translate(-0.5*@_offset_distance, -0.866*@_offset_distance);
    }
    60% {
      opacity: 1;
      transform: translate(0.5*@_offset_distance, -0.866*@_offset_distance);
    }
    80% {
      opacity: 1;
      transform: translate(@_offset_distance, 0);
    }
    100% {
      opacity: 1;
      transform: translate(0.5*@_offset_distance, 0.866*@_offset_distance);
    }
  }

  @keyframes hiddenItem5 {
    0% {
      opacity: 1;
      transform: translate(0.5*@_offset_distance, 0.866*@_offset_distance);
    }
    20% {
      opacity: 1;
      transform: translate(@_offset_distance, 0);
    }
    40% {
      opacity: 1;
      transform: translate(0.5*@_offset_distance, -0.866*@_offset_distance);
    }
    60% {
      opacity: 1;
      transform: translate(-0.5*@_offset_distance, -0.866*@_offset_distance);
    }
    80% {
      opacity: 1;
      transform: translate(-@_offset_distance, 0);
    }
    100% {
      opacity: 0;
      transform: translate(0, 0);
    }
  }

  @keyframes showItem6 {
    16.67% {
      opacity: 1;
      transform: translate(-@_offset_distance, 0);
    }
    33.33% {
      opacity: 1;
      transform: translate(-0.5*@_offset_distance, -0.866*@_offset_distance);
    }
    50% {
      opacity: 1;
      transform: translate(0.5*@_offset_distance, -0.866*@_offset_distance);
    }
    66.67% {
      opacity: 1;
      transform: translate(@_offset_distance, 0);
    }
    83.33% {
      opacity: 1;
      transform: translate(0.5*@_offset_distance, 0.866*@_offset_distance);
    }
    100% {
      opacity: 1;
      transform: translate(-0.5*@_offset_distance, 0.866*@_offset_distance);
    }
  }

  @keyframes hiddenItem6 {
    0% {
      opacity: 1;
      transform: translate(-0.5*@_offset_distance, 0.866*@_offset_distance);
    }
    16.67% {
      opacity: 1;
      transform: translate(0.5*@_offset_distance, 0.866*@_offset_distance);
    }
    33.33% {
      opacity: 1;
      transform: translate(@_offset_distance, 0);
    }
    50% {
      opacity: 1;
      transform: translate(0.5*@_offset_distance, -0.866*@_offset_distance);
    }
    66.67% {
      opacity: 1;
      transform: translate(-0.5*@_offset_distance, -0.866*@_offset_distance);
    }
    83.33% {
      opacity: 1;
      transform: translate(-@_offset_distance, 0);
    }
    100% {
      opacity: 0;
      transform: translate(0, 0);
    }
  }
</style>
