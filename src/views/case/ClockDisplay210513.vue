<template>
  <div class="wrapper">
    <div class="inner">
      <digital-flip-card :number="hour[0]"/>
      <digital-flip-card :number="hour[1]"/>
      <colon/>
      <digital-flip-card :number="minute[0]"/>
      <digital-flip-card :number="minute[1]"/>
      <colon/>
      <digital-flip-card :number="second[0]"/>
      <digital-flip-card :number="second[1]"/>
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
