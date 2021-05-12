<template>
  <div class="wrapper">
    <div class="inner">
      <digital-flip-card>{{hour[0]}}</digital-flip-card>
      <digital-flip-card>{{hour[1]}}</digital-flip-card>
      <colon/>
      <digital-flip-card>{{minute[0]}}</digital-flip-card>
      <digital-flip-card>{{minute[1]}}</digital-flip-card>
      <colon/>
      <digital-flip-card>{{second[0]}}</digital-flip-card>
      <digital-flip-card>{{second[1]}}</digital-flip-card>
    </div>
  </div>
</template>

<script>
import {
  reactive, toRefs, onMounted, onBeforeUnmount,
} from 'vue';
import DigitalFlipCard from 'components/case/clock/DigitalFlipCard.vue';
import Colon from 'components/case/clock/Colon.vue';
import { GetTimeStr } from 'assets/js/common/date&time';

export default {
  name: 'ClockDisplay',
  components: {
    DigitalFlipCard,
    Colon,
  },
  setup() {
    const data = reactive({
      hour: '00',
      minute: '00',
      second: '00',
    });
    let timer = null;
    onMounted(() => {
      timer = setInterval(() => {
        [data.hour, data.minute, data.second] = GetTimeStr().split(':');
      }, 1000);
    });
    onBeforeUnmount(() => {
      clearInterval(timer);
    });
    const refData = toRefs(data);
    return {
      ...refData,
    };
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
