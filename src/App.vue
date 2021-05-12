<template>
  <div id="nav" :class="{'nav-show': navIsShow, 'nav-hidden': !navIsShow}">
    <ul>
      <li>
        <router-link to="/pictureDisplay210509" class="router-link" @click="navIsShow = false">
          <i class="fa fa-calendar-check-o"></i>
          图片/相册展示设计
        </router-link>
      </li>
      <li>
        <router-link to="/clockDisplay210513" class="router-link" @click="navIsShow = false">
          <i class="fa fa-calendar-check-o"></i>
          卡片反转时钟
        </router-link>
      </li>
    </ul>
    <div class="nav-control-btn"
         @click="navIsShow = !navIsShow">
      <i class="fa fa-chevron-circle-left"
         :class="{'nav-control-right': navIsShow, 'nav-control-left': !navIsShow}"></i>
    </div>
  </div>
  <div id='main-container'>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      navIsShow: false,
    };
  },
  methods: {},
};
</script>
<style scoped lang="less">
  #main-container {
    width: 100%;
    height: 100%;
  }

  #nav {
    z-index: 999;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: @_nav_w;
    background-color: @_nav_bgc;
    border-radius: 0 10px 10px 0;
    transition: margin-left 500ms;

    &.nav-show {
      margin-left: 0;
    }

    &.nav-hidden {
      margin-left: -@_nav_w;
    }

    ul {
      li {
        height: 30px;

        .router-link {
          display: block;
          height: 100%;
          line-height: 30px;
          padding-left: 10px;
          text-decoration: none;
        }
      }
    }

    .nav-control-btn {
      .absolute_vertical_center();
      right: -15px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      text-align: center;
      background-color: darken(@_nav_bgc, 20%);;

      i {
        color: @_nav_bgc;
        font-size: 28px;
        line-height: 30px;
        transition: transform 500ms;

        &.nav-control-left {
          transform: rotateZ(0);
        }

        &.nav-control-left {
          transform: rotateZ(-180deg);
        }
      }
    }
  }
</style>
