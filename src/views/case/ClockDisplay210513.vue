<template>
  <div class="wrapper">
    <div class="inner">
      <digital-flip-card>1</digital-flip-card>
      <digital-flip-card>2</digital-flip-card>
      <colon/>
      <digital-flip-card>3</digital-flip-card>
      <digital-flip-card>4</digital-flip-card>
      <colon/>
      <digital-flip-card>5</digital-flip-card>
      <digital-flip-card>6</digital-flip-card>
    </div>
  </div>
</template>

<script>
import DigitalFlipCard from 'components/case/clock/DigitalFlipCard.vue';
import Colon from 'components/case/clock/Colon.vue';

export default {
  name: 'ClockDisplay',
  components: {
    DigitalFlipCard,
    Colon,
  },
};
</script>

<style scoped lang="less">
  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;

    .inner {
      .absolute_center();
      display: flex;
    }
  }
</style>
