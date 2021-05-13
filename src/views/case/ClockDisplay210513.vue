<template>
  <div class="wrapper">
    <div class="inner">
      <digital-flip-card :number="hour[0]" :preNumber="preHour[0]"/>
      <digital-flip-card :number="hour[1]" :preNumber="preHour[1]"/>
      <colon/>
      <digital-flip-card :number="minute[0]" :preNumber="preMinute[0]"/>
      <digital-flip-card :number="minute[1]" :preNumber="preMinute[1]"/>
      <colon/>
      <digital-flip-card :number="second[0]" :preNumber="preSecond[0]"/>
      <digital-flip-card :number="second[1]" :preNumber="preSecond[1]"/>
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
      preHour: '00',
      preMinute: '00',
      preSecond: '00',
    });
    let timer = null;
    onMounted(() => {
      timer = setInterval(() => {
        [data.preHour, data.preMinute, data.preSecond] = GetTimeStr(-1).split(':');
        [data.hour, data.minute, data.second] = GetTimeStr(0).split(':');
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
